const openNavBtn = document.querySelector('span.btn-open-nav');
const navOverlay = document.querySelector('nav.nav-overlay');

openNavBtn.addEventListener('click', () => {
  navOverlay.style.display = 'flex';
});

navOverlay.addEventListener('click', () => {
  navOverlay.style.display = 'none';
});
