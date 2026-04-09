(function () {
  'use strict';

  var sidebar = document.getElementById('toc-sidebar');
  var toggle = document.getElementById('toc-toggle');
  if (!sidebar) return;

  var tocWrapper = sidebar.querySelector('.toc-wrapper');
  var links = sidebar.querySelectorAll('.toc-link');
  var postContent = document.querySelector('.post-content');
  if (!postContent || links.length === 0) return;

  // Collect all headings that have an id inside .post-content
  var headings = [];
  var selectors = 'h2[id], h3[id], h4[id]';
  var elements = postContent.querySelectorAll(selectors);
  elements.forEach(function (el) { headings.push(el); });
  if (headings.length === 0) return;

  // Build a map from decoded href to link element
  var linkMap = {};
  links.forEach(function (link) {
    var href = decodeURIComponent(link.getAttribute('href'));
    linkMap[href] = link;
  });

  // --- Scroll Spy via IntersectionObserver ---
  var currentActive = null;

  function setActive(id) {
    if (currentActive === id) return;
    currentActive = id;
    links.forEach(function (link) {
      link.classList.remove('active');
    });
    var target = linkMap['#' + id];
    if (target) {
      target.classList.add('active');
      // Scroll TOC wrapper to keep active item visible
      if (tocWrapper && tocWrapper.scrollHeight > tocWrapper.clientHeight) {
        var wrapperRect = tocWrapper.getBoundingClientRect();
        var linkRect = target.getBoundingClientRect();
        if (linkRect.top < wrapperRect.top || linkRect.bottom > wrapperRect.bottom) {
          target.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      }
    }
  }

  if ('IntersectionObserver' in window) {
    // Track which headings are currently in viewport
    var visibleHeadings = new Set();

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          visibleHeadings.add(entry.target.id);
        } else {
          visibleHeadings.delete(entry.target.id);
        }
      });

      // Find the topmost visible heading (by document order)
      for (var i = 0; i < headings.length; i++) {
        if (visibleHeadings.has(headings[i].id)) {
          setActive(headings[i].id);
          return;
        }
      }

      // If no heading is visible, find the last heading above the viewport top
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var lastAbove = null;
      for (var j = 0; j < headings.length; j++) {
        var rect = headings[j].getBoundingClientRect();
        if (rect.top < 100) {
          lastAbove = headings[j].id;
        }
      }
      if (lastAbove) {
        setActive(lastAbove);
      }
    }, {
      rootMargin: '0px 0px -70% 0px',
      threshold: 0
    });

    headings.forEach(function (heading) {
      observer.observe(heading);
    });
  }

  // --- Smooth scroll on TOC link click ---
  sidebar.addEventListener('click', function (e) {
    var link = e.target.closest('.toc-link');
    if (!link) return;
    e.preventDefault();

    var href = decodeURIComponent(link.getAttribute('href'));
    var target = document.querySelector(href);
    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Small offset adjustment after scroll
    setTimeout(function () {
      window.scrollBy(0, -20);
    }, 400);

    // Close mobile panel after click
    closeMobilePanel();
  });

  // --- Mobile toggle ---
  if (!toggle) return;

  var overlay = document.createElement('div');
  overlay.className = 'toc-overlay';
  document.body.appendChild(overlay);

  function openMobilePanel() {
    sidebar.classList.add('is-open');
    overlay.classList.add('is-open');
  }

  function closeMobilePanel() {
    sidebar.classList.remove('is-open');
    overlay.classList.remove('is-open');
  }

  toggle.addEventListener('click', function () {
    if (sidebar.classList.contains('is-open')) {
      closeMobilePanel();
    } else {
      openMobilePanel();
    }
  });

  overlay.addEventListener('click', closeMobilePanel);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sidebar.classList.contains('is-open')) {
      closeMobilePanel();
    }
  });
})();
