let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active'); // Hide the current slide
    currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide
    slides[currentSlide].classList.add('active'); // Show the next slide
}

function prevSlide() {
    slides[currentSlide].classList.remove('active'); // Hide the current slide
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Move to the previous slide
    slides[currentSlide].classList.add('active'); // Show the previous slide
}

// Automatically move to next slide every 3 seconds
setInterval(nextSlide, 3000);

// Button queues 
document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);
