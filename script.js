
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let index = 0;
    setInterval(() => {
        slides.forEach(slide => slide.classList.remove("active"));
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 3000);

    const testimonials = document.querySelectorAll(".testimonial");
    let tIndex = 0;
    setInterval(() => {
        testimonials.forEach(t => t.classList.remove("active"));
        tIndex = (tIndex + 1) % testimonials.length;
        testimonials[tIndex].classList.add("active");
    }, 4000);

    document.getElementById("hamburger").addEventListener("click", () => {
        document.getElementById("nav-links").classList.toggle("show");
    });
});
