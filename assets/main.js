// Reveal animations
(function(){
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    document.querySelectorAll('.reveal').forEach(el=>el.classList.add('show'));
    document.querySelectorAll('.work-card').forEach(el=>el.classList.add('show'));
  } else {
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target);} });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
    document.querySelectorAll('.work-card').forEach(el=>io.observe(el));
  }
})();

// Footer year
(function(){
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
})();

// Modern Mobile Menu System
(function() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
  
  if (!mobileMenuBtn || !mobileMenuOverlay || !closeMenuBtn) return;
  
  let isMenuOpen = false;
  
  // Function to open menu
  const openMenu = () => {
    if (isMenuOpen) return;
    
    console.log('Opening modern mobile menu...');
    isMenuOpen = true;
    
    // Show overlay
    mobileMenuOverlay.classList.remove('hidden');
    mobileMenuOverlay.style.display = 'flex';
    
    // Update button state
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    
    // Animate menu icon
    const icon = mobileMenuBtn.querySelector('svg');
    if (icon) {
      icon.style.transform = 'rotate(90deg)';
    }
    
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    
    console.log('Modern mobile menu opened successfully');
  };
  
  // Function to close menu
  const closeMenu = () => {
    if (!isMenuOpen) return;
    
    console.log('Closing modern mobile menu...');
    isMenuOpen = false;
    
    // Hide overlay
    mobileMenuOverlay.classList.add('hidden');
    mobileMenuOverlay.style.display = 'none';
    
    // Update button state
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    
    // Reset menu icon
    const icon = mobileMenuBtn.querySelector('svg');
    if (icon) {
      icon.style.transform = 'rotate(0deg)';
    }
    
    // Restore body scroll
    document.body.style.overflow = '';
    
    console.log('Modern mobile menu closed successfully');
  };
  
  // Function to toggle menu
  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };
  
  // Event listeners
  mobileMenuBtn.addEventListener('pointerdown', (e) => {
    console.log('Mobile menu button pressed');
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  }, { passive: false });
  
  closeMenuBtn.addEventListener('pointerdown', (e) => {
    console.log('Close menu button pressed');
    e.preventDefault();
    e.stopPropagation();
    closeMenu();
  }, { passive: false });
  
  // Close menu when clicking outside
  mobileMenuOverlay.addEventListener('pointerdown', (e) => {
    if (e.target === mobileMenuOverlay) {
      console.log('Clicked outside menu, closing');
      closeMenu();
    }
  });
  
  // Handle menu link clicks
  mobileMenuLinks.forEach(link => {
    link.addEventListener('pointerdown', (e) => {
      console.log('Menu link clicked:', link.href);
      
      // Handle internal links with smooth scroll
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          // Close menu first for internal links
          closeMenu();
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 300);
        }
      } else if (href && (href.includes('.html') || href.includes('http'))) {
        // External page links - delay menu close to allow navigation
        console.log('Navigating to external page:', href);
        e.preventDefault();
        
        // Small delay to ensure navigation starts
        setTimeout(() => {
          closeMenu();
          // Navigate to the page
          window.location.href = href;
        }, 100);
      }
    }, { passive: false });
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  });
  
  // Close menu on window resize (if switching to desktop)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && isMenuOpen) {
      closeMenu();
    }
  });
  
  // Expose functions globally
  window.openMobileMenu = openMenu;
  window.closeMobileMenu = closeMenu;
  window.toggleMobileMenu = toggleMenu;
})();

// Enhanced My Work section animations
(function(){
  const workCards = document.querySelectorAll('.work-card');
  
  // 3D Parallax effect on mouse move
  workCards.forEach(card => {
    const imageContainer = card.querySelector('.project-image-container');
    const image = card.querySelector('img');
    
    if (!imageContainer || !image) return;
    
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      image.style.transform = `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
      image.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
    });
  });
  
  // Staggered animation delays
  workCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
  });
  
  // Mobile touch gesture support
  if ('ontouchstart' in window) {
    workCards.forEach(card => {
      let startY = 0;
      let startX = 0;
      
      card.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        startX = e.touches[0].clientX;
      });
      
      card.addEventListener('touchmove', (e) => {
        if (!startY || !startX) return;
        
        const deltaY = e.touches[0].clientY - startY;
        const deltaX = e.touches[0].clientX - startX;
        
        if (Math.abs(deltaY) > 10 || Math.abs(deltaX) > 10) {
          card.style.transform = `translateY(${deltaY * 0.1}px) scale(${1 - Math.abs(deltaY) * 0.001})`;
        }
      });
      
      card.addEventListener('touchend', () => {
        card.style.transform = '';
        startY = 0;
        startX = 0;
      });
    });
  }
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

// Smooth scroll for navigation links
(function(){
  // Desktop navigation links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    const handleSmoothScroll = (e) => {
      const targetId = a.getAttribute('href');
      if (!targetId || targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (!target) return;
      
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    
    // Click event for desktop
    a.addEventListener('click', handleSmoothScroll);
    
    // Touch events for mobile
    a.addEventListener('touchstart', handleSmoothScroll, { passive: false });
  });
  
  // Active link observer
  const links = Array.from(document.querySelectorAll('.nav-link'));
  const idToLink = new Map(links.map(l => [l.dataset.nav, l]));
  const sections = [
    { id: 'home', el: document.getElementById('home') },
    { id: 'about', el: document.getElementById('about') },
    { id: 'work', el: document.getElementById('work') },
    { id: 'products', el: document.getElementById('products') },
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


