// Mobile nav toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('active');
});

// Cookie banner
const banner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');
if (!localStorage.getItem('cookiesAccepted')) banner.style.display = 'block';
acceptBtn.addEventListener('click', () => {
  localStorage.setItem('cookiesAccepted','yes');
  banner.style.display = 'none';
});
