let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    slides[slideIndex - 1].style.display = "block";
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "white";
    }
    
    dots[slideIndex - 1].style.backgroundColor = "#ff7eb3";
    
    setTimeout(showSlides, 2500); // Change image every 2.5 seconds
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}
