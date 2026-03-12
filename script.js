// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Fade-up animation on scroll 
window.addEventListener("scroll", () => {
  const aboutSection = document.querySelector(".about-container");
  const sectionPosition = aboutSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;
  if (sectionPosition < screenPosition) {
    aboutSection.classList.add("show");
  }
});

// Fade-in effect on scroll for menu section 
window.addEventListener("scroll", () => {
  const menuSection = document.querySelector(".menu-container");
  const sectionPosition = menuSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sectionPosition < screenPosition) {
    menuSection.classList.add("show");
  }
});


// Scroll animation for reservation section 
window.addEventListener("scroll", () => {
  const reservationSection = document.querySelector(".reservation-container");
  const sectionPosition = reservationSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;
  if (sectionPosition < screenPosition) {
    reservationSection.classList.add("show");
  }
});


// Fade-in animation for review section 
 window.addEventListener("scroll", () => { 
  const reviewSection = document.querySelector(".reviews-container"); 
  const sectionPosition = reviewSection.getBoundingClientRect().top; 
  const screenPosition = window.innerHeight / 1.3; 
  if (sectionPosition < screenPosition) { 
    reviewSection.classList.add("show"); 
  } 
});

// Fade-in animation for contact section 
window.addEventListener("scroll", () => { 
  const contactSection = document.querySelector(".contact-container"); 
  const sectionPosition = contactSection.getBoundingClientRect().top; 
  const screenPosition = window.innerHeight / 1.3; 
  if (sectionPosition < screenPosition) { 
    contactSection.classList.add("show"); 
  } 
});

const showMoreBtn = document.getElementById("showMoreBtn");
const extraMenu = document.getElementById("extraMenu");

showMoreBtn.addEventListener("click", () => {

  extraMenu.classList.toggle("show");

  if(extraMenu.classList.contains("show")){
    showMoreBtn.innerHTML = 'Show Less <i class="fa-solid fa-chevron-up"></i>';
  }else{
    showMoreBtn.innerHTML = 'Show More <i class="fa-solid fa-chevron-down"></i>';
  }

});