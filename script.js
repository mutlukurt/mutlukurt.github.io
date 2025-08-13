/* Theme handling */
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || saved === 'light') {
    root.setAttribute('data-theme', saved);
  } else {
    root.setAttribute('data-theme', 'auto');
  }

  toggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : current === 'light' ? 'auto' : 'dark';
    root.setAttribute('data-theme', next);
    if (next === 'auto') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', next);
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
});


