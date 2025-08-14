// Reveal animations
(function(){
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    document.querySelectorAll('.reveal').forEach(el=>el.classList.add('show'));
  } else {
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target);} });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  }
})();

// Footer year
(function(){
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
})();

// YouTube lazy init + inline swapping
(function(){
  const main = document.getElementById('ytMain');
  if (!main) return;
  const initialId = main.getAttribute('data-initial') || '';
  const setSrc = (id, autoplay=false) => {
    if (!id) return;
    const qp = autoplay ? '&autoplay=1' : '';
    main.src = `https://www.youtube-nocookie.com/embed/${id}?modestbranding=1&rel=0&playsinline=1${qp}`;
  };
  const boot = () => setSrc(initialId);
  if ('requestIdleCallback' in window) {
    requestIdleCallback(boot, { timeout: 2000 });
  } else {
    setTimeout(boot, 600);
  }
  document.querySelectorAll('.yt-thumb').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-video-id');
      if (id) setSrc(id, true);
    });
  });
})();

// Smooth scroll for nav and active link highlighting
(function(){
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.contains('hidden');
      navMenu.classList.toggle('hidden');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const targetId = a.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close menu on small screens
      if (navMenu && !navMenu.classList.contains('sm:flex')) {
        navMenu.classList.add('hidden');
        navToggle && navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Active link observer
  const links = Array.from(document.querySelectorAll('.nav-link'));
  const idToLink = new Map(links.map(l => [l.dataset.nav, l]));
  const sections = [
    { id: 'home', el: document.getElementById('home') },
    { id: 'about', el: document.getElementById('about') },
    { id: 'work', el: document.getElementById('work') },
    { id: 'products', el: document.getElementById('products') },
    { id: 'links', el: document.getElementById('links') },
  ].filter(s => s.el);

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = idToLink.get(id);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px', threshold: 0.01 });

  sections.forEach(s => obs.observe(s.el));
})();

// Simple lightbox for My Work grid
(function(){
  const grid = document.querySelector('#work .work-grid');
  if (!grid) return;

  // Create overlay once
  const overlay = document.createElement('div');
  overlay.id = 'lightboxOverlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.className = 'fixed inset-0 bg-black/70 backdrop-blur-sm hidden z-50 flex items-center justify-center p-4';
  overlay.innerHTML = '<img id="lightboxImg" class="max-h-[85vh] max-w-[92vw] rounded-2xl shadow-2xl" alt="Preview" />';
  document.body.appendChild(overlay);

  const imgEl = overlay.querySelector('#lightboxImg');
  let lastTrigger = null;

  const open = (src, trigger) => {
    lastTrigger = trigger || null;
    imgEl.src = src;
    overlay.classList.remove('hidden');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    overlay.tabIndex = -1; overlay.focus({ preventScroll: true });
  };

  const close = () => {
    overlay.classList.add('hidden');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    imgEl.src = '';
    if (lastTrigger) lastTrigger.focus();
  };

  grid.addEventListener('click', (e) => {
    const a = e.target.closest('a[href="#"]');
    if (!a) return;
    e.preventDefault();
    const img = a.querySelector('img');
    if (!img) return;
    open(img.currentSrc || img.src, a);
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.getAttribute('aria-hidden') === 'false') close();
  });
})();

// Responsive optimizations and touch device support
(function(){
  // Detect touch device
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  // Add touch-specific classes
  if (isTouch) {
    document.documentElement.classList.add('touch-device');
  }
  
  // Responsive image loading
  const images = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
  
  // Mobile menu improvements
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (navToggle && navMenu) {
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.add('hidden');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !navMenu.classList.contains('hidden')) {
        navMenu.classList.add('hidden');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  
  // Smooth scrolling polyfill for older browsers
  if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScrollPolyfill = () => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    };
    
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'auto', block: 'start' });
          }
        }
      });
    });
  }
})();


