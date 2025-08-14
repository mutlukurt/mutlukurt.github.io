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


