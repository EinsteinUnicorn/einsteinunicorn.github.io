// script.js

let currentSlide = 1;
showSlide(currentSlide);

// Function to show a specific slide
function showSlide(n) {
    const slides = document.getElementsByClassName('carousel-slide');
    if (n > slides.length) currentSlide = 1;
    if (n < 1) currentSlide = slides.length;
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    // Display the current slide
    slides[currentSlide - 1].style.display = 'block';
}

// Move to the next/previous slide
function moveSlide(n) {
    showSlide(currentSlide += n);
}

// Modal functionality
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
