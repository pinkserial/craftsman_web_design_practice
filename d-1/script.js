const slideList = document.querySelector(".slides ul");
let slideIndex = 0;

setTimeout(showSlide, 3000);

function showSlide() {
  slideList.style.left = slideIndex * -100 + "%";
  slideIndex++;
  if (slideIndex == 3) slideIndex = 0;
  setTimeout(showSlide, 3000);
}

const tabList = document.querySelectorAll(".tab ul > li");
const tabBtn = document.querySelectorAll(".tab__btn");

tabBtn.forEach((btn) => {
  btn.onclick = function (event) {
    for (const tabMenu of tabList) {
      tabMenu.classList.remove("active");
    }

    const activeList = btn.closest("li");
    activeList.classList.add("active");
  };
});

const dialog_open_link = document.getElementById("dialog_open_link");
const dialog_close_btn = document.getElementById("dialog_close_btn");
const dialog = document.getElementById("dialog");

dialog_open_link.onclick = function () {
  dialog.showModal();
};

dialog_close_btn.onclick = function () {
  dialog.close();
};

dialog.onclick = function (event) {
  const dimension = dialog.getBoundingClientRect();
  if (
    dimension.left < event.clientX ||
    dimension.right > event.clientX ||
    dimension.top < event.clientY ||
    dimension.bottom > event.clientY
  ) {
    dialog.close();
  }
};
