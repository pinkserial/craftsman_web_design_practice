let slideIndex = 0;
let slides = document.getElementsByClassName("slides");
showSlides();

function showSlides() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.visibility = "hidden";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.visibility = "visible";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const menu = document.querySelector("nav > ul");
const submenu = document.querySelectorAll(".submenu");

menu.addEventListener("mouseenter", function () {
  submenu.forEach((sub) => {
    sub.style.maxHeight = "300px";
    sub.style.transition = "1.5s";
  });
});

menu.addEventListener("mouseleave", function () {
  submenu.forEach((sub) => {
    sub.style.maxHeight = "";
    sub.style.transition = ".5s";
  });
});
