document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const crossIcon = document.querySelector('.cross-icons');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.add('active');
    });

    crossIcon.addEventListener('click', function() {
        navbar.classList.remove('active');
    });
});





let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    if (n > slides.length / 3) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length / 3 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[0].parentElement.style.transform = `translateX(${-(slideIndex - 1) * 100}%)`;
    dots[slideIndex - 1].className += " active";
}




let serviceSlideIndex = 1;
showServiceSlides(serviceSlideIndex);

function currentServiceSlide(n) {
    showServiceSlides(serviceSlideIndex = n);
}

function showServiceSlides(n) {
    let i;
    const slides = document.querySelectorAll('.service-card');
    const dots = document.querySelectorAll('.service-dot');
    if (n > slides.length / 3) { serviceSlideIndex = 1 }
    if (n < 1) { serviceSlideIndex = slides.length / 3 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" service-active", "");
    }
    slides[0].parentElement.style.transform = `translateX(${-(serviceSlideIndex - 1) * 100}%)`;
    dots[serviceSlideIndex - 1].className += " service-active";
}





