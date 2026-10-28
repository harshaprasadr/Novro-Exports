/**
 * NOVRO EXPORTS - GLOBAL TRADE PLATFORM
 * Interactive Frontend Controller
 */

// Product Database with Technical Specifications
const PRODUCT_DATA = {
  'basmati-rice': {
    id: 'basmati-rice',
    category: 'food',
    title: 'Royal Basmati & Non-Basmati Rice',
    subtitle: '1121, Traditional, Pusa, Sugandha & PR-11 Varieties',
    image: 'images/food_products.jpg',
    origin: 'Punjab & Haryana, India',
    specs: {
      'Average Grain Length': '8.35 mm to 8.40 mm (Pre-cooked)',
      'Moisture Content': 'Max 12.5%',
      'Purity': '95% Minimum',
      'Broken Grains': 'Max 1.0%',
      'Admixture': 'Max 5.0%',
      'Crop Year': 'Current Fresh Crop',
      'Packaging': '10kg, 20kg, 25kg, 50kg Non-Woven / BOPP / Jute Bags',
      'MOQ': '1 x 20ft FCL (26 Metric Tons)',
      'Certifications': 'APEDA, FSSAI, Phytosanitary, SGS Pre-shipment'
    },
    description: 'Aged long-grain aromatic Royal Basmati rice cultivated in the fertile Himalayan foothills. Processed in ISO-certified automated milling plants with sortexed laser grading.'
  },
  'wheat-flour': {
    id: 'wheat-flour',
    category: 'food',
    title: 'Milling Wheat & Refined Flour (Atta / Maida)',
    subtitle: 'High Gluten, Machine Cleaned Export Quality',
    image: 'images/shelfgrains.avif',
    origin: 'Madhya Pradesh & Punjab, India',
    specs: {
      'Protein': '11.5% - 13.0% Min',
      'Moisture': 'Max 12.0%',
      'Wet Gluten': '28% - 30% Min',
      'Falling Number': '350 - 450 seconds',
      'Total Ash': 'Max 0.55%',
      'Packaging': '25kg & 50kg Multi-wall Polypropylene Bags',
      'MOQ': '2 x 20ft FCL (52 Metric Tons)',
      'Certifications': 'FSSAI, SGS Inspection, Certificate of Origin'
    },
    description: 'Cleaned, premium-grade milling wheat and fine baker-grade flour suitable for industrial baking, confectioneries, pasta, and consumer markets.'
  },
  'indian-spices': {
    id: 'indian-spices',
    category: 'food',
    title: 'Whole & Ground Indian Spices',
    subtitle: 'Turmeric, Cardamom, Cumin, Red Chili & Black Pepper',
    image: 'images/spices_export.jpg',
    origin: 'Kerala, Andhra Pradesh & Rajasthan, India',
    specs: {
      'Turmeric Curcumin': '3.0% to 5.0% Guaranteed',
      'Chili Capsaicin': 'High / Medium SHU available',
      'Moisture': 'Max 9.5% - 11%',
      'Extraneous Matter': 'Max 0.5%',
      'Form': 'Whole Fingers, Seeds, or Micro-pulverized Powder',
      'Packaging': 'Vacuum Packed 5kg, 10kg, 25kg Kraft Paper / Poly Bags',
      'MOQ': '5 Metric Tons (LCL / Consolidated FCL)',
      'Certifications': 'Spice Board of India, USFDA, Halal, Phytosanitary'
    },
    description: 'Aromatic, sun-dried, laboratory-tested spices sourced directly from contract farming belts with guaranteed high essential oil content.'
  },
  'tmt-steel': {
    id: 'tmt-steel',
    category: 'construction',
    title: 'High-Strength TMT Rebars (Fe 500D / 550D)',
    subtitle: 'Thermo-Mechanically Treated Earthquake-Resistant Rebars',
    image: 'images/construction_products.jpg',
    origin: 'Primary Steel Mills, India',
    specs: {
      'Grades': 'Fe 500, Fe 500D, Fe 550, Fe 550D (IS 1786 / ASTM A615)',
      'Diameter Range': '8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm',
      'Yield Stress': '500 - 550 N/mm² Min',
      'Tensile Strength': '565 - 585 N/mm² Min',
      'Elongation': '16% to 18% Min',
      'Standard Length': '12.0 Meters (Custom Cut available)',
      'Bundling': 'Seaworthy steel strapped bundles (Approx 2 MT/bundle)',
      'MOQ': '100 Metric Tons (Break Bulk or Containerized FCL)',
      'Certifications': 'BIS (Bureau of Indian Standards), Mill Test Certificate (MTC 3.1)'
    },
    description: 'Thermo-Mechanically Treated (TMT) steel reinforcement bars engineered with a ductile ferrite-pearlite core and hard martensitic outer layer.'
  },
  'portland-cement': {
    id: 'portland-cement',
    category: 'construction',
    title: 'Ordinary Portland Cement (OPC 43/53 & PPC)',
    subtitle: 'High Initial Strength & Sulfate-Resistant Formulations',
    image: 'images/constructionsite.avif',
    origin: 'Leading Integrated Cement Plants, India',
    specs: {
      'Grades': 'OPC 43, OPC 53, PPC (Flyash based), SRC',
      '28-Day Strength': '53 MPa to 58 MPa Min',
      'Initial Setting Time': 'Min 45 - 60 Minutes',
      'Final Setting Time': 'Max 300 Minutes',
      'Soundness': 'Max 10 mm (Le Chatelier)',
      'Packaging': '50kg HDPE/Paper 3-Ply Bags, 1.5 MT Jumbo Sling Bags',
      'MOQ': '500 Metric Tons / 10 x 20ft FCL or Bulk Cargo',
      'Certifications': 'BIS, ASTM C150 Type I/II, CE Certification on request'
    },
    description: 'Freshly packed high-grade structural cement suited for massive commercial skyscrapers, marine structures, bridges, and infrastructure works.'
  },
  'granite-marble': {
    id: 'granite-marble',
    category: 'construction',
    title: 'Natural Granite, Marble & Vitrified Tiles',
    subtitle: 'Mirror-Polished Slabs, Cut-to-Size & Porcelain Tiles',
    image: 'images/granite_marble_export.jpg',
    origin: 'Rajasthan, Karnataka & Gujarat, India',
    specs: {
      'Granite Colors': 'Black Galaxy, Absolute Black, Tan Brown, Kashmir White',
      'Slab Thickness': '18mm, 20mm, 30mm (+/- 1mm tolerance)',
      'Finish': 'Polished, Honed, Flamed, Bush-hammered, Leather',
      'Tiles Sizes': '600x600mm, 600x1200mm, 800x1600mm Porcelain',
      'Water Absorption': '< 0.05% (Vitrified)',
      'Packaging': 'Fumigated seaworthy wooden crates with plastic film wrap',
      'MOQ': '1 x 20ft Heavy Container (approx 450 sq. meters)',
      'Certifications': 'Fumigation Certificate, Phytosanitary, Origin Certificate'
    },
    description: 'Extracted from premier Indian quarries, gangsaw cut and multi-head polished to perfection. Ideal for architectural cladding, flooring, and luxury countertops.'
  }
};

// Global Trade Corridors Database
const TRADE_ROUTES = {
  'middle-east': {
    region: 'Middle East',
    ports: 'Jebel Ali (UAE), Dammam (Saudi Arabia), Hamad (Qatar), Shuwaikh (Kuwait)',
    transit: '4 – 7 Days',
    commodities: 'Basmati Rice, Spices, Wheat Flour, TMT Steel, Ceramic Tiles',
    schedule: 'Weekly direct sailings from JNPT & Mundra Port'
  },
  'europe': {
    region: 'Europe & UK',
    ports: 'Rotterdam (Netherlands), Antwerp (Belgium), London Gateway (UK), Hamburg (Germany)',
    transit: '22 – 28 Days',
    commodities: 'Organic Agro Commodities, Refined Spices, Granite Slabs, Natural Stones',
    schedule: 'Bi-weekly container liner service with full EU compliance docs'
  },
  'north-america': {
    region: 'North America',
    ports: 'New York / Newark (USA), Savannah (USA), Long Beach (USA), Montreal (Canada)',
    transit: '28 – 35 Days',
    commodities: 'Basmati Rice, Pulses, Processed Foods, Decorative Granite, Rebars',
    schedule: 'Direct trans-Atlantic and Pacific ocean services, FDA cleared'
  },
  'africa': {
    region: 'Africa',
    ports: 'Mombasa (Kenya), Dar es Salaam (Tanzania), Durban (South Africa), Djibouti',
    transit: '12 – 16 Days',
    commodities: 'Non-Basmati Rice, Sugar, Portland Cement, Construction Chemicals',
    schedule: 'Breakbulk and FCL container shipping with pre-export verification'
  },
  'asia': {
    region: 'Asia & Far East',
    ports: 'Singapore, Port Klang (Malaysia), Colombo (Sri Lanka), Bangkok (Thailand)',
    transit: '6 – 10 Days',
    commodities: 'Spices, Wheat, TMT Rebars, Aggregates, Marble Tiles',
    schedule: 'Express intra-Asia feeder lines with rapid customs turnaround'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initNavbar();
  initHeroVideo();
  initCounters();
  initProductCatalog();
  initProductCardSliders();
  initFreightCalculator();
  initTradeRoutesMap();
  initContactForm();
  initModals();
  initSmoothScroll();
  initBackToTop();
  initProcessTimelineAnimation();
});

/* ===================================================================
   HERO BACKGROUND VIDEO (DESKTOP / WEB ONLY)
   =================================================================== */
function initHeroVideo() {
  const video = document.querySelector('.hero-bg-video');
  if (video && window.innerWidth > 768) {
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }
}

/* ===================================================================
   0. EXECUTIVE SITE PRELOADER CONTROLLER
   =================================================================== */
function initPreloader() {
  const preloader = document.getElementById('sitePreloader');
  if (!preloader || preloader.dataset.init === 'true') return;
  preloader.dataset.init = 'true';

  const minDisplayTime = 750; // Smooth perception threshold
  const startTime = Date.now();

  function dismissPreloader() {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, minDisplayTime - elapsed);

    setTimeout(() => {
      preloader.classList.add('preloader-hidden');
      document.body.classList.remove('preloader-active');

      setTimeout(() => {
        preloader.style.display = 'none';
      }, 700);
    }, remaining);
  }

  if (document.readyState === 'complete') {
    dismissPreloader();
  } else {
    window.addEventListener('load', dismissPreloader, { once: true });
    // Safety fallback in case external network assets delay
    setTimeout(dismissPreloader, 2200);
  }
}

// Immediate hook if preloader element is already parsed
if (typeof document !== 'undefined' && document.getElementById('sitePreloader')) {
  initPreloader();
}

/* ===================================================================
   1. NAVBAR CONTROLLER
   =================================================================== */
function initNavbar() {
  const header = document.querySelector('header.site-header');
  const toggleBtn = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileMenuDrawer');
  const closeBtn = document.getElementById('mobileMenuCloseBtn');
  const drawerHomeLink = document.getElementById('mobDrawerHomeLink');
  const drawerCtaBtn = document.getElementById('mobDrawerCtaBtn');
  const mobNavLinks = document.querySelectorAll('.mob-nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNav();
  }, { passive: true });

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    if (toggleBtn) toggleBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateDrawerClock();
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    if (toggleBtn) toggleBtn.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (drawer && drawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDrawer();
    });
  }

  if (drawerHomeLink) {
    drawerHomeLink.addEventListener('click', () => {
      closeDrawer();
    });
  }

  if (drawerCtaBtn) {
    drawerCtaBtn.addEventListener('click', () => {
      closeDrawer();
    });
  }

  mobNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobNavLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      closeDrawer();
    });
  });

  // Close drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Live IST Clock update timer
  updateDrawerClock();
  setInterval(updateDrawerClock, 15000);
}

function updateDrawerClock() {
  const clockEl = document.getElementById('mobDrawerClock');
  if (!clockEl) return;
  const now = new Date();
  try {
    clockEl.textContent = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(now);
  } catch (e) {
    const hours = String((now.getUTCHours() + 5 + Math.floor((now.getUTCMinutes() + 30) / 60)) % 24).padStart(2, '0');
    const mins = String((now.getUTCMinutes() + 30) % 60).padStart(2, '0');
    clockEl.textContent = `${hours}:${mins}`;
  }
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-menu a');
  const mobNavLinks = document.querySelectorAll('.mob-nav-link');
  const scrollPosition = window.scrollY + 140;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPosition >= top && scrollPosition < top + height) {
      desktopNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });

      mobNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

/* ===================================================================
   2. ANIMATED COUNTERS
   =================================================================== */
function initCounters() {
  const counters = document.querySelectorAll('.counter-val');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const duration = 1600;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target % 1 === 0 ? target : target.toFixed(1);
              clearInterval(timer);
            } else {
              counter.textContent = current % 1 === 0 ? Math.floor(current) : current.toFixed(0);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.querySelector('.metrics-banner');
  if (metricsSection) {
    observer.observe(metricsSection);
  }
}

/* ===================================================================
   3. PRODUCT CATALOG CONTROLLER (FILTERING & MODAL TRIGGER)
   =================================================================== */
function initProductCatalog() {
  const categoryBtns = document.querySelectorAll('.category-btn');
  const searchInput = document.getElementById('catalogSearchInput');
  const productCards = document.querySelectorAll('.product-card');

  function applyFilters() {
    const activeCategory = document.querySelector('.category-btn.active')?.dataset.filter || 'all';
    const query = (searchInput?.value || '').toLowerCase().trim();

    productCards.forEach(card => {
      const cardCategory = card.dataset.category;
      const cardText = card.textContent.toLowerCase();

      const matchesCategory = activeCategory === 'all' || cardCategory === activeCategory;
      const matchesSearch = query === '' || cardText.includes(query);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  // Spec modal triggers for dedicated spec buttons if present
  document.querySelectorAll('.view-spec-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productId = btn.getAttribute('data-product-id');
      openSpecModal(productId);
    });
  });

  // Direct Inquire from Product Card
  document.querySelectorAll('.inquire-prod-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const prodName = btn.getAttribute('data-product-name');
      prefillInquiryForm(prodName);
    });
  });
}

/* ===================================================================
   3B. PRODUCT CARD MULTI-IMAGE SLIDER (SIDE-SCROLL ON TAP, SWIPE & DESKTOP ARROWS/DRAG)
   =================================================================== */
function initProductCardSliders() {
  const cardMediaElements = document.querySelectorAll('.clean-card-media[data-carousel="true"]');

  cardMediaElements.forEach((cardMedia) => {
    const track = cardMedia.querySelector('.card-slider-track');
    if (!track) return;

    const slides = Array.from(track.querySelectorAll('.card-slide'));
    if (slides.length <= 1) return;

    const dots = Array.from(cardMedia.querySelectorAll('.card-dots .dot'));
    const prevBtn = cardMedia.querySelector('.card-nav-prev');
    const nextBtn = cardMedia.querySelector('.card-nav-next');

    let currentSlideIdx = 0;
    let scrollTimeout = null;
    let isProgrammaticScroll = false;

    // Helper: Update active dot & slide active classes
    const updateActiveDot = (activeIndex) => {
      dots.forEach((dot, idx) => {
        const isActive = idx === activeIndex;
        dot.classList.toggle('active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === activeIndex);
      });
    };

    // Helper: Scroll to specific slide index
    const goToSlide = (targetIndex) => {
      currentSlideIdx = (targetIndex + slides.length) % slides.length;
      const targetSlide = slides[currentSlideIdx];
      const slideWidth = targetSlide ? targetSlide.offsetWidth : (track.clientWidth || track.offsetWidth);
      const targetLeft = targetSlide ? targetSlide.offsetLeft : (currentSlideIdx * slideWidth);

      isProgrammaticScroll = true;

      // Temporarily release CSS scroll-snap to prevent desktop browser snap-back fighting
      track.style.scrollSnapType = 'none';
      track.style.scrollBehavior = 'smooth';

      // Perform smooth scroll to target position
      track.scrollTo({
        left: targetLeft,
        behavior: 'smooth'
      });

      // Target slide scrollIntoView fallback for web browsers
      try {
        targetSlide?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      } catch (err) {}

      updateActiveDot(currentSlideIdx);

      clearTimeout(track._snapTimer);
      track._snapTimer = setTimeout(() => {
        track.style.scrollSnapType = 'x mandatory';
        isProgrammaticScroll = false;
      }, 400);
    };

    // Native scroll listener to sync dots on manual swipe / inertia scroll
    track.addEventListener('scroll', () => {
      if (isProgrammaticScroll) return;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const slideWidth = slides[0]?.offsetWidth || track.clientWidth || track.offsetWidth;
        if (!slideWidth) return;
        const newIdx = Math.round(track.scrollLeft / slideWidth);
        if (newIdx >= 0 && newIdx < slides.length && newIdx !== currentSlideIdx) {
          currentSlideIdx = newIdx;
          updateActiveDot(currentSlideIdx);
        }
      }, 45);
    }, { passive: true });

    // Interactive Dot Buttons Click
    dots.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const index = parseInt(dot.getAttribute('data-index'), 10);
        if (!isNaN(index)) {
          goToSlide(index);
        }
      });
    });

    // Previous Arrow Click (Immediate on Desktop Web)
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        goToSlide(currentSlideIdx - 1);
      });
    }

    // Next Arrow Click (Immediate on Desktop Web)
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        goToSlide(currentSlideIdx + 1);
      });
    }

    // Desktop Mouse Drag to Swipe / Side-Scroll
    let isMouseDown = false;
    let dragStartX = 0;
    let dragStartScroll = 0;
    let hasDragged = false;

    track.addEventListener('mousedown', (e) => {
      if (e.target.closest('.card-nav-arrow') || e.target.closest('.card-dots') || e.target.closest('.scrim-tag') || e.target.closest('.card-reserve-btn')) return;
      isMouseDown = true;
      hasDragged = false;
      dragStartX = e.pageX;
      dragStartScroll = track.scrollLeft;
      track.classList.add('is-dragging');
      track.style.scrollSnapType = 'none';
      track.style.scrollBehavior = 'auto';
    });

    window.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return;
      const deltaX = e.pageX - dragStartX;
      if (Math.abs(deltaX) > 6) {
        hasDragged = true;
      }
      track.scrollLeft = dragStartScroll - deltaX;
    });

    const finishMouseDrag = () => {
      if (!isMouseDown) return;
      isMouseDown = false;
      track.classList.remove('is-dragging');
      track.style.scrollBehavior = 'smooth';
      track.style.scrollSnapType = 'x mandatory';

      if (hasDragged) {
        const slideWidth = slides[0]?.offsetWidth || track.clientWidth || track.offsetWidth;
        if (slideWidth) {
          const nearestIdx = Math.round(track.scrollLeft / slideWidth);
          goToSlide(nearestIdx);
        }
      }
    };

    window.addEventListener('mouseup', finishMouseDrag);

    // Touch tap vs swipe handling on mobile
    let touchStartX = 0;
    let touchStartY = 0;
    let isTouchMove = false;
    let wasTouch = false;

    track.addEventListener('touchstart', (e) => {
      wasTouch = true;
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isTouchMove = false;
      }
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) {
        const diffX = Math.abs(e.touches[0].clientX - touchStartX);
        const diffY = Math.abs(e.touches[0].clientY - touchStartY);
        if (diffX > 8 || diffY > 8) {
          isTouchMove = true;
        }
      }
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      if (!isTouchMove) {
        if (e.target.closest('.card-nav-arrow') || e.target.closest('.card-dots') || e.target.closest('.scrim-tag') || e.target.closest('.card-reserve-btn')) return;
        goToSlide(currentSlideIdx + 1);
      }
    });

    // Desktop Mouse Click on upper card area (tap without drag side-scrolls to next image)
    track.addEventListener('click', (e) => {
      if (wasTouch) {
        wasTouch = false;
        return;
      }
      if (hasDragged) {
        hasDragged = false;
        return;
      }
      if (e.target.closest('.card-nav-arrow') || e.target.closest('.card-dots') || e.target.closest('.scrim-tag') || e.target.closest('.card-reserve-btn')) return;
      goToSlide(currentSlideIdx + 1);
    });
  });
}

function openSpecModal(productId) {
  const item = PRODUCT_DATA[productId];
  if (!item) return;

  const modalOverlay = document.getElementById('specModalOverlay');
  const modalTitle = document.getElementById('modalSpecTitle');
  const modalSubtitle = document.getElementById('modalSpecSubtitle');
  const modalDesc = document.getElementById('modalSpecDesc');
  const modalTable = document.getElementById('modalSpecTable');
  const modalImg = document.getElementById('modalSpecImg');
  const modalInquireBtn = document.getElementById('modalInquireBtn');

  if (modalTitle) modalTitle.textContent = item.title;
  if (modalSubtitle) modalSubtitle.textContent = item.subtitle;
  if (modalDesc) modalDesc.textContent = item.description;
  if (modalImg) modalImg.src = item.image;

  if (modalTable) {
    modalTable.innerHTML = '';
    for (const [key, val] of Object.entries(item.specs)) {
      const row = document.createElement('div');
      row.className = 'spec-row';
      row.innerHTML = `<span class="spec-label">${key}</span><span class="spec-val">${val}</span>`;
      modalTable.appendChild(row);
    }
  }

  if (modalInquireBtn) {
    modalInquireBtn.onclick = () => {
      closeAllModals();
      prefillInquiryForm(item.title);
    };
  }

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function prefillInquiryForm(productTitle) {
  const messageInput = document.getElementById('formMessage');
  const contactSection = document.getElementById('contact');

  if (messageInput) {
    messageInput.value = `Hello Novro Exports,\n\nWe are looking to source "${productTitle}". Please provide an FOB/CIF quotation, standard packaging specs, and export certificate details.\n\nEstimated Quantity: `;
    messageInput.focus();
  }

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ===================================================================
   4. INTERACTIVE RFQ & CONTAINER VOLUME CALCULATOR
   =================================================================== */
function initFreightCalculator() {
  const productSelect = document.getElementById('calcProductSelect');
  if (!productSelect) return;
  const volumeSlider = document.getElementById('calcVolumeRange');
  const volumeNumber = document.getElementById('calcVolumeInput');
  const containerSelect = document.getElementById('calcContainerType');
  const portSelect = document.getElementById('calcPortSelect');
  const incotermSelect = document.getElementById('calcIncotermSelect');

  const outCommodity = document.getElementById('calcOutCommodity');
  const outVolume = document.getElementById('calcOutVolume');
  const outContainerCount = document.getElementById('calcOutContainerCount');
  const outTransitTime = document.getElementById('calcOutTransitTime');
  const outIncoterm = document.getElementById('calcOutIncoterm');
  const outCompliance = document.getElementById('calcOutCompliance');
  const applyBtn = document.getElementById('calcApplyRfqBtn');

  function calculate() {
    const commodity = productSelect ? productSelect.value : 'Basmati Rice';
    const volume = parseFloat(volumeNumber?.value || volumeSlider?.value || 50);
    const containerType = containerSelect?.value || '20ft';
    const port = portSelect?.value || 'Jebel Ali, UAE';
    const incoterm = incotermSelect?.value || 'CIF';

    // Container payload capacity in Metric Tons
    let capacityPerContainer = 26; // Default 20ft
    if (containerType === '40ft') {
      capacityPerContainer = 28;
    } else if (containerType === 'breakbulk') {
      capacityPerContainer = 500;
    }

    // Heavy commodity adjustments
    if (commodity.includes('Steel') || commodity.includes('Cement')) {
      capacityPerContainer = 27; // Max weight limits
    }

    const estimatedContainers = containerType === 'breakbulk' 
      ? `1 Chartered Batch (${volume} MT)` 
      : `${Math.ceil(volume / capacityPerContainer)} x ${containerType.toUpperCase()} FCL`;

    // Estimate transit times
    let transit = '5 – 7 Days';
    if (port.includes('Rotterdam') || port.includes('Europe')) transit = '22 – 26 Days';
    else if (port.includes('New York') || port.includes('USA')) transit = '28 – 34 Days';
    else if (port.includes('Mombasa') || port.includes('Africa')) transit = '12 – 15 Days';
    else if (port.includes('Singapore')) transit = '6 – 8 Days';

    // Compliance paperwork
    let complianceDoc = 'IEC, FSSAI, APEDA, Phytosanitary Certificate';
    if (commodity.includes('Steel') || commodity.includes('Cement')) {
      complianceDoc = 'IEC, Mill Test Cert (MTC 3.1), BIS, SGS Pre-shipment';
    } else if (commodity.includes('Granite')) {
      complianceDoc = 'IEC, Fumigation Certificate, Certificate of Origin';
    }

    // Update UI
    const sliderValueDisplay = document.getElementById('sliderValueDisplay');
    if (sliderValueDisplay) sliderValueDisplay.textContent = `${volume} MT`;

    if (outCommodity) outCommodity.textContent = commodity;
    if (outVolume) outVolume.textContent = `${volume} Metric Tons`;
    if (outContainerCount) outContainerCount.textContent = estimatedContainers;
    if (outTransitTime) outTransitTime.textContent = transit;
    if (outIncoterm) outIncoterm.textContent = `${incoterm} (${port})`;
    if (outCompliance) outCompliance.textContent = complianceDoc;
  }

  if (volumeSlider && volumeNumber) {
    volumeSlider.addEventListener('input', () => {
      volumeNumber.value = volumeSlider.value;
      calculate();
    });

    volumeNumber.addEventListener('input', () => {
      volumeSlider.value = volumeNumber.value;
      calculate();
    });
  }

  [productSelect, containerSelect, portSelect, incotermSelect].forEach(el => {
    if (el) el.addEventListener('change', calculate);
  });

  // Calculate initially
  calculate();

  // Apply to RFQ button
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const commodity = productSelect ? productSelect.value : 'Selected Commodity';
      const volume = volumeNumber ? volumeNumber.value : '50';
      const container = containerSelect ? containerSelect.options[containerSelect.selectedIndex].text : '20ft';
      const port = portSelect ? portSelect.value : 'International Port';
      const incoterm = incotermSelect ? incotermSelect.value : 'CIF';

      const messageInput = document.getElementById('formMessage');
      if (messageInput) {
        messageInput.value = `Official RFQ / Trade Inquiry:\n` +
          `• Commodity: ${commodity}\n` +
          `• Quantity: ${volume} Metric Tons\n` +
          `• Packaging / Loading: ${container}\n` +
          `• Preferred Incoterm: ${incoterm}\n` +
          `• Destination Discharge Port: ${port}\n\n` +
          `Please provide your best competitive quote, payment terms (LC/TT), and upcoming vessel sailing schedule.`;
        
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        messageInput.focus();
      }
    });
  }
}

/* ===================================================================
   5. REALISTIC INTERACTIVE MARITIME SHIPPING ROUTES MAP (LEAFLET)
   =================================================================== */
function initTradeRoutesMap() {
  const mapElement = document.getElementById('realWorldMap');
  if (!mapElement) return;

  // Check if Leaflet is loaded; if not, poll gently
  if (typeof L === 'undefined') {
    setTimeout(initTradeRoutesMap, 150);
    return;
  }

  // 1. Initialize Map centered on Indian Ocean / Mediterranean / Europe trade crossroads
  const map = L.map('realWorldMap', {
    center: [30.0, 44.0],
    zoom: 3.5,
    minZoom: 2.5,
    maxZoom: 7,
    scrollWheelZoom: false, // Don't hijack page scrolling unless clicked
    zoomControl: true,
    attributionControl: false
  });

  // Enable scroll zoom on user click
  map.on('click', () => {
    map.scrollWheelZoom.enable();
  });

  // 2. Realistic OpenStreetMap Global Topography (Zero API Key, Real Oceans & Countries)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Guarantee zero popups can be opened under any circumstance
  map.openPopup = function() { return this; };

  // 3. Port & Route Definitions (Exclusively Middle East & Europe)
  const ORIGIN_PORT = {
    name: 'JNPT Mumbai & Mundra (Origin Hub)',
    country: 'India',
    coords: [18.9499, 72.9510],
    flag: '🇮🇳'
  };

  const CORRIDORS = {
    'middle-east': {
      id: 'middle-east',
      name: 'Port of Jebel Ali (Dubai)',
      country: 'United Arab Emirates',
      flag: '🇦🇪',
      coords: [25.0065, 55.0617],
      transit: '4 – 7 Days',
      frequency: '3x Weekly Direct Liners',
      commodities: 'Royal Basmati Rice, Spices, Fe 500D Rebars, Porcelain Tiles',
      incoterms: 'CIF Jebel Ali, CFR Dammam, FOB Mumbai',
      zoom: 4.5,
      center: [22.0, 64.0],
      waypoints: [
        [18.95, 72.95],
        [20.5, 66.0],
        [22.8, 60.5],
        [24.5, 57.5],
        [25.0065, 55.0617]
      ]
    },
    'europe': {
      id: 'europe',
      name: 'Port of Rotterdam & Antwerp',
      country: 'Netherlands / EU',
      flag: '🇪🇺',
      coords: [51.9244, 4.4777],
      transit: '22 – 28 Days',
      frequency: 'Weekly Express Container Service',
      commodities: 'Mirror-Polished Granite, Certified Wheat, Turmeric & Cardamom',
      incoterms: 'CIF Rotterdam, CIF Antwerp, FOB Nhava Sheva',
      zoom: 3.5,
      center: [34.0, 32.0],
      waypoints: [
        [18.95, 72.95],
        [14.5, 54.0],
        [12.5, 43.8],
        [21.0, 38.5],
        [27.5, 34.0],
        [31.2, 32.3],
        [34.5, 24.0],
        [36.8, 11.5],
        [36.0, -5.3],
        [43.8, -9.5],
        [48.8, -5.2],
        [51.9244, 4.4777]
      ]
    }
  };

  // 4. Origin Beacon Marker (No popup cards)
  const originIcon = L.divIcon({
    className: 'map-origin-pulse-marker',
    html: `
      <div class="origin-beacon-ring"></div>
      <div class="origin-beacon-core" title="Origin Hub: JNPT Mumbai & Mundra"></div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  });

  L.marker(ORIGIN_PORT.coords, { icon: originIcon }).addTo(map);

  // 5. Draw Routes and Destination Markers (No Popups on click)
  const routePolylines = {};
  const destinationMarkers = {};

  Object.entries(CORRIDORS).forEach(([key, route]) => {
    // Maritime Route Polyline
    const polyline = L.polyline(route.waypoints, {
      color: '#E62425',
      weight: 3,
      opacity: 0.8,
      dashArray: '6, 8',
      lineCap: 'round',
      lineJoin: 'round',
      cursor: 'pointer'
    }).addTo(map);

    routePolylines[key] = polyline;

    // Click polyline to activate corridor without opening popup
    polyline.on('click', () => {
      selectCorridor(key);
    });

    // Destination Port Custom Marker
    const destIcon = L.divIcon({
      className: 'custom-dest-wrapper',
      html: `
        <div class="map-dest-port-marker" data-route-id="${key}">
          <span class="marker-dot"></span>
          <span class="marker-label">${route.name.split('/')[0].trim()}</span>
        </div>
      `,
      iconSize: [0, 0],
      iconAnchor: [0, 0]
    });

    const marker = L.marker(route.coords, { icon: destIcon }).addTo(map);
    destinationMarkers[key] = marker;

    // Click marker to activate corridor without opening popup
    marker.on('click', () => {
      selectCorridor(key);
    });

    // Animated Ship Marker along the route
    const midIdx = Math.floor(route.waypoints.length / 2);
    const shipIcon = L.divIcon({
      className: 'ship-icon-wrap',
      html: `<div class="map-cargo-ship-icon" title="Container Liner En Route">🚢</div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });

    L.marker(route.waypoints[midIdx], { icon: shipIcon }).addTo(map);
  });

  // 6. Connect Filter Chips
  const chips = document.querySelectorAll('.market-chip');
  const hubCards = document.querySelectorAll('.hub-card');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const marketKey = chip.getAttribute('data-market');
      selectCorridor(marketKey);
    });
  });

  // Connect Hub Cards Click to Map
  hubCards.forEach(card => {
    card.addEventListener('click', () => {
      const hubKey = card.getAttribute('data-hub');
      selectCorridor(hubKey);
    });
  });

  function selectCorridor(key) {
    if (key === 'all') {
      map.flyTo([30.0, 44.0], 3.5, { duration: 1.2 });
      Object.values(routePolylines).forEach(pl => {
        pl.setStyle({ opacity: 0.8, weight: 3, color: '#E62425' });
      });
      hubCards.forEach(c => c.classList.remove('active'));
      chips.forEach(c => {
        if (c.getAttribute('data-market') === 'all') c.classList.add('active');
        else c.classList.remove('active');
      });
      return;
    }

    const corridor = CORRIDORS[key];
    if (!corridor) return;

    // Fly smoothly to the corridor
    map.flyTo(corridor.center || corridor.coords, corridor.zoom || 4, {
      duration: 1.2,
      easeLinearity: 0.25
    });

    // Highlight the active route polyline and dim others
    Object.entries(routePolylines).forEach(([rKey, pl]) => {
      if (rKey === key) {
        pl.setStyle({ opacity: 1, weight: 4.5, color: '#E62425' });
      } else {
        pl.setStyle({ opacity: 0.2, weight: 2, color: '#94A3B8' });
      }
    });

    // Sync active state on filter chips
    chips.forEach(c => {
      if (c.getAttribute('data-market') === key) c.classList.add('active');
      else c.classList.remove('active');
    });

    // Sync active state on hub cards
    hubCards.forEach(card => {
      if (card.getAttribute('data-hub') === key) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }

  // Invalidate size once DOM settles
  setTimeout(() => {
    map.invalidateSize();
  }, 400);

  window.addEventListener('resize', () => {
    map.invalidateSize();
  });
}

/* ===================================================================
   6. CONTACT & RFQ FORM CONTROLLER (DYNAMIC TRIGGER-EMAIL APPROACH)
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusMsg = document.getElementById('formStatusMsg');
  const submitBtn = document.getElementById('submitBtn');
  const whatsappBtn = document.getElementById('whatsappDirectBtn');
  const chipGroup = document.getElementById('commodityChipsGroup');
  const commodityInput = document.getElementById('formCommodityType');

  // Dynamic configuration loaded from email-config.json or window.FORM_CONFIG
  let formConfig = Object.assign({
    recipientEmail: "novroexportssupport@gmail.com",
    subjectPrefix: "New Website Inquiry – Novro Exports"
  }, window.FORM_CONFIG || {});

  // Asynchronously fetch external configuration if available
  fetch('email-config.json')
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Config file unavailable');
    })
    .then(remoteCfg => {
      formConfig = Object.assign({}, formConfig, remoteCfg);
    })
    .catch(() => {});

  // Interactive Multi-Select Commodity Selection Chips
  if (chipGroup && commodityInput) {
    function updateSelectedCommodities() {
      const activeChips = Array.from(chipGroup.querySelectorAll('.commodity-chip.active'));
      chipGroup.querySelectorAll('.commodity-chip').forEach(c => {
        c.setAttribute('aria-pressed', c.classList.contains('active') ? 'true' : 'false');
      });

      if (activeChips.length === 0) {
        commodityInput.value = 'Not Specified';
      } else {
        commodityInput.value = activeChips
          .map(c => c.getAttribute('data-val') || c.textContent.trim())
          .join(', ');
      }
    }

    chipGroup.querySelectorAll('.commodity-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const val = chip.getAttribute('data-val') || chip.textContent.trim();

        if (val === 'Not Specified') {
          const isCurrentlyActive = chip.classList.contains('active');
          chipGroup.querySelectorAll('.commodity-chip').forEach(c => c.classList.remove('active'));
          if (!isCurrentlyActive) {
            chip.classList.add('active');
          }
        } else {
          // If selecting any specific commodity, turn off "Not Specified"
          const notSpecChip = chipGroup.querySelector('.commodity-chip[data-val="Not Specified"]');
          if (notSpecChip) notSpecChip.classList.remove('active');

          // Toggle clicked chip on/off
          chip.classList.toggle('active');
        }

        updateSelectedCommodities();
      });
    });

    // Initialize aria-pressed states
    updateSelectedCommodities();
  }



  const defaultBtnHtml = `<span>SEND INQUIRY</span> <span class="submit-circle-arrow" aria-hidden="true"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></span>`;

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      try {
        const nameInput = document.getElementById('formName');
        const emailInput = document.getElementById('formEmail');
        const countryInput = document.getElementById('formCountry');
        const phoneInput = document.getElementById('formPhone');
        const messageInput = document.getElementById('formMessage');

        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const country = countryInput ? countryInput.value.trim() : '';
        const phone = phoneInput ? phoneInput.value.trim() : '';
        const message = messageInput ? messageInput.value.trim() : '';
        const commodity = (commodityInput && commodityInput.value.trim()) ? commodityInput.value.trim() : 'Royal Basmati Rice';

        // 1. Strict Validation and Sanitization of Required Fields
        if (!name || name.length < 2) {
          showStatus('Please provide your full name (minimum 2 characters).', 'error');
          if (nameInput) nameInput.focus();
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
          showStatus('Please provide a valid email address (e.g., buyer@company.com).', 'error');
          if (emailInput) emailInput.focus();
          return;
        }

        if (phone && !/^[+0-9\s\-().]{6,25}$/.test(phone)) {
          showStatus('Please provide a valid phone or WhatsApp number.', 'error');
          if (phoneInput) phoneInput.focus();
          return;
        }

        if (!message || message.length < 5) {
          showStatus('Please tell us about your requirement or target specifications (minimum 5 characters).', 'error');
          if (messageInput) messageInput.focus();
          return;
        }

        // Sanitize single-line header/visitor fields to prevent header injection (\r, \n)
        const cleanName = name.replace(/[\r\n\t]/g, ' ').replace(/\s+/g, ' ').trim();
        const cleanEmail = email.replace(/[\r\n\t\s]/g, '').toLowerCase().trim();
        const cleanPhone = phone ? phone.replace(/[\r\n\t]/g, ' ').replace(/\s+/g, ' ').trim() : 'Not Specified';
        const cleanCountry = country ? country.replace(/[\r\n\t]/g, ' ').replace(/\s+/g, ' ').trim() : 'Not Specified';
        const cleanCommodity = commodity ? commodity.replace(/[\r\n\t]/g, ' ').replace(/\s+/g, ' ').trim() : 'Royal Basmati Rice';
        const cleanMessage = message.trim();

        // 2. Prevent Duplicate Submissions & Apply Loading State
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.setAttribute('aria-busy', 'true');
          submitBtn.innerHTML = `<span>DISPATCHING INQUIRY...</span> <span class="submit-spinner" aria-hidden="true" style="border-color: rgba(255,255,255,0.3); border-top-color: #ffffff;"></span>`;
        }
        showStatus('Dispatching your export inquiry to the trade desk...', 'loading');

        // 3. Assemble Form Details & Dynamic Recipient Payload
        const now = new Date();
        let formattedTimestamp = '';
        try {
          formattedTimestamp = now.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          });
        } catch (e) {
          formattedTimestamp = now.toISOString();
        }

        const subjectLine = `Inquiry from ${cleanName} – ${cleanCommodity} | Novro Exports`;

        const structuredSummary = [
          `========================================`,
          `    NEW WEBSITE INQUIRY – NOVRO EXPORTS`,
          `========================================`,
          ``,
          `VISITOR CONTACT DETAILS:`,
          `• Full Name:        ${cleanName}`,
          `• Email Address:    ${cleanEmail}`,
          `• Phone / WhatsApp: ${cleanPhone}`,
          `• Company / Port:   ${cleanCountry}`,
          ``,
          `INQUIRY SPECIFICATIONS:`,
          `• Commodity:        ${cleanCommodity}`,
          `• Target Details:`,
          cleanMessage,
          ``,
          `METADATA:`,
          `• Submitted At:     ${formattedTimestamp}`,
          `• Target Inbox:     ${formConfig.recipientEmail}`,
          `• Direct Reply:     Reply to this email to respond directly to ${cleanEmail}`
        ].join('\n');

        const templateParams = {
          // Visitor Identification (For Display Name & Body)
          name: cleanName,
          from_name: cleanName,
          visitor_name: cleanName,
          buyer_name: cleanName,
          user_name: cleanName,

          // Visitor Email (For Reply-To Header & Body)
          email: cleanEmail,
          reply_to: cleanEmail,
          replyTo: cleanEmail,
          from_email: cleanEmail,
          visitor_email: cleanEmail,
          user_email: cleanEmail,

          // Visitor Contact & Specification Details
          phone: cleanPhone,
          country: cleanCountry,
          destination_port: cleanCountry,
          company: cleanCountry,
          commodity: cleanCommodity,
          requirement: cleanMessage,
          message: structuredSummary,
          summary: structuredSummary,

          // Email Headers & Routing
          subject: subjectLine,
          title: subjectLine,
          subject_line: subjectLine,
          to_email: formConfig.recipientEmail,
          recipient_email: formConfig.recipientEmail,
          to_name: 'Novro Exports Trade Desk',
          timestamp: formattedTimestamp
        };

        // 4. Dispatch Inquiry via Direct SMTP Backend Endpoint
        const payload = {
          name: cleanName,
          email: cleanEmail,
          phone: cleanPhone,
          country: cleanCountry,
          commodity: cleanCommodity,
          message: cleanMessage,
          subject: subjectLine
        };

        fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
          .then(async (response) => {
            const result = await response.json().catch(() => ({}));
            if (!response.ok || !result.success) {
              throw new Error(result.error || `Server responded with status ${response.status}`);
            }
            showStatus('Thank you! Your export inquiry has been successfully sent to our trade desk. We will respond with specifications & FOB/CIF quotation within 24 hours.', 'success');
            form.reset();

            // Reset commodity chips back to default
            if (chipGroup && commodityInput) {
              chipGroup.querySelectorAll('.commodity-chip').forEach(c => {
                c.classList.remove('active');
                c.setAttribute('aria-pressed', 'false');
              });
              const firstChip = chipGroup.querySelector('.commodity-chip');
              if (firstChip) {
                firstChip.classList.add('active');
                firstChip.setAttribute('aria-pressed', 'true');
                commodityInput.value = firstChip.getAttribute('data-val') || 'Royal Basmati Rice';
              }
            }
          })
          .catch((err) => {
            console.error('SMTP dispatch error:', err);
            const fallbackEmail = formConfig.recipientEmail || 'novroexportssupport@gmail.com';
            const errDetail = err && err.message ? err.message : 'Server unavailable';

            showStatus(
              `${escapeHTML(errDetail)} You can also email us directly at <a href="mailto:${fallbackEmail}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(structuredSummary)}" style="text-decoration: underline; font-weight: bold; color: inherit;">${fallbackEmail}</a> or WhatsApp below.`,
              'error',
              true
            );
          })
          .finally(() => {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.removeAttribute('aria-busy');
              submitBtn.innerHTML = defaultBtnHtml;
            }
          });
      } catch (submitErr) {
        console.error('Form submission exception caught:', submitErr);
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.removeAttribute('aria-busy');
          submitBtn.innerHTML = defaultBtnHtml;
        }
        showStatus('An unexpected error occurred while preparing your inquiry. Please email us directly at ' + (formConfig.recipientEmail || 'novroexportssupport@gmail.com') + ' or via WhatsApp.', 'error');
      }
    });
  }

  // WhatsApp quick button integration
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName')?.value.trim() || 'Valued Buyer';
      const country = document.getElementById('formCountry')?.value.trim() || '';
      const text = encodeURIComponent(
        `Hello Novro Exports,\n\nMy name is ${name}${country ? ` from ${country}` : ''}. I am interested in sourcing export products (Food / Construction materials). Please share your current catalog and FOB/CIF rates.`
      );
      window.open(`https://wa.me/919606219556?text=${text}`, '_blank');
    });
  }

  function showStatus(msg, type, isHtml = false) {
    if (!statusMsg) return;
    statusMsg.className = `form-status-msg ${type}`;
    if (type === 'loading') {
      statusMsg.innerHTML = `<span class="submit-spinner" aria-hidden="true"></span><span>${escapeHTML(msg)}</span>`;
    } else if (isHtml) {
      statusMsg.innerHTML = msg;
    } else {
      statusMsg.textContent = msg;
    }
    statusMsg.style.display = type === 'loading' ? 'flex' : 'block';
  }

  function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }
}

/* ===================================================================
   7. MODALS CONTROLLER (BRAND ASSETS & SPECIFICATION QUICKVIEW)
   =================================================================== */
function initModals() {
  const specModal = document.getElementById('specModalOverlay');
  const closeBtns = document.querySelectorAll('.modal-close-btn');

  closeBtns.forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  if (specModal) {
    specModal.addEventListener('click', (e) => {
      if (e.target === specModal) {
        closeAllModals();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  document.body.style.overflow = '';
}

/* ===================================================================
   8. SMOOTH SCROLL HELPER
   =================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#!') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ===================================================================
   9. BACK TO TOP CONTROLLER
   =================================================================== */
function initBackToTop() {
  const footerBtn = document.getElementById('footerBackToTopBtn');
  const floatingBtn = document.getElementById('floatingBackToTopBtn');
  const footer = document.querySelector('footer');

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  if (footerBtn) {
    footerBtn.addEventListener('click', scrollToTop);
  }

  if (floatingBtn) {
    floatingBtn.addEventListener('click', scrollToTop);

    let isFooterVisible = false;

    if ('IntersectionObserver' in window && footer) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isFooterVisible = entry.isIntersecting;
          updateVisibility();
        });
      }, {
        root: null,
        threshold: 0.05
      });
      observer.observe(footer);
    }

    function updateVisibility() {
      // Show when scrolled down past 400px, but hide if footer is in view (no collision)
      if (window.scrollY > 400 && !isFooterVisible) {
        floatingBtn.classList.add('visible');
      } else {
        floatingBtn.classList.remove('visible');
      }
    }

    let isTicking = false;
    window.addEventListener('scroll', () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          updateVisibility();
          isTicking = false;
        });
        isTicking = true;
      }
    }, { passive: true });

    // Initial check
    updateVisibility();
  }
}

/* ===================================================================
   11. EXPORT EXECUTION PROCESS TIMELINE STAGGERED ENTRANCE ANIMATION
   =================================================================== */
function initProcessTimelineAnimation() {
  const timelineStages = document.querySelector('.timeline-stages');
  if (!timelineStages) return;

  // Mark ready for scroll-triggered staggered reveal
  timelineStages.classList.add('stages-ready');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          timelineStages.classList.add('stages-animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15
    });
    observer.observe(timelineStages);
  } else {
    timelineStages.classList.add('stages-animated');
  }
}
