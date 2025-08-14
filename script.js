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
  const player = document.getElementById('ytPlayer');
  const titleEl = document.getElementById('videoTitle');
  document.querySelectorAll('.video-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-video-id');
      const vt = btn.getAttribute('data-title') || 'Preview';
      if (player && id) {
        const base = `https://www.youtube-nocookie.com/embed/${id}`;
        const params = '?modestbranding=1&rel=0&playsinline=1&autoplay=1';
        player.src = base + params;
      }
      if (titleEl) titleEl.textContent = vt;
    });
  });
});


