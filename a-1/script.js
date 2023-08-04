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

document.querySelectorAll("nav>ul>li")?.forEach((menu) => {
  menu.addEventListener("mouseenter", () => {
    // const submenu = menu.querySelector(".submenu");
    $(".submenu").slideDown(30000);
  });

  menu.addEventListener("mouseleave", () => {
    const submenu = menu.querySelector(".submenu");
    submenu.classList.remove("show");
  });
});
