
const typewriterTexts = ["Creative Designs", "Exhibition Setups", "Bold Branding"];
let twIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (charIndex < typewriterTexts[twIndex].length) {
    document.getElementById("typewriter").textContent += typewriterTexts[twIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(() => {
      document.getElementById("typewriter").textContent = "";
      charIndex = 0;
      twIndex = (twIndex + 1) % typewriterTexts.length;
      typeWriter();
    }, 2000);
  }
}
typeWriter();

function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Slider
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === slideIndex) slide.classList.add("active");
  });
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlide, 3000);
}
window.onload = showSlide;
