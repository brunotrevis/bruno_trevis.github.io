/* =========================================================
   ERICtrevisan — Animações & interações
   - Animações de "reveal" no scroll (mobile + desktop)
   - Header que muda ao rolar
   - Menu mobile
   ========================================================= */

(function () {
  'use strict';

  // Atualiza ano no rodapé
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- Header com efeito ao rolar -----
  const header = document.querySelector('[data-header]');
  let lastScroll = 0;
  function onScroll() {
    const y = window.scrollY;
    if (header) {
      header.classList.toggle('is-scrolled', y > 24);
    }
    lastScroll = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ----- Menu mobile -----
  const menuBtn = document.querySelector('[data-menu-btn]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (menuBtn && mobileMenu) {
    const closeMenu = () => {
      menuBtn.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      menuBtn.classList.toggle('is-open', isOpen);
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // ----- Reveal on scroll (funciona em mobile e desktop) -----
  const reveals = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = parseInt(el.dataset.revealDelay || '0', 10);
            setTimeout(() => el.classList.add('is-visible'), delay);
            io.unobserve(el);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    // Fallback: torna tudo visível imediatamente
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  // ----- Smooth scroll para links âncora (refinado) -----
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ----- Pequena paralaxe sutil no hero (desktop e mobile) -----
  const heroMedia = document.querySelector('.hero__media');
  if (heroMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false;
    function update() {
      const y = window.scrollY;
      // movimento sutil — 8% da velocidade de scroll
      heroMedia.style.transform = `translateY(${y * 0.08}px)`;
      ticking = false;
    }
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  // ----- Sliders com autoplay + navegação manual -----
  function setupFadeSlider({ containerSelector, slideSelector, prevSelector, nextSelector, dotsContainerSelector, interval = 6500 }) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    const slides = Array.from(container.querySelectorAll(slideSelector));
    if (slides.length <= 1) return;

    const prevBtn = document.querySelector(prevSelector);
    const nextBtn = document.querySelector(nextSelector);
    const dotsContainer = dotsContainerSelector ? document.querySelector(dotsContainerSelector) : null;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let current = Math.max(0, slides.findIndex((s) => s.classList.contains('is-active')));
    let timer = null;

    slides.forEach((s) => s.removeAttribute('loading'));

    const dots = dotsContainer
      ? slides.map((_, index) => {
          const dot = document.createElement('button');
          dot.type = 'button';
          dot.className = 'gallery-dot';
          dot.setAttribute('aria-label', `Ver imagem ${index + 1}`);
          dot.addEventListener('click', () => goTo(index, true));
          dotsContainer.appendChild(dot);
          return dot;
        })
      : [];

    function render() {
      slides.forEach((slide, index) => slide.classList.toggle('is-active', index === current));
      dots.forEach((dot, index) => dot.classList.toggle('is-active', index === current));
    }

    function goTo(index, userAction = false) {
      current = (index + slides.length) % slides.length;
      render();
      if (userAction) restart();
    }

    function next(userAction = false) { goTo(current + 1, userAction); }
    function prev(userAction = false) { goTo(current - 1, userAction); }

    function start() {
      if (reduceMotion) return;
      stop();
      timer = setInterval(() => next(false), interval);
    }
    function stop() {
      if (timer) clearInterval(timer);
      timer = null;
    }
    function restart() {
      stop();
      start();
    }

    if (prevBtn) prevBtn.addEventListener('click', () => prev(true));
    if (nextBtn) nextBtn.addEventListener('click', () => next(true));
    container.addEventListener('mouseenter', stop);
    container.addEventListener('mouseleave', start);

    render();
    start();
  }

  setupFadeSlider({
    containerSelector: '[data-hero-slider]',
    slideSelector: '.hero__slide',
    prevSelector: '[data-hero-prev]',
    nextSelector: '[data-hero-next]',
    interval: 6200,
  });

  setupFadeSlider({
    containerSelector: '[data-gallery-slider]',
    slideSelector: '.gallery-slide',
    prevSelector: '[data-gallery-prev]',
    nextSelector: '[data-gallery-next]',
    dotsContainerSelector: '[data-gallery-dots]',
    interval: 7200,
  });
})();
