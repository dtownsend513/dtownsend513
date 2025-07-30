// NAV TOGGLE
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.toggle('active');
});

// COOKIE BANNER
const banner = document.getElementById('cookie-banner');
const accept = document.getElementById('accept-cookies');
if (!localStorage.getItem('cookiesAccepted')) {
  banner.style.display = 'block';
}
accept.addEventListener('click', () => {
  localStorage.setItem('cookiesAccepted','yes');
  banner.classList.add('fade-out');
  setTimeout(() => banner.style.display='none', 300);
});
