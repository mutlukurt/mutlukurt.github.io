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


