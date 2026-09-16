(function () {
  'use strict';

  /* ---------- Always open at the top ------------------------------------
     Three things can leave a reader partway down a freshly opened page: a
     restored scroll position, an embedding frame that keeps its own offset,
     and late reflow as fonts and lazy images land. The reset is re-asserted
     until the reader actually touches the page, and never animates, because
     html has scroll-behavior: smooth. */
  if (!window.location.hash) {
    var moved = false;
    ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach(function (ev) {
      window.addEventListener(ev, function () { moved = true; }, { passive: true, once: true });
    });

    var toTop = function () {
      if (moved) return;
      var el = document.documentElement;
      var prev = el.style.scrollBehavior;
      el.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      el.style.scrollBehavior = prev;
      try {
        if (window.parent && window.parent !== window) window.parent.scrollTo(0, 0);
      } catch (e) {}
    };

    toTop();
    document.addEventListener('DOMContentLoaded', toTop);
    window.addEventListener('load', toTop);
    [60, 350, 900].forEach(function (t) { window.setTimeout(toTop, t); });
  }

  var root = document.documentElement;
  var mql  = window.matchMedia('(prefers-color-scheme: dark)');

  /* ---------- Theme ---------------------------------------------------- */
  var toggle = document.getElementById('themeToggle');

  function currentTheme() {
    return root.getAttribute('data-theme') || (mql.matches ? 'dark' : 'light');
  }
  function syncToggle() {
    var dark = currentTheme() === 'dark';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  }
  toggle.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    syncToggle();
  });
  /* Follow the system while no explicit choice has been made. */
  if (typeof mql.addEventListener === 'function') mql.addEventListener('change', syncToggle);
  syncToggle();

  /* ---------- Header state --------------------------------------------- */
  var header = document.getElementById('siteHeader');
  var onScroll = function () {
    header.classList.toggle('is-stuck', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------------------------------------------- */
  var menuBtn = document.getElementById('menuBtn');
  var menu    = document.getElementById('mobileMenu');

  function setMenu(open) {
    menu.hidden = false;                       /* keep it in the a11y tree while animating */
    menu.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (!open) {
      window.setTimeout(function () {
        if (!menu.classList.contains('is-open')) menu.hidden = true;
      }, 220);
    }
  }
  setMenu(false);

  menuBtn.addEventListener('click', function () {
    setMenu(!menu.classList.contains('is-open'));
  });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('click', function (e) {
    if (!menu.classList.contains('is-open')) return;
    if (menu.contains(e.target) || menuBtn.contains(e.target)) return;
    setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      setMenu(false);
      menuBtn.focus();
    }
  });
  /* Never leave the drawer open when the layout returns to desktop. */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1000 && menu.classList.contains('is-open')) setMenu(false);
  });

  /* ---------- Reveal on scroll ------------------------------------------ */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('[data-animate]'));

  function revealAll() {
    reveals.forEach(function (el) { el.classList.add('in-view'); });
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
    /* Safety net: if anything is still hidden after 2.5s, show it. */
    window.setTimeout(revealAll, 2500);
  } else {
    revealAll();
  }

  /* ---------- Misc ------------------------------------------------------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
