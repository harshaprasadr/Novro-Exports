/**
 * NETLIFY SERVERLESS FUNCTION - DIRECT SMTP DISPATCHER
 * 
 * Handles POST /api/send-email on Netlify deployments using Nodemailer.
 */

const nodemailer = require('nodemailer');

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

exports.handler = async (event, context) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, error: 'Method not allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');

    const cleanName = sanitizeHeader(data.name || data.formName || '');
    const cleanEmail = sanitizeHeader(data.email || data.formEmail || '').toLowerCase();
    const cleanPhone = sanitizeHeader(data.phone || data.formPhone || '');
    const cleanCountry = sanitizeHeader(data.country || data.formCountry || '');
    const cleanCommodity = sanitizeHeader(data.commodity || data.formCommodityType || 'Royal Basmati Rice');
    const cleanMessage = String(data.message || data.formMessage || '').trim();

    if (!cleanName || cleanName.length < 2) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: 'Please provide your full name (minimum 2 characters).' })
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: 'Please provide a valid email address.' })
      };
    }

    if (!cleanMessage || cleanMessage.length < 5) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: 'Please enter your inquiry requirement (minimum 5 characters).' })
      };
    }

    const smtpUser = process.env.SMTP_USER || 'novroexportssupport@gmail.com';
    const smtpPass = (process.env.SMTP_PASS || '').replace(/\s+/g, '').trim();
    const toEmail = process.env.TO_EMAIL || smtpUser;

    if (!smtpPass) {
      return {
        statusCode: 503,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'SMTP credentials missing. Please set SMTP_PASS in your Netlify site settings.'
        })
      };
    }

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
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background: #0f172a; padding: 26px 32px; border-bottom: 3px solid #C91B1C;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">NOVRO EXPORTS</h1>
          <p style="color: #94a3b8; margin: 6px 0 0; font-size: 13px;">Official Trade Desk Inquiry Notification</p>
        </div>

        <div style="padding: 30px 32px;">
          <h2 style="color: #0f172a; font-size: 16px; margin: 0 0 16px; text-transform: uppercase;">
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
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Company / Port:</td>
              <td style="padding: 8px 0; color: #0f172a;">${escapeHtml(cleanCountry || 'Not Specified')}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Selected Commodity:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${escapeHtml(cleanCommodity)}</td>
            </tr>
          </table>

          <h2 style="color: #0f172a; font-size: 16px; margin: 0 0 12px; text-transform: uppercase;">
            Client Specifications &amp; Requirements
          </h2>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px 20px; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap; margin-bottom: 24px;">
${escapeHtml(cleanMessage)}
          </div>

          <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 14px 18px; font-size: 13px; color: #065f46;">
            <strong>Direct Reply Enabled:</strong> Clicking <em>Reply</em> in your email client will reply directly to <strong>${escapeHtml(cleanEmail)}</strong>.
          </div>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"${cleanName} (Novro Trade Inquiry)" <${smtpUser}>`,
      to: toEmail,
      replyTo: `"${cleanName}" <${cleanEmail}>`,
      subject: subjectLine,
      text: plainText,
      html: htmlBody
    };

    const info = await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Inquiry successfully dispatched to the trade desk.',
        messageId: info.messageId
      })
    };
  } catch (err) {
    console.error('SMTP error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: err.code === 'EAUTH'
          ? 'SMTP Authentication failed. Please check your 16-character Google App Password.'
          : (err.message || 'Failed to dispatch email via SMTP server.')
      })
    };
  }
};

