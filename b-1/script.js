let currentSlideIndex = 0;
const slides = document.getElementsByClassName("slide");
setTimeout(showSlides, 3000);

function showSlides() {
  const beforeTranslate = "translateX(100%)";
  const showTranslate = "translateX(0%)";
  const afterTranslate = "translateX(-100%)";

  if (currentSlideIndex === 0) {
    slides[0].style.transform = afterTranslate;
    slides[1].style.transform = showTranslate;
    slides[2].style.transform = beforeTranslate;

    slides[0].style.transition = "transform 1s";
    slides[1].style.transition = "transform 1s";
    slides[2].style.transition = "none";
  } else if (currentSlideIndex === 1) {
    slides[0].style.transform = beforeTranslate;
    slides[1].style.transform = afterTranslate;
    slides[2].style.transform = showTranslate;

    slides[0].style.transition = "none";
    slides[1].style.transition = "transform 1s";
    slides[2].style.transition = "transform 1s";
  } else {
    slides[0].style.transform = showTranslate;
    slides[1].style.transform = beforeTranslate;
    slides[2].style.transform = afterTranslate;

    slides[0].style.transition = "transform 1s";
    slides[1].style.transition = "none";
    slides[2].style.transition = "transform 1s";
  }

  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

  setTimeout(showSlides, 3000);
}
