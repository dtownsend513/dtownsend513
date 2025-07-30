// Mobile nav toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Cookie banner with fade-out
const banner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');

if (!localStorage.getItem('cookiesAccepted')) {
  banner.style.display = 'block';
}

acceptBtn.addEventListener('click', () => {
  localStorage.setItem('cookiesAccepted', 'yes');
  banner.classList.add('fade-out');
  setTimeout(() => {
    banner.style.display = 'none';
  }, 300);
});
