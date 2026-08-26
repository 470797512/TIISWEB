/* ===================================================
   TIIS — Shared Components (Navbar, Footer, Utils)
   =================================================== */

/* ---- Site configuration ----
   Social profiles previously rendered as href="#", so all three
   footer icons were dead links. Fill in the real URLs here and the
   icon appears; leave a value empty and the icon is omitted rather
   than shipping a link that goes nowhere. */
const SOCIAL_LINKS = {
  facebook: '',
  instagram: '',
  linkedin: '',
};

// Honour the OS "reduce motion" setting for JS-driven motion too.
const PREFERS_REDUCED_MOTION =
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---- SVG Icons ----
const ICONS = {
  chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/></svg>',
  arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd"/></svg>',
  chevronLeft: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd"/></svg>',
  chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"/></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd"/></svg>',
  email: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"/><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"/></svg>',
  location: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.274 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd"/></svg>',
  calendar: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd"/></svg>',
  clock: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd"/></svg>',
  academic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1l-9 4.5 9 4.5 9-4.5L10 1z"/><path d="M3 7.5v5.25l7 3.5 7-3.5V7.5l-7 3.5-7-3.5z"/></svg>',
  facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
  linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  login: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z" clip-rule="evenodd"/></svg>',
  book: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06V4.31a.75.75 0 00-.543-.72A9.958 9.958 0 0015 3.25a9.958 9.958 0 00-4.25.965v12.605zM9.25 4.215A9.958 9.958 0 005 3.25c-.846 0-1.667.105-2.457.306A.75.75 0 002 4.31v10.75a.75.75 0 00.957.72A7.462 7.462 0 015 15.5a7.46 7.46 0 014.25 1.32V4.215z"/></svg>',
  shield: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fill-rule="evenodd" d="M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.75z" clip-rule="evenodd"/></svg>',
  id: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fill-rule="evenodd" d="M1 6a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V6zm4 1.5a2 2 0 114 0 2 2 0 01-4 0zm2 3a4 4 0 00-3.665 2.395.75.75 0 00.416 1A8.98 8.98 0 007 14.5a8.98 8.98 0 003.249-.604.75.75 0 00.416-1.001A4.001 4.001 0 007 10.5zm5-3.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm0 6.5a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm.75-4a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z" clip-rule="evenodd"/></svg>',
  certificate: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fill-rule="evenodd" d="M10 2a.75.75 0 01.75.75v.258a33.64 33.64 0 016.226.814.75.75 0 01-.272 1.476 32.14 32.14 0 00-5.569-.746.75.75 0 00-.135 0 32.14 32.14 0 00-5.569.746.75.75 0 01-.272-1.476 33.64 33.64 0 016.226-.814V2.75A.75.75 0 0110 2zM7 7a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 017 7zm.75 2.25a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM7 12a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 017 12zm-2 4h10v-1.5a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75h-11.5a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0V16z" clip-rule="evenodd"/></svg>',
  users: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z"/></svg>',
  support: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"/></svg>',
  search: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.75"/><path d="m13 13 4 4"/></svg>',
};


// ---- Build Navigation ----
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
    <div class="navbar__utility" aria-label="Community links">
      <div class="navbar__utility-inner">
        <a href="students.html" data-utility="students">Current Students</a>
        <a href="contact.html?subject=Alumni">Alumni</a>
        <a href="contact.html?subject=Agent%20Partnership">Agents</a>
        <a href="team.html#careers">Careers</a>
      </div>
    </div>
    <div class="navbar__inner">
      <a href="index.html" class="navbar__logo" aria-label="TIIS Home">
        <img src="${logoSrc}" alt="TIIS Logo" id="navLogo" data-white="images/logos/TIIS-white.png" data-color="images/logos/TIIS-Logo-PNG-1024x468.png">
      </a>

      <ul class="navbar__menu">
        <li class="navbar__item"><a href="index.html" class="navbar__link" data-nav="home">Home</a></li>
        <li class="navbar__item">
          <a href="about.html" class="navbar__link" data-nav="about">About Us ${ICONS.chevronDown}</a>
          <div class="navbar__dropdown">
            <a href="about.html">About Us</a>
            <a href="about.html#values">Mission & Values</a>
            <a href="about.html#story">Our Story</a>
            <a href="team.html">Our Team</a>
          </div>
        </li>
        <li class="navbar__item">
          <a href="courses.html" class="navbar__link" data-nav="courses">Courses ${ICONS.chevronDown}</a>
          <div class="navbar__dropdown navbar__dropdown--wide">
            <a href="courses.html" class="navbar__dropdown-all">Explore All Courses <span aria-hidden="true">→</span></a>
            <div class="navbar__dropdown-grid">
              <div>
                <div class="navbar__dropdown-group-title">Business & Management</div>
                <a href="course-bbus.html">Bachelor of Business</a>
                <a href="course-gcba.html">Graduate Certificate in Business Administration</a>
                <a href="course-mba.html">Master of Business Administration</a>
              </div>
              <div>
                <div class="navbar__dropdown-group-title">Professional Accounting</div>
                <a href="course-gcpa.html">Graduate Certificate in Professional Accounting</a>
                <a href="course-mpaa.html">Master of Professional Accounting (Advanced)</a>
              </div>
              <div>
                <div class="navbar__dropdown-group-title">IT & Cyber Security</div>
                <a href="course-bit.html">Bachelor of Information Technology</a>
                <a href="course-gcit.html">Graduate Certificate in Information Technology</a>
                <a href="course-mcs.html">Master of Cyber Security</a>
              </div>
              <div>
                <div class="navbar__dropdown-group-title">Online Study</div>
                <a href="tiis-online/index.html">TIIS Online</a>
                <a href="tiis-online/course-gdfp.html">Graduate Diploma of Financial Planning</a>
              </div>
            </div>
          </div>
        </li>
        <li class="navbar__item">
          <a href="apply.html" class="navbar__link" data-nav="study">Study with Us ${ICONS.chevronDown}</a>
          <div class="navbar__dropdown">
            <a href="index.html#why-tiis">Why Study at TIIS</a>
            <a href="life-at-tiis.html">Life at TIIS</a>
            <a href="campuses.html">Our Campuses</a>
            <a href="apply.html">How to Apply</a>
            <a href="application-forms.html">Application Forms</a>
            <a href="admission-criteria.html">Entry Requirements</a>
            <a href="key-dates.html">Key Dates</a>
            <a href="fees-and-charges.html">Fees & Charges</a>
          </div>
        </li>
        <li class="navbar__item"><a href="contact.html" class="navbar__link" data-nav="contact">Contact Us</a></li>
      </ul>

      <button class="navbar__search" type="button" data-search-open aria-label="Search the TIIS website">
        ${ICONS.search}<span>Search</span>
      </button>
      <a href="apply.html" class="navbar__cta navbar__cta-desktop">Apply Now</a>

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
    <a href="index.html" class="navbar__mobile-link" data-nav="home">Home</a>
    <a href="about.html" class="navbar__mobile-link" data-nav="about">About Us</a>
    <div class="navbar__mobile-sub">
      <a href="about.html#values">Mission & Values</a>
      <a href="about.html#story">Our Story</a>
      <a href="team.html">Our Team</a>
    </div>
    <a href="courses.html" class="navbar__mobile-link" data-nav="courses">Courses</a>
    <div class="navbar__mobile-sub">
      <a href="course-bbus.html">Bachelor of Business</a>
      <a href="course-bit.html">Bachelor of Information Technology</a>
      <a href="course-mba.html">Master of Business Administration</a>
      <a href="course-mpaa.html">Master of Professional Accounting</a>
      <a href="course-mcs.html">Master of Cyber Security</a>
      <a href="courses.html">Explore All Courses</a>
    </div>
    <a href="apply.html" class="navbar__mobile-link" data-nav="study">Study with Us</a>
    <div class="navbar__mobile-sub">
      <a href="index.html#why-tiis">Why Study at TIIS</a>
      <a href="life-at-tiis.html">Life at TIIS</a>
      <a href="campuses.html">Our Campuses</a>
      <a href="apply.html">How to Apply</a>
      <a href="application-forms.html">Application Forms</a>
      <a href="admission-criteria.html">Entry Requirements</a>
      <a href="key-dates.html">Key Dates</a>
      <a href="fees-and-charges.html">Fees & Charges</a>
    </div>
    <a href="contact.html" class="navbar__mobile-link" data-nav="contact">Contact Us</a>
    <button class="navbar__mobile-search" type="button" data-search-open>${ICONS.search} Search</button>
    <div class="navbar__mobile-utility">
      <a href="students.html" data-utility="students">Current Students</a>
      <a href="contact.html?subject=Alumni">Alumni</a>
      <a href="contact.html?subject=Agent%20Partnership">Agents</a>
      <a href="team.html#careers">Careers</a>
    </div>
    <div style="margin-top:24px">
      <a href="apply.html" class="btn btn--primary" style="width:100%;justify-content:center">Apply Now</a>
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

  // Elements that can hold focus while the drawer is open.
  const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
  let lastFocused = null;

  function openMenu() {
    lastFocused = document.activeElement;
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
    overlay.style.display = 'block';
    // Lock the page without losing scroll position on close.
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    // Move focus into the drawer so keyboard and screen-reader users
    // land inside it rather than continuing behind the overlay.
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

    if (e.key === 'Escape') {
      closeMenu();
      return;
    }

    if (e.key !== 'Tab') return;

    const items = [...mobileMenu.querySelectorAll(FOCUSABLE)]
      .filter(el => el.offsetParent !== null);
    if (!items.length) return;

    const first = items[0];
    const last = items[items.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  // Following a link inside the drawer should also close it (matters for
  // same-page #anchor links, where no navigation occurs).
  mobileMenu.querySelectorAll('a[href]').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  // Reset when resizing up to the desktop layout, otherwise the body stays
  // scroll-locked with the drawer hidden by the media query.
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  });

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
    // Run once on load. Without this, arriving already scrolled — a reload
    // with restored scroll position, a back-navigation, or a link to
    // index.html#anchor — left the navbar transparent, i.e. white links on
    // a white background.
    syncNavbar();
  }

  markCurrentPage(nav, mobileMenu, currentPage);
}


/* ---- Mark the current page in the navigation ----
   Nothing indicated which page you were on. */
function markCurrentPage(nav, mobileMenu, currentPage) {
  const here = window.location.pathname.replace(/\/$/, '/index.html');

  [nav, mobileMenu].forEach(root => {
    root.querySelectorAll('a[href]').forEach(a => {
      // The logo is a home link, but announcing it as the current page is
      // just noise next to the "Home" nav item.
      if (a.classList.contains('navbar__logo')) return;
      const url = new URL(a.getAttribute('href'), window.location.href);
      if (url.origin !== window.location.origin) return;
      // Compare paths only — a link to about.html#values still marks About.
      const target = url.pathname.replace(/\/$/, '/index.html');
      if (target !== here) return;
      // Bare page links get the marker; deep #anchor links in a dropdown
      // shouldn't all light up, only the one matching the current hash.
      if (url.hash && url.hash !== window.location.hash) return;
      a.setAttribute('aria-current', 'page');
    });
  });

  const section = {
    team: 'about',
    campuses: 'study',
    apply: 'study',
    life: 'study',
  }[currentPage] || currentPage;

  [nav, mobileMenu].forEach(root => {
    root.querySelectorAll(`[data-nav="${section}"]`).forEach(a => {
      a.classList.add('is-current');
    });
    if (['students', 'policies'].includes(currentPage)) {
      root.querySelectorAll('[data-utility="students"]').forEach(a => {
        a.classList.add('is-current');
      });
    }
  });
}


/* ---- Breadcrumbs --------------------------------------------------------
   Breadcrumbs live inside the page hero so direct arrivals get context
   without adding another bar below the fixed global navigation. */
function buildBreadcrumbs(currentPage) {
  if (currentPage === 'home') return;

  const heroContent = document.querySelector('.hero__content');
  const heading = heroContent?.querySelector('h1');
  if (!heroContent || !heading) return;

  const file = window.location.pathname.split('/').pop() || 'index.html';
  const items = [{ label: 'Home', href: 'index.html' }];

  if (/^course-/.test(file)) {
    items.push({ label: 'Courses', href: 'courses.html' });
  } else if (currentPage === 'team') {
    items.push({ label: 'About Us', href: 'about.html' });
  } else if (['campuses', 'apply', 'life'].includes(currentPage)) {
    items.push({ label: 'Study with Us', href: 'apply.html' });
  } else if (currentPage === 'policies' || (currentPage === 'students' && file !== 'students.html')) {
    items.push({ label: 'Current Students', href: 'students.html' });
  }

  items.push({ label: heading.textContent.trim(), href: '' });

  const breadcrumb = document.createElement('nav');
  breadcrumb.className = 'hero-breadcrumb';
  breadcrumb.setAttribute('aria-label', 'Breadcrumb');
  const list = document.createElement('ol');

  items.forEach((item, index) => {
    const li = document.createElement('li');
    if (item.href && index < items.length - 1) {
      const link = document.createElement('a');
      link.href = item.href;
      link.textContent = item.label;
      li.appendChild(link);
    } else {
      const current = document.createElement('span');
      current.textContent = item.label;
      current.setAttribute('aria-current', 'page');
      li.appendChild(current);
    }
    list.appendChild(li);
  });

  breadcrumb.appendChild(list);
  heroContent.prepend(breadcrumb);
}


/* Keep the current item visible in the horizontally scrolling resource nav
   on small screens without moving the page vertically. */
function alignCurrentResourceNav() {
  const scroller = document.querySelector('.resource-nav__inner');
  const current = scroller?.querySelector('[aria-current="page"]');
  if (!scroller || !current || window.innerWidth > 720) return;

  const centred = current.offsetLeft - ((scroller.clientWidth - current.offsetWidth) / 2);
  scroller.scrollLeft = Math.max(0, centred);
}


/* ---- Site search --------------------------------------------------------
   This static site has no search service, so the modal indexes its small,
   known set of pages locally. Results always lead to a real page. */
function buildSiteSearch() {
  const pages = [
    ['Courses', 'Explore all undergraduate, postgraduate and online courses.', 'courses.html', 'courses study programs'],
    ['Bachelor of Business', 'Undergraduate business degree.', 'course-bbus.html', 'business undergraduate bachelor'],
    ['Bachelor of Information Technology', 'Undergraduate IT degree.', 'course-bit.html', 'technology cyber undergraduate bachelor'],
    ['Graduate Certificate in Business Administration', 'Postgraduate pathway into the MBA.', 'course-gcba.html', 'business postgraduate certificate'],
    ['Master of Business Administration', 'Postgraduate management program.', 'course-mba.html', 'business management mba postgraduate'],
    ['Graduate Certificate in Professional Accounting', 'Postgraduate accounting pathway.', 'course-gcpa.html', 'accounting postgraduate certificate'],
    ['Master of Professional Accounting (Advanced)', 'Professionally accredited accounting program.', 'course-mpaa.html', 'accounting postgraduate cpa caanz acca'],
    ['Graduate Certificate in Information Technology', 'Postgraduate IT pathway.', 'course-gcit.html', 'technology cyber postgraduate certificate'],
    ['Master of Cyber Security', 'Postgraduate cyber security program.', 'course-mcs.html', 'technology cyber postgraduate master'],
    ['TIIS Online', 'Flexible online study options.', 'tiis-online/index.html', 'online remote financial planning mba cpd'],
    ['About TIIS', 'Mission, values and story.', 'about.html', 'about mission values story'],
    ['Our Team', 'Academic, professional and governance teams.', 'team.html', 'staff lecturers board careers'],
    ['Our Campuses', 'Sydney Ultimo and Melbourne Docklands.', 'campuses.html', 'campus locations sydney melbourne directions tour'],
    ['Life at TIIS', 'Community, support and student experience.', 'life-at-tiis.html', 'student life community events support'],
    ['How to Apply', 'Application process and document checklist.', 'apply.html', 'apply admissions process documents offer enrolment'],
    ['Application Forms', 'Download domestic, international, GS and credit forms.', 'application-forms.html', 'apply admissions forms domestic international genuine student gs cpl agent'],
    ['Admission Criteria', 'Academic and English entry requirements.', 'admission-criteria.html', 'requirements entry ielts pte undergraduate postgraduate alternative admission'],
    ['Key Dates', '2026 orientation, teaching, census and assessment dates.', 'key-dates.html', 'calendar january march may july september november intakes census exams'],
    ['Fees & Charges', 'Current fee schedule and refund information.', 'fees-and-charges.html', 'fees charges tuition cost refund payment schedule'],
    ['Current Students', 'Student resources, support and policies.', 'students.html', 'portal support resources policies'],
    ['My TIIS Login', 'Direct links to Moodle, Microsoft 365, the Learning Centre and Student Hub.', 'student-login.html', 'login portal moodle office microsoft library sharepoint'],
    ['Student Support', 'Academic, wellbeing, safety and practical support.', 'student-support.html', 'support wellbeing counselling academic safety accommodation careers'],
    ['Student Handbook', 'View or download the current student handbook.', 'student-handbook.html', 'handbook guide rights responsibilities download'],
    ['Student Ambassador Program', 'Represent TIIS and support the student community.', 'student-ambassadors.html', 'ambassador sap leadership orientation community'],
    ['Policies & Procedures', 'Search, view and download TIIS academic and management policies.', 'policies.html', 'policies procedures academic management privacy integrity complaints fees'],
    ['Contact Us', 'Ask a question or speak with admissions.', 'contact.html', 'contact enquiry adviser admissions phone email'],
  ].map(([title, description, href, keywords]) => ({ title, description, href, keywords }));

  const modal = document.createElement('div');
  modal.className = 'site-search';
  modal.id = 'siteSearch';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="site-search__backdrop" data-search-close></div>
    <div class="site-search__dialog" role="dialog" aria-modal="true" aria-labelledby="siteSearchTitle">
      <div class="site-search__header">
        <div>
          <span class="site-search__eyebrow">TIIS website</span>
          <h2 id="siteSearchTitle">What are you looking for?</h2>
        </div>
        <button type="button" class="site-search__close" data-search-close aria-label="Close search">&times;</button>
      </div>
      <label class="site-search__field">
        <span class="sr-only">Search courses and pages</span>
        ${ICONS.search}
        <input id="siteSearchInput" type="search" autocomplete="off" placeholder="Search courses, campuses, fees…">
        <kbd>Esc</kbd>
      </label>
      <p class="site-search__summary" id="siteSearchSummary" aria-live="polite"></p>
      <div class="site-search__results" id="siteSearchResults"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const input = modal.querySelector('#siteSearchInput');
  const results = modal.querySelector('#siteSearchResults');
  const summary = modal.querySelector('#siteSearchSummary');
  let returnFocus = null;

  function render() {
    const query = input.value.trim().toLowerCase();
    const terms = query.split(/\s+/).filter(Boolean);
    const matches = pages.filter(page => {
      const haystack = `${page.title} ${page.description} ${page.keywords}`.toLowerCase();
      return terms.every(term => haystack.includes(term));
    });
    const visible = query ? matches : pages.slice(0, 6);

    results.replaceChildren();
    summary.textContent = query
      ? `${matches.length} result${matches.length === 1 ? '' : 's'} for “${input.value.trim()}”`
      : 'Popular destinations';

    if (!visible.length) {
      const empty = document.createElement('p');
      empty.className = 'site-search__empty';
      empty.textContent = 'No exact match. Try “courses”, “fees”, “campus” or “support”.';
      results.appendChild(empty);
      return;
    }

    visible.forEach(page => {
      const link = document.createElement('a');
      link.className = 'site-search__result';
      link.href = page.href;
      const title = document.createElement('strong');
      title.textContent = page.title;
      const description = document.createElement('span');
      description.textContent = page.description;
      const arrow = document.createElement('span');
      arrow.className = 'site-search__arrow';
      arrow.textContent = '→';
      arrow.setAttribute('aria-hidden', 'true');
      link.append(title, description, arrow);
      results.appendChild(link);
    });
  }

  function openSearch(trigger) {
    returnFocus = trigger || document.activeElement;
    document.getElementById('mobileClose')?.click();
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    input.value = '';
    render();
    requestAnimationFrame(() => input.focus());
  }

  function closeSearch() {
    if (!modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (returnFocus && document.contains(returnFocus)) returnFocus.focus();
  }

  document.querySelectorAll('[data-search-open]').forEach(button => {
    button.addEventListener('click', () => openSearch(button));
  });
  modal.querySelectorAll('[data-search-close]').forEach(button => {
    button.addEventListener('click', closeSearch);
  });
  input.addEventListener('input', render);

  document.addEventListener('keydown', event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      if (modal.classList.contains('is-open')) closeSearch();
      else openSearch(document.querySelector('[data-search-open]'));
      return;
    }
    if (!modal.classList.contains('is-open')) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeSearch();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = [...modal.querySelectorAll('a[href], button, input')]
      .filter(element => element.offsetParent !== null);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}


/* ---- Course-page navigation -------------------------------------------- */
function buildCoursePageNav() {
  const file = window.location.pathname.split('/').pop() || '';
  if (!/^course-/.test(file)) return;

  const candidates = [
    ['overview', 'Overview'],
    ['details', 'Course Details'],
    ['structure', 'Course Structure'],
    ['entry', 'Entry Requirements'],
    ['careers', 'Career Outcomes'],
  ].filter(([id]) => document.getElementById(id));
  if (candidates.length < 3) return;

  const hero = document.querySelector('.hero');
  if (!hero) return;
  const nav = document.createElement('nav');
  nav.className = 'course-page-nav';
  nav.setAttribute('aria-label', 'On this course page');
  const inner = document.createElement('div');
  inner.className = 'container course-page-nav__inner';

  candidates.forEach(([id, label], index) => {
    const link = document.createElement('a');
    link.href = `#${id}`;
    link.textContent = label;
    if (index === 0) link.classList.add('is-active');
    inner.appendChild(link);
  });
  nav.appendChild(inner);
  hero.insertAdjacentElement('afterend', nav);

  if (!('IntersectionObserver' in window)) return;
  const links = [...inner.querySelectorAll('a')];
  const observer = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
    if (!visible) return;
    links.forEach(link => {
      const active = link.hash === `#${visible.target.id}`;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-150px 0px -65% 0px', threshold: 0 });
  candidates.forEach(([id]) => observer.observe(document.getElementById(id)));
}


/* ---- Course overview level filter -------------------------------------- */
function initCourseFilters() {
  const filter = document.querySelector('[data-course-filter-bar]');
  if (!filter) return;
  const cards = [...document.querySelectorAll('.course-card[data-level]')];
  const groups = [...document.querySelectorAll('[data-course-group]')];
  const status = filter.querySelector('[data-course-filter-status]');
  const buttons = [...filter.querySelectorAll('button[data-course-filter]')];

  function applyFilter(value, updateUrl = false) {
    let shown = 0;
    document.getElementById('programs')?.classList.toggle('is-filtered', value !== 'all');
    cards.forEach(card => {
      const visible = value === 'all' || card.dataset.level === value;
      card.hidden = !visible;
      if (visible) shown += 1;
    });
    groups.forEach(group => {
      group.hidden = !group.querySelector('.course-card[data-level]:not([hidden])');
    });
    buttons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.courseFilter === value));
    });
    if (status) status.textContent = `${shown} course${shown === 1 ? '' : 's'} shown`;
    if (updateUrl) {
      const url = new URL(window.location.href);
      if (value === 'all') url.searchParams.delete('level');
      else url.searchParams.set('level', value);
      history.replaceState({}, '', `${url.pathname}${url.search}#programs`);
    }
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => applyFilter(button.dataset.courseFilter, true));
  });
  const requested = new URLSearchParams(window.location.search).get('level');
  applyFilter(['undergraduate', 'postgraduate'].includes(requested) ? requested : 'all');
}


// ---- Build Footer ----
function buildFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <img src="images/logos/TIIS-white.png" alt="TIIS Logo">
          <p>The Institute of International Studies (TIIS) is an accredited higher education provider in Australia, committed to delivering industry-relevant education that prepares graduates for today and tomorrow.</p>
          <div class="footer__accreditations">
            <span>CRICOS: 03705J</span>
            <span>Provider: PRV14085</span>
            <span>ABN: 37 605 540 547</span>
          </div>
        </div>

        <div>
          <div class="footer__heading">Quick Links</div>
          <ul class="footer__links">
            <li><a href="about.html">About Us</a></li>
            <li><a href="courses.html">Courses</a></li>
            <li><a href="campuses.html">Campuses</a></li>
            <li><a href="team.html">Our Team</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <div class="footer__heading">Courses</div>
          <ul class="footer__links">
            <li><a href="course-bbus.html">Bachelor of Business</a></li>
            <li><a href="course-bit.html">Bachelor of IT</a></li>
            <li><a href="course-mba.html">MBA</a></li>
            <li><a href="course-mcs.html">Master of Cyber Security</a></li>
            <li><a href="course-mpaa.html">Master of Accounting</a></li>
            <li><a href="tiis-online/index.html">TIIS Online →</a></li>
          </ul>
        </div>

        <div>
          <div class="footer__heading">Students</div>
          <ul class="footer__links">
            <li><a href="students.html">Current Students</a></li>
            <li><a href="student-login.html">My TIIS Login</a></li>
            <li><a href="student-support.html">Student Support</a></li>
            <li><a href="student-handbook.html">Student Handbook</a></li>
            <li><a href="policies.html">Policies & Procedures</a></li>
            <li><a href="fees-and-charges.html">Fees & Charges</a></li>
            <li><a href="key-dates.html">Key Dates</a></li>
          </ul>
        </div>

        <div>
          <div class="footer__heading">Contact</div>
          <ul class="footer__links">
            <li><a href="tel:1300164600">1300 164 600</a></li>
            <li><a href="tel:+61280980702">+61 2 8098 0702</a></li>
            <li><a href="mailto:info@tiis.edu.au">info@tiis.edu.au</a></li>
            <li><a href="campuses.html">Sydney Campus</a></li>
            <li><a href="campuses.html#melbourne">Melbourne Campus</a></li>
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

  // If motion is unwelcome, or the browser lacks IntersectionObserver, leave
  // everything in its default visible state and do nothing else.
  if (PREFERS_REDUCED_MOTION || !('IntersectionObserver' in window)) return;

  // Opt in to the hidden starting state only now that we know we can reveal
  // it again. The CSS keeps content visible until this class is present, so a
  // JS error can never leave the page blank.
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

  // Anything already above the fold — or skipped by an #anchor jump that
  // landed further down the page — is revealed immediately rather than
  // waiting for a scroll that may never come.
  requestAnimationFrame(() => {
    targets.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('visible');
        observer.unobserve(el);
      }
    });
  });
}


// ---- Testimonials Carousel ----
function initCarousel(trackId) {
  const track = document.getElementById(trackId);
  if (!track) return;

  const region = track.parentElement;
  const slides = [...track.children];
  const total = slides.length;
  if (!total) return;
  let current = 0;

  const dotsContainer = region.querySelector('.carousel-dots');
  const prevBtn = region.querySelector('.carousel-btn--prev');
  const nextBtn = region.querySelector('.carousel-btn--next');

  // Expose the carousel as a labelled group and announce slide changes.
  region.setAttribute('role', 'group');
  region.setAttribute('aria-roledescription', 'carousel');
  region.setAttribute('aria-label', 'Student testimonials');
  track.setAttribute('aria-live', 'polite');

  slides.forEach((slide, i) => {
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', 'slide');
    slide.setAttribute('aria-label', `${i + 1} of ${total}`);
  });

  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;

    // Keep off-screen slides out of the tab order and the a11y tree —
    // previously every quote was focusable and read out at once.
    slides.forEach((slide, i) => {
      const isCurrent = i === current;
      slide.setAttribute('aria-hidden', String(!isCurrent));
      slide.querySelectorAll('a, button').forEach(el => {
        if (isCurrent) el.removeAttribute('tabindex');
        else el.setAttribute('tabindex', '-1');
      });
    });

    if (dotsContainer) {
      dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
        d.setAttribute('aria-selected', String(i === current));
      });
    }
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { stop(); goTo(current - 1); });
  if (nextBtn) nextBtn.addEventListener('click', () => { stop(); goTo(current + 1); });

  if (dotsContainer) {
    dotsContainer.setAttribute('role', 'tablist');
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
      dot.type = 'button';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Show testimonial ${i + 1} of ${total}`);
      dot.setAttribute('aria-selected', String(i === 0));
      dot.addEventListener('click', () => { stop(); goTo(i); });
      dotsContainer.appendChild(dot);
    }
  }

  // Left/right arrows move between slides when focus is in the carousel.
  region.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { stop(); goTo(current - 1); }
    else if (e.key === 'ArrowRight') { stop(); goTo(current + 1); }
  });

  // ---- Auto-play ----
  let timer = null;
  // A user who has taken control (clicked a dot/arrow, or tabbed in) should
  // not have the slide yanked out from under them a moment later.
  let userEngaged = false;

  function start() {
    if (timer || userEngaged || PREFERS_REDUCED_MOTION) return;
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  function pause() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  function stop() {
    userEngaged = true;
    pause();
  }

  region.addEventListener('mouseenter', pause);
  region.addEventListener('mouseleave', start);
  region.addEventListener('focusin', stop);

  // Don't animate in a background tab.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pause();
    else start();
  });

  goTo(0);
  start();
}


/* ---- Homepage campaign carousel --------------------------------------- */
function initHeroCarousel(carouselId) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;
  const slides = [...carousel.querySelectorAll('.home-hero__slide')];
  if (slides.length < 2) return;

  const previous = carousel.querySelector('[data-hero-prev]');
  const next = carousel.querySelector('[data-hero-next]');
  const pauseButton = carousel.querySelector('[data-hero-pause]');
  const dots = carousel.querySelector('[data-hero-dots]');
  let current = 0;
  let timer = null;
  let manuallyPaused = PREFERS_REDUCED_MOTION;

  carousel.setAttribute('role', 'region');
  carousel.setAttribute('aria-roledescription', 'carousel');
  carousel.setAttribute('aria-label', 'TIIS highlights');

  slides.forEach((slide, index) => {
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', 'slide');
    slide.setAttribute('aria-label', `${index + 1} of ${slides.length}`);
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'home-hero__dot';
    dot.setAttribute('aria-label', `Show highlight ${index + 1}`);
    dot.addEventListener('click', () => {
      manuallyPaused = true;
      stop();
      goTo(index);
      syncPauseButton();
    });
    dots?.appendChild(dot);
  });

  function goTo(index) {
    current = ((index % slides.length) + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      slide.querySelectorAll('a, button').forEach(element => {
        if (active) element.removeAttribute('tabindex');
        else element.setAttribute('tabindex', '-1');
      });
    });
    dots?.querySelectorAll('.home-hero__dot').forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === current);
      dot.setAttribute('aria-current', dotIndex === current ? 'true' : 'false');
    });
  }

  function start() {
    if (timer || manuallyPaused || document.hidden) return;
    timer = window.setInterval(() => goTo(current + 1), 6500);
  }

  function stop() {
    if (timer) window.clearInterval(timer);
    timer = null;
  }

  function syncPauseButton() {
    if (!pauseButton) return;
    pauseButton.textContent = manuallyPaused ? 'Play' : 'Pause';
    pauseButton.setAttribute('aria-label', manuallyPaused ? 'Play rotating highlights' : 'Pause rotating highlights');
  }

  function takeControl(offset) {
    manuallyPaused = true;
    stop();
    goTo(current + offset);
    syncPauseButton();
  }

  previous?.addEventListener('click', () => takeControl(-1));
  next?.addEventListener('click', () => takeControl(1));
  pauseButton?.addEventListener('click', () => {
    manuallyPaused = !manuallyPaused;
    if (manuallyPaused) stop();
    else start();
    syncPauseButton();
  });
  carousel.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') takeControl(-1);
    if (event.key === 'ArrowRight') takeControl(1);
  });
  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });

  goTo(0);
  syncPauseButton();
  start();
}


// ---- Key figures ----
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  counters.forEach(el => {
    el.textContent =
      (el.dataset.prefix || '') + el.dataset.count + (el.dataset.suffix || '');
  });
}


/* ---- Enquiry form ----
   The previous handler called preventDefault() and revealed a "we've received
   your enquiry" message without sending anything anywhere, so every submission
   was silently discarded while telling the visitor the opposite.

   With no server available, this validates the fields, then hands the enquiry
   to the visitor's own mail client pre-addressed and pre-filled. The status
   message describes what actually happened. If the form is given a real
   action/method, this handler steps aside and lets the browser submit it. */
function initEnquiryForm(formId, statusId) {
  const form = document.getElementById(formId);
  const status = document.getElementById(statusId);
  if (!form || !status) return;

  const mailto = form.dataset.mailto;
  // A real endpoint takes precedence over the mailto fallback.
  if (!mailto || form.getAttribute('action')) return;

  // CTA and utility links can preselect a genuine topic without duplicating
  // separate enquiry pages for advisers, alumni and education agents.
  const requestedSubject = new URLSearchParams(window.location.search).get('subject');
  const subjectSelect = form.elements.subject;
  if (requestedSubject && subjectSelect) {
    const option = [...subjectSelect.options].find(item =>
      item.value.toLowerCase() === requestedSubject.toLowerCase()
    );
    if (option) subjectSelect.value = option.value;
  }

  function setStatus(message, kind) {
    status.textContent = message;
    status.className = `form-status form-status--${kind} is-visible`;
  }

  function firstInvalid() {
    return [...form.elements].find(el => el.willValidate && !el.checkValidity());
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // novalidate is set so we control the messaging; validate explicitly.
    const bad = firstInvalid();
    if (bad) {
      setStatus('Please complete the required fields before sending.', 'error');
      bad.focus();
      bad.reportValidity();
      return;
    }

    const get = name => (form.elements[name]?.value || '').trim();
    const name = get('name');
    const subject = get('subject') || 'Website enquiry';

    const body = [
      `Name: ${name}`,
      `Email: ${get('email')}`,
      `Phone: ${get('phone') || '—'}`,
      `Subject: ${subject}`,
      '',
      get('message'),
    ].join('\n');

    const href = `mailto:${mailto}`
      + `?subject=${encodeURIComponent(`[Website enquiry] ${subject}`)}`
      + `&body=${encodeURIComponent(body)}`;

    setStatus(
      `Your email app should now open with this enquiry addressed to ${mailto}. `
      + `Send it from there and we'll be in touch. If nothing opened, email ${mailto} directly.`,
      'info'
    );

    window.location.href = href;
  });
}


// ---- SVG Icon Sprite ----
function injectIconSprite() {
  const sprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
<symbol id="icon-graduation" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12.5v4.5c0 1.657 2.686 3 6 3s6-1.343 6-3v-4.5"/><line x1="22" y1="10" x2="22" y2="16"/></symbol>
<symbol id="icon-map-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></symbol>
<symbol id="icon-tag" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></symbol>
<symbol id="icon-calendar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></symbol>
<symbol id="icon-book-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></symbol>
<symbol id="icon-layers" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></symbol>
<symbol id="icon-target" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></symbol>
<symbol id="icon-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></symbol>
<symbol id="icon-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></symbol>
<symbol id="icon-monitor" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></symbol>
<symbol id="icon-cpu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></symbol>
<symbol id="icon-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></symbol>
<symbol id="icon-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></symbol>
<symbol id="icon-briefcase" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></symbol>
<symbol id="icon-megaphone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><line x1="6" y1="1" x2="6" y2="4"/></symbol>
<symbol id="icon-bar-chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></symbol>
<symbol id="icon-trending-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></symbol>
<symbol id="icon-star" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></symbol>
<symbol id="icon-grid" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></symbol>
<symbol id="icon-code" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></symbol>
<symbol id="icon-users" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></symbol>
<symbol id="icon-zap" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></symbol>
<symbol id="icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></symbol>
<symbol id="icon-lightbulb" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14z"/></symbol>
<symbol id="icon-tool" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></symbol>
<symbol id="icon-message-circle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></symbol>
<symbol id="icon-alert-triangle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></symbol>
<symbol id="icon-file-text" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></symbol>
<symbol id="icon-award" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></symbol>
<symbol id="icon-wifi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></symbol>
<symbol id="icon-settings" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></symbol>
<symbol id="icon-edit" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></symbol>
<symbol id="icon-clipboard" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></symbol>
</svg>`;
  document.body.insertAdjacentHTML('afterbegin', sprite);
}


/* ---- Wrap page content in a <main> landmark ----
   The pages are a flat list of <section>s with no landmark, so assistive
   tech had no "main content" region to jump to and the skip link had no
   target. Runs before the navbar and footer are injected, so whatever is
   already in <body> is exactly the page's own content. */
function wrapMainContent() {
  if (document.getElementById('main')) return;

  const main = document.createElement('main');
  main.id = 'main';
  // Focusable via the skip link, but not a stop in normal tab order.
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


// ---- Initialize everything ----
function initPage(pageName) {
  wrapMainContent();
  injectIconSprite();
  buildNavbar(pageName);
  buildBreadcrumbs(pageName);
  alignCurrentResourceNav();
  buildSiteSearch();
  buildCoursePageNav();
  initCourseFilters();
  buildFooter();
  buildScrollTop();
  improveImageLoading();

  // Wait for DOM to be ready
  requestAnimationFrame(() => {
    initScrollAnimations();
    initCounters();
  });
}


/* ---- Image loading hints for JS-injected images ----
   Images in the static markup carry loading/decoding attributes directly —
   setting them from JS would run after the parser has already begun fetching.
   This only covers the images this script creates itself (nav and footer
   logos), which the parser never sees. */
function improveImageLoading() {
  document.querySelectorAll('.footer img, .navbar__logo img').forEach(img => {
    if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
    if (img.closest('.footer') && !img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
}
