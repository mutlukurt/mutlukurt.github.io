/* Theme handling */
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  const saved = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = (saved === 'dark' || saved === 'light') ? saved : (systemPrefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', initial);

  toggle?.addEventListener('click', () => {
    // Smooth transition using View Transitions API when available
    const apply = () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    };

    if (document.startViewTransition) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  });
})();

/* Footer year */
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear().toString();
})();

/* Simple performance tweaks */
document.addEventListener('DOMContentLoaded', () => {
  const profileImg = document.getElementById('profile-img');
  if (profileImg) {
    profileImg.decoding = 'async';
    profileImg.loading = 'eager';
  }

  // Inline YouTube previews
  const host = document.getElementById('ytPlayerHost');
  const titleEl = document.getElementById('videoTitle');
  let currentId = host?.getAttribute('data-initial') || null;

  // Lazy create iframe only when container is visible or on first interaction
  const createIframe = (videoId, autoplay) => {
    if (!host) return null;
    let iframe = host.querySelector('iframe');
    const base = `https://www.youtube-nocookie.com/embed/${videoId}`;
    const params = `?modestbranding=1&rel=0&playsinline=1${autoplay ? '&autoplay=1' : ''}`;
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.className = 'video-frame';
      iframe.width = '560';
      iframe.height = '315';
      iframe.title = 'Video player';
      iframe.loading = 'eager';
      iframe.fetchPriority = 'high';
      iframe.referrerPolicy = 'no-referrer';
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      host.appendChild(iframe);
    }
    iframe.src = base + params;
    return iframe;
  };

  // Create immediately so it is ready on mobile without delay
  if (host && currentId) {
    createIframe(currentId, false);
  }

  document.querySelectorAll('.video-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-video-id');
      const vt = btn.getAttribute('data-title') || 'Preview';
      if (id) createIframe(id, true);
      if (titleEl) titleEl.textContent = vt;
      currentId = id;
    });
  });
});


