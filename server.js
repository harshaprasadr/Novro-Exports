/**
 * NOVRO EXPORTS - DIRECT SMTP WEB SERVER & API
 * 
 * Provides static website serving and direct Gmail SMTP email dispatch
 * using Node.js and Nodemailer.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Load environment variables from .env
require('dotenv').config();

const nodemailer = require('nodemailer');

const PORT = parseInt(process.env.PORT || '8000', 10);
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function sanitizeHeader(val) {
  if (!val) return '';
  return String(val).replace(/[\r\n\t]/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Handle POST /api/send-email
 */
async function handleSendEmail(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.writeHead(405);
    res.end(JSON.stringify({ success: false, error: 'Method not allowed' }));
    return;
  }

  let body = '';
  req.on('data', chunk => {
    body += chunk;
    if (body.length > 1e6) { // 1MB limit
      req.destroy();
    }
  });

  req.on('end', async () => {
    try {
      const data = JSON.parse(body || '{}');

      const rawName = data.name || data.formName || '';
      const rawEmail = data.email || data.formEmail || '';
      const rawPhone = data.phone || data.formPhone || '';
      const rawCountry = data.country || data.formCountry || '';
      const rawCommodity = data.commodity || data.formCommodityType || 'Royal Basmati Rice';
      const rawMessage = data.message || data.formMessage || '';

      // Validate inputs
      const cleanName = sanitizeHeader(rawName);
      const cleanEmail = sanitizeHeader(rawEmail).toLowerCase();
      const cleanPhone = sanitizeHeader(rawPhone);
      const cleanCountry = sanitizeHeader(rawCountry);
      const cleanCommodity = sanitizeHeader(rawCommodity);
      const cleanMessage = String(rawMessage).trim();

      if (!cleanName || cleanName.length < 2) {
        res.writeHead(400);
        res.end(JSON.stringify({ success: false, error: 'Please provide your full name (minimum 2 characters).' }));
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!cleanEmail || !emailRegex.test(cleanEmail)) {
        res.writeHead(400);
        res.end(JSON.stringify({ success: false, error: 'Please provide a valid email address.' }));
        return;
      }

      if (!cleanMessage || cleanMessage.length < 5) {
        res.writeHead(400);
        res.end(JSON.stringify({ success: false, error: 'Please enter your inquiry requirement (minimum 5 characters).' }));
        return;
      }

      // Check SMTP credentials
      const smtpUser = process.env.SMTP_USER || 'novroexportssupport@gmail.com';
      const smtpPass = (process.env.SMTP_PASS || '').replace(/\s+/g, '').trim();
      const toEmail = process.env.TO_EMAIL || smtpUser;

      if (!smtpPass || smtpPass === 'paste_your_16_digit_app_password_here' || smtpPass === 'your-16-character-app-password') {
        res.writeHead(503);
        res.end(JSON.stringify({
          success: false,
          error: 'SMTP server is waiting for your 16-character Google App Password in the .env file. Please add SMTP_PASS in .env.'
        }));
        return;
      }

      // Configure direct Gmail SMTP Transporter
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '465', 10),
        secure: (process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465'),
        auth: {
          user: smtpUser,
          pass: smtpPass
        }
      });

      const now = new Date();
      const timestamp = now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });

      const subjectLine = (data.subject && data.subject.trim())
        ? sanitizeHeader(data.subject)
        : `Inquiry from ${cleanName} – ${cleanCommodity} | Novro Exports`;

      const plainText = [
        `========================================`,
        `    NEW WEBSITE INQUIRY – NOVRO EXPORTS`,
        `========================================`,
        ``,
        `VISITOR CONTACT DETAILS:`,
        `• Full Name:        ${cleanName}`,
        `• Email Address:    ${cleanEmail}`,
        `• Phone / WhatsApp: ${cleanPhone || 'Not Specified'}`,
        `• Company / Port:   ${cleanCountry || 'Not Specified'}`,
        ``,
        `INQUIRY SPECIFICATIONS:`,
        `• Commodity:        ${cleanCommodity}`,
        `• Target Details:`,
        cleanMessage,
        ``,
        `METADATA:`,
        `• Submitted At:     ${timestamp}`,
        `• Target Inbox:     ${toEmail}`,
        `• Direct Reply:     Reply to this email to respond directly to ${cleanEmail}`
      ].join('\n');

      const htmlBody = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
          <div style="background: #0f172a; padding: 26px 32px; border-bottom: 3px solid #C91B1C;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px;">NOVRO EXPORTS</h1>
            <p style="color: #94a3b8; margin: 6px 0 0; font-size: 13px;">Official Trade Desk Inquiry Notification</p>
          </div>

          <div style="padding: 30px 32px;">
            <div style="background: #f8fafc; border-left: 4px solid #C91B1C; padding: 14px 18px; margin-bottom: 24px; border-radius: 0 8px 8px 0;">
              <p style="margin: 0; color: #334155; font-size: 14px; font-weight: 600;">
                Subject: <span style="color: #0f172a;">${escapeHtml(subjectLine)}</span>
              </p>
            </div>

            <h2 style="color: #0f172a; font-size: 16px; margin: 0 0 16px; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">
              Buyer &amp; Contact Details
            </h2>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 180px; font-weight: 600;">Buyer Full Name:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 700;">${escapeHtml(cleanName)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email Address:</td>
                <td style="padding: 8px 0; color: #0f172a;">
                  <a href="mailto:${escapeHtml(cleanEmail)}" style="color: #C91B1C; text-decoration: underline; font-weight: 600;">${escapeHtml(cleanEmail)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Phone / WhatsApp:</td>
                <td style="padding: 8px 0; color: #0f172a;">${escapeHtml(cleanPhone || 'Not Specified')}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Company / Destination Port:</td>
                <td style="padding: 8px 0; color: #0f172a;">${escapeHtml(cleanCountry || 'Not Specified')}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Selected Commodity:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${escapeHtml(cleanCommodity)}</td>
              </tr>
            </table>

            <h2 style="color: #0f172a; font-size: 16px; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">
              Client Specifications &amp; Requirements
            </h2>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px 20px; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap; margin-bottom: 24px;">
${escapeHtml(cleanMessage)}
            </div>

            <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 14px 18px; font-size: 13px; color: #065f46;">
              <strong>Direct Reply Enabled:</strong> Clicking <em>Reply</em> in your email client will reply directly to <strong>${escapeHtml(cleanEmail)}</strong>.
            </div>
          </div>

          <div style="background: #f1f5f9; padding: 16px 32px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
            Submitted on ${escapeHtml(timestamp)} via Novro Exports Official Portal
          </div>
        </div>
      `;

      // Dispatch via SMTP
      const mailOptions = {
        from: `"${cleanName} (Novro Trade Inquiry)" <${smtpUser}>`,
        to: toEmail,
        replyTo: `"${cleanName}" <${cleanEmail}>`,
        subject: subjectLine,
        text: plainText,
        html: htmlBody
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('✅ Email successfully sent via SMTP! Message ID:', info.messageId);

      res.writeHead(200);
      res.end(JSON.stringify({
        success: true,
        message: 'Inquiry successfully dispatched to the trade desk.',
        messageId: info.messageId
      }));

    } catch (err) {
      console.error('❌ SMTP dispatch error:', err);

      let clientMsg = 'Failed to dispatch email via SMTP server.';
      if (err.code === 'EAUTH') {
        clientMsg = 'SMTP Authentication failed. Please check your 16-character Google App Password in .env.';
      } else if (err.message) {
        clientMsg = err.message;
      }

      res.writeHead(500);
      res.end(JSON.stringify({ success: false, error: clientMsg }));
    }
  });
}

/**
 * Static file server
 */
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const pathname = parsedUrl.pathname;

  // API Route
  if (pathname === '/api/send-email') {
    handleSendEmail(req, res);
    return;
  }

  // Normalize static file path
  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\') {
    safePath = '/index.html';
  }

  let filePath = path.join(ROOT_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Check if file with .html extension exists
      if (!path.extname(filePath)) {
        filePath = filePath + '.html';
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }
    }

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=86400'
      });
      res.end(content);
    });
  });
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    const nextPort = PORT + 1;
    console.warn(`⚠️ Port ${PORT} is in use by another program. Trying port ${nextPort}...`);
    server.listen(nextPort, () => {
      console.log(`====================================================`);
      console.log(`🚀 Novro Exports Server running at http://localhost:${nextPort}`);
      console.log(`📧 Direct SMTP Endpoint active at http://localhost:${nextPort}/api/send-email`);
      console.log(`====================================================`);
    });
  } else {
    console.error('Server error:', err);
  }
});

server.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 Novro Exports Server running at http://localhost:${PORT}`);
  console.log(`📧 Direct SMTP Endpoint active at http://localhost:${PORT}/api/send-email`);
  console.log(`====================================================`);
});
