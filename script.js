// Add JavaScript functionality if needed, such as event listeners or AJAX calls
document.getElementById('newsletter-signup').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with ${email}!`);
    // Here you can add functionality to handle the subscription
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}

// Auto-slide (optional)
setInterval(() => {
    plusSlides(1);
}, 5000); // Change image every 5 seconds



// nav menu

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const closeIcon = document.getElementById('close-icon');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the active class
});

closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('active'); // Remove the active class to close the menu
});

