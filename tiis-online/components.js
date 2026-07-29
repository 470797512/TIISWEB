/* ===================================================
   TIIS Online — Shared Components (Navbar, Footer, Utils)
   =================================================== */

// ---- SVG Icons ----
const ICONS = {
  chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/></svg>',
  arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd"/></svg>',
  facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
  linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  calendar: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd"/></svg>',
  clock: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd"/></svg>',
  location: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.274 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd"/></svg>',
  laptop: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15H4.25A2.25 2.25 0 012 12.75v-8.5zm12.5 8.5H5.5V5h9v7.75zM1 16.25A1.25 1.25 0 012.25 15h15.5a1.25 1.25 0 010 2.5H2.25A1.25 1.25 0 011 16.25z" clip-rule="evenodd"/></svg>',
  shield: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fill-rule="evenodd" d="M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.75z" clip-rule="evenodd"/></svg>',
  academic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1l-9 4.5 9 4.5 9-4.5L10 1z"/><path d="M3 7.5v5.25l7 3.5 7-3.5V7.5l-7 3.5-7-3.5z"/></svg>',
  book: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06V4.31a.75.75 0 00-.543-.72A9.958 9.958 0 0015 3.25a9.958 9.958 0 00-4.25.965v12.605zM9.25 4.215A9.958 9.958 0 005 3.25c-.846 0-1.667.105-2.457.306A.75.75 0 002 4.31v10.75a.75.75 0 00.957.72A7.462 7.462 0 015 15.5a7.46 7.46 0 014.25 1.32V4.215z"/></svg>',
  certificate: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fill-rule="evenodd" d="M10 2a.75.75 0 01.75.75v.258a33.64 33.64 0 016.226.814.75.75 0 01-.272 1.476 32.14 32.14 0 00-5.569-.746.75.75 0 00-.135 0 32.14 32.14 0 00-5.569.746.75.75 0 01-.272-1.476 33.64 33.64 0 016.226-.814V2.75A.75.75 0 0110 2zM7 7a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 017 7zm.75 2.25a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM7 12a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 017 12zm-2 4h10v-1.5a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75h-11.5a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0V16z" clip-rule="evenodd"/></svg>',
  users: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z"/></svg>',
  globe: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.503.204A6.5 6.5 0 117.95 3.83 6.5 6.5 0 0116.497 10.204z" clip-rule="evenodd"/></svg>',
  play: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>',
  externalLink: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5zm4.943-.69a.75.75 0 01.933-.143L16.47 8.57a.75.75 0 01-.94 1.17L10 6.29V10a.75.75 0 01-1.5 0V5.56a.75.75 0 01.693-.75z" clip-rule="evenodd"/></svg>',
};


// ---- Build Navigation ----
/* ---- Site configuration ----
   Social profiles previously rendered as href="#", so all three footer icons
   were dead links. Fill in the real URLs and the icon appears; leave one empty
   and it is omitted rather than shipping a link that goes nowhere. Keep these
   in step with the values in ../components.js. */
const SOCIAL_LINKS = {
  facebook: '',
  instagram: '',
  linkedin: '',
};

// Honour the OS "reduce motion" setting for JS-driven motion too.
const PREFERS_REDUCED_MOTION =
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;


function buildNavbar(currentPage) {
  const isHome = currentPage === 'home';
  const nav = document.createElement('nav');
  nav.className = `navbar ${isHome ? 'navbar--transparent' : 'navbar--solid'}`;
  nav.id = 'navbar';
  nav.setAttribute('role', 'navigation');

  const logoSrc = isHome
    ? 'images/logos/TIIS-white.png'
    : 'images/logos/TIIS-Logo-PNG-1024x468.png';

  nav.innerHTML = `
    <div class="navbar__inner">
      <a href="index.html" class="navbar__logo" aria-label="TIIS Online Home">
        <img src="${logoSrc}" alt="TIIS Logo" id="navLogo" data-white="images/logos/TIIS-white.png" data-color="images/logos/TIIS-Logo-PNG-1024x468.png">
        <span class="navbar__logo-divider"></span>
        <span class="navbar__logo-online">Online</span>
      </a>

      <ul class="navbar__menu">
        <li class="navbar__item"><a href="index.html" class="navbar__link">Home</a></li>
        <li class="navbar__item">
          <!-- Was href="#", which navigated nowhere when clicked. There is no
               online-courses index page, so this is a group label, not a link:
               a button opens the same dropdown for mouse, touch and keyboard. -->
          <button type="button" class="navbar__link navbar__link--group"
                  aria-expanded="false" aria-haspopup="true">Courses ${ICONS.chevronDown}</button>
          <div class="navbar__dropdown">
            <a href="course-cpd.html">CPD for Financial Advisers</a>
            <a href="course-mba.html">Online MBA</a>
            <a href="course-gdfp.html">Graduate Diploma of Financial Planning</a>
          </div>
        </li>
        <li class="navbar__item"><a href="../index.html" class="navbar__link">Main Campus Site ${ICONS.externalLink}</a></li>
        <li class="navbar__item"><a href="../contact.html" class="navbar__link">Contact</a></li>
      </ul>

      <a href="#enquire" class="navbar__cta navbar__cta-desktop">Enquire Now</a>

      <button class="navbar__toggle" id="navToggle" aria-label="Open menu"
              aria-expanded="false" aria-controls="mobileMenu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  document.body.prepend(nav);

  // Skip link — first thing in the tab order.
  const skip = document.createElement('a');
  skip.className = 'skip-link';
  skip.href = '#main';
  skip.textContent = 'Skip to main content';
  document.body.prepend(skip);

  // Mobile menu
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'navbar__mobile-menu';
  mobileMenu.id = 'mobileMenu';
  mobileMenu.setAttribute('role', 'dialog');
  mobileMenu.setAttribute('aria-modal', 'true');
  mobileMenu.setAttribute('aria-label', 'Site menu');
  mobileMenu.innerHTML = `
    <button class="navbar__mobile-close" id="mobileClose" aria-label="Close menu">&times;</button>
    <a href="index.html" class="navbar__mobile-link">Home</a>
    <!-- A heading, not a link: there is no online-courses index page. -->
    <div class="navbar__mobile-link navbar__mobile-heading">Online Courses</div>
    <div class="navbar__mobile-sub">
      <a href="course-cpd.html">CPD for Financial Advisers</a>
      <a href="course-mba.html">Online MBA</a>
      <a href="course-gdfp.html">Grad Diploma Financial Planning</a>
    </div>
    <a href="../index.html" class="navbar__mobile-link">Main Campus Site</a>
    <a href="../contact.html" class="navbar__mobile-link">Contact</a>
    <div style="margin-top:24px">
      <a href="#enquire" class="btn btn--primary" style="width:100%;justify-content:center">Enquire Now</a>
    </div>
  `;
  document.body.appendChild(mobileMenu);

  // Overlay
  const overlay = document.createElement('div');
  overlay.className = 'mobile-overlay';
  overlay.id = 'mobileOverlay';
  document.body.appendChild(overlay);

  // Toggle handlers
  const toggle = document.getElementById('navToggle');
  const close = document.getElementById('mobileClose');
  const olay = document.getElementById('mobileOverlay');

  const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
  let lastFocused = null;

  function openMenu() {
    lastFocused = document.activeElement;
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    (mobileMenu.querySelector(FOCUSABLE) || mobileMenu).focus();
  }

  function closeMenu() {
    if (!mobileMenu.classList.contains('active')) return;
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    setTimeout(() => { overlay.style.display = 'none'; }, 300);
    if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
  }

  toggle.addEventListener('click', openMenu);
  close.addEventListener('click', closeMenu);
  olay.addEventListener('click', closeMenu);

  // Escape closes the drawer; Tab is trapped inside it while open.
  document.addEventListener('keydown', (e) => {
    if (!mobileMenu.classList.contains('active')) return;
    if (e.key === 'Escape') { closeMenu(); return; }
    if (e.key !== 'Tab') return;

    const items = [...mobileMenu.querySelectorAll(FOCUSABLE)]
      .filter(el => el.offsetParent !== null);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  });

  // Following a link inside the drawer closes it (matters for #anchor links,
  // where no navigation happens).
  mobileMenu.querySelectorAll('a[href]').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) closeMenu();
  });

  // ---- Courses dropdown: click/keyboard as well as hover ----
  const groupBtn = nav.querySelector('.navbar__link--group');
  if (groupBtn) {
    const item = groupBtn.closest('.navbar__item');
    groupBtn.addEventListener('click', () => {
      const open = item.classList.toggle('is-open');
      groupBtn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (e) => {
      if (item.contains(e.target)) return;
      item.classList.remove('is-open');
      groupBtn.setAttribute('aria-expanded', 'false');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      item.classList.remove('is-open');
      groupBtn.setAttribute('aria-expanded', 'false');
    });
  }

  // ---- Transparent -> solid on scroll (home only) ----
  if (isHome) {
    const navEl = document.getElementById('navbar');
    const logoEl = document.getElementById('navLogo');
    const toggleSpans = toggle.querySelectorAll('span');

    function syncNavbar() {
      const solid = window.scrollY > 60;
      navEl.classList.toggle('navbar--solid', solid);
      navEl.classList.toggle('navbar--transparent', !solid);
      logoEl.src = solid ? logoEl.dataset.color : logoEl.dataset.white;
      toggleSpans.forEach(s => {
        s.style.background = solid ? 'var(--navy)' : 'var(--white)';
      });
    }

    window.addEventListener('scroll', syncNavbar, { passive: true });
    // Run once on load: arriving already scrolled (reload with restored scroll,
    // back-navigation, or a link with a #hash) previously left the navbar
    // transparent — white links on a white background.
    syncNavbar();
  }

  markCurrentPage(nav, mobileMenu);
}


/* ---- Mark the current page in the navigation ---- */
function markCurrentPage(nav, mobileMenu) {
  const here = window.location.pathname.replace(/\/$/, '/index.html');

  [nav, mobileMenu].forEach(root => {
    root.querySelectorAll('a[href]').forEach(a => {
      if (a.classList.contains('navbar__logo')) return;
      const url = new URL(a.getAttribute('href'), window.location.href);
      if (url.origin !== window.location.origin) return;
      const target = url.pathname.replace(/\/$/, '/index.html');
      if (target !== here) return;
      if (url.hash && url.hash !== window.location.hash) return;
      a.setAttribute('aria-current', 'page');
    });
  });
}


// ---- Build Footer ----
function buildFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <div class="footer__brand-online">
            <img src="images/logos/TIIS-white.png" alt="TIIS Logo">
            <span class="footer__online-divider"></span>
            <span class="footer__online-text">Online</span>
          </div>
          <p>TIIS Online is the digital learning division of The Institute of International Studies, delivering flexible online programs for working professionals across Australia.</p>
          <div class="footer__accreditations">
            <span>CRICOS: 03705J</span>
            <span>Provider: PRV14085</span>
            <span>ABN: 37 605 540 547</span>
          </div>
        </div>

        <div>
          <div class="footer__heading">Online Courses</div>
          <ul class="footer__links">
            <li><a href="course-cpd.html">CPD for Financial Advisers</a></li>
            <li><a href="course-mba.html">Online MBA</a></li>
            <li><a href="course-gdfp.html">Grad Diploma Financial Planning</a></li>
          </ul>
        </div>

        <div>
          <div class="footer__heading">Quick Links</div>
          <ul class="footer__links">
            <li><a href="index.html">TIIS Online Home</a></li>
            <li><a href="../index.html">Main Campus Site</a></li>
            <li><a href="../about.html">About TIIS</a></li>
            <li><a href="../contact.html">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <div class="footer__heading">Contact</div>
          <ul class="footer__links">
            <li><a href="tel:1300164600">1300 164 600</a></li>
            <li><a href="tel:+61280980702">+61 2 8098 0702</a></li>
            <li><a href="mailto:online@tiis.edu.au">online@tiis.edu.au</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p>&copy; ${new Date().getFullYear()} The Institute of International Studies (TIIS). All rights reserved.</p>
        <div class="footer__socials">
          ${Object.entries(SOCIAL_LINKS)
            .filter(([, url]) => url)
            .map(([name, url]) => `
          <a href="${url}" aria-label="TIIS on ${name[0].toUpperCase() + name.slice(1)}"
             target="_blank" rel="noopener noreferrer">${ICONS[name]}</a>`)
            .join('')}
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}


// ---- Scroll-to-Top Button ----
function buildScrollTop() {
  const btn = document.createElement('button');
  btn.className = 'scroll-top';
  btn.id = 'scrollTop';
  btn.setAttribute('aria-label', 'Scroll to top');
  btn.innerHTML = ICONS.arrowUp;
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


// ---- Scroll Animations ----
function initScrollAnimations() {
  const targets = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in');
  if (!targets.length) return;

  // No motion wanted, or no IntersectionObserver: leave content in its default
  // visible state.
  if (PREFERS_REDUCED_MOTION || !('IntersectionObserver' in window)) return;

  // Opt in to the hidden starting state only now that we know we can reveal it
  // again, so a JS failure can never leave the page blank.
  document.documentElement.classList.add('js-reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));

  // Reveal anything already on screen — or skipped by a #hash jump further
  // down the page — without waiting for a scroll that may never happen.
  requestAnimationFrame(() => {
    targets.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('visible');
        observer.unobserve(el);
      }
    });
  });
}


// ---- Counter Animation ----
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const finalValue = el =>
    (el.dataset.prefix || '') + el.dataset.count + (el.dataset.suffix || '');

  // The markup ships "0" as a placeholder, so a counter that never animates
  // shows a wrong number. Without motion, write the real value immediately.
  if (PREFERS_REDUCED_MOTION || !('IntersectionObserver' in window)) {
    counters.forEach(el => { el.textContent = finalValue(el); });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = prefix + Math.floor(target * eased) + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}


/* ---- Wrap page content in a <main> landmark ----
   These pages are a flat list of <section>s with no landmark, so assistive
   tech had no main region and the skip link had no target. Runs before the
   navbar and footer are injected, so whatever is in <body> is the page's own
   content. */
function wrapMainContent() {
  if (document.getElementById('main')) return;

  const main = document.createElement('main');
  main.id = 'main';
  main.setAttribute('tabindex', '-1');

  const body = document.body;
  const content = [...body.children].filter(el => {
    const tag = el.tagName;
    return tag !== 'SCRIPT' && tag !== 'NOSCRIPT' && tag !== 'TEMPLATE';
  });
  if (!content.length) return;

  body.insertBefore(main, content[0]);
  content.forEach(el => main.appendChild(el));
}


/* ---- Image loading hints for JS-injected images ----
   Images in the static markup carry loading/decoding attributes directly;
   setting them from JS would run after the parser started fetching. This only
   covers images this script creates (nav and footer logos). */
function improveImageLoading() {
  document.querySelectorAll('.footer img, .navbar__logo img').forEach(img => {
    if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
    if (img.closest('.footer') && !img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
}


// ---- Initialize everything ----
function initPage(pageName) {
  wrapMainContent();
  buildNavbar(pageName);
  buildFooter();
  buildScrollTop();
  improveImageLoading();

  // Wait for DOM to be ready
  requestAnimationFrame(() => {
    initScrollAnimations();
    initCounters();
  });
}
