// main.js — behaviour shared across every page: the mobile hamburger menu
// (slide-in panel + overlay), plus the project filter buttons on projects.html.
// Elements are looked up defensively so the file is safe to load on any page.

/* --- Mobile navigation (hamburger) --- */

const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');
const navOverlay = document.querySelector('.nav-overlay');

function openNav() {
  siteNav.classList.add('is-open');
  navOverlay.classList.add('is-visible');
  document.body.classList.add('nav-open');
  navToggle.setAttribute('aria-expanded', 'true');
  navToggle.setAttribute('aria-label', 'Close navigation menu');
}

function closeNav() {
  siteNav.classList.remove('is-open');
  navOverlay.classList.remove('is-visible');
  document.body.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open navigation menu');
}

function toggleNav() {
  if (siteNav.classList.contains('is-open')) {
    closeNav();
  } else {
    openNav();
  }
}

if (navToggle && siteNav && navOverlay) {
  navToggle.addEventListener('click', toggleNav);
  navOverlay.addEventListener('click', closeNav);

  // Close the panel when a nav link is chosen or Escape is pressed.
  siteNav.addEventListener('click', function (event) {
    if (event.target.closest('a')) closeNav();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && siteNav.classList.contains('is-open')) {
      closeNav();
      navToggle.focus();
    }
  });
}

/* --- Project filters (projects.html only) --- */

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

function applyFilter(category) {
  projectCards.forEach(function (card) {
    card.hidden = category !== 'all' && card.dataset.category !== category;
  });
}

function setActiveFilter(activeButton) {
  filterButtons.forEach(function (button) {
    button.setAttribute('aria-pressed', String(button === activeButton));
  });
}

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    setActiveFilter(button);
    applyFilter(button.dataset.filter);
  });
});
