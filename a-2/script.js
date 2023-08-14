const slide = document.querySelector(".slides ul");

setTimeout(showSlide, 3000);

let slideIndex = 0;

function showSlide() {
  slide.style.left = slideIndex * -100 + "%";
  slideIndex++;
  if (slideIndex == 3) slideIndex = 0;
  setTimeout(showSlide, 3000);
}

const dialog = document.getElementById("dialog");
const dialog_open_link = document.getElementById("dialog_open_link");
const dialog_close_btn = document.getElementById("dialog_close_btn");

dialog_open_link.onclick = function () {
  dialog.showModal();
};

dialog_close_btn.onclick = function () {
  dialog.close();
};

dialog.onclick = function (event) {
  const dimension = dialog.getBoundingClientRect();

  if (
    event.clientX < dimension.left ||
    event.clientX > dimension.right ||
    event.clientY < dimension.top ||
    event.clientY > dimension.bottom
  ) {
    dialog.close();
  }
};
