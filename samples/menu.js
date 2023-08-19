const menu = document.querySelector("main header nav ul");
const submenu = document.querySelectorAll(".sub");

menu.addEventListener("mouseenter", function (e) {
  submenu.forEach((sub) => {
    // sub.style.transition = "1s";
    sub.style.opacity = "1";
    sub.style.visibility = "visible";
  });
});

menu.addEventListener("mouseleave", function (e) {
  submenu.forEach((sub) => {
    sub.style.transition = "1s";
    sub.style.opacity = "0";
    sub.style.visibility = "hidden";
  });
});
