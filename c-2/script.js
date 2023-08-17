const slides = document.querySelector(".slides ul");
let index = 0;

function showSlide() {
  slides.style.left = index++ * -100 + "%";

  if (index == 3) index = 0;

  setTimeout(showSlide, 3000);
}

setTimeout(showSlide, 3000);

const dialog = document.getElementById("dialog");

dialog.onclick = function (event) {
  console.dir(dialog);
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

dialog_open_link.onclick = function () {
  dialog.showModal();
  return false;
};

dialog_close_btn.onclick = function () {
  dialog.close();
};
