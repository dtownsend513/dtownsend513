// Mobile nav toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Cookie banner
if (!localStorage.getItem('cookiesAccepted')) {
  document.getElementById('cookie-banner').style.display = 'block';
}
document.getElementById('accept-cookies').addEventListener('click', () => {
  localStorage.setItem('cookiesAccepted','yes');
  document.getElementById('cookie-banner').style.display = 'none';
});
