const dialog = document.getElementById("dialog");

dialog_link.onclick = function () {
  dialog.showModal();
};

cancel.onclick = function () {
  dialog.close();
};

dialog.onclick = function (event) {
  console.log(event);
  var dimension = dialog.getBoundingClientRect();
  console.log(dimension);

  if (
    event.clientX < dimension.left ||
    event.clientX > dimension.right ||
    event.clientY < dimension.top ||
    event.clientY > dimension.bottom
  ) {
    dialog.close();
  }
};
