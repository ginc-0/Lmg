
// Hamburger toggle
document.getElementById("menu-toggle").onclick = function() {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("hidden");
};

// Back to Top
document.getElementById("backToTop").onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Testimonial Carousel
let index = 0;
const testimonials = document.querySelectorAll('.testimonial');
setInterval(() => {
    testimonials.forEach(t => t.classList.remove('active'));
    index = (index + 1) % testimonials.length;
    testimonials[index].classList.add('active');
}, 4000);
