function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('show');
}
let current = 0;
const slides = document.querySelectorAll('.slide');
setInterval(() => {
  slides[current].style.opacity = 0;
  current = (current + 1) % slides.length;
  slides[current].style.opacity = 1;
}, 3000);
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
