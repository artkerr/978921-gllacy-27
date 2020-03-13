var link = document.querySelector(".feedback-button");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".close-button");
var userName = popup.querySelector("[name=user-name]");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  userName.focus();

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  })
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
      }
    }
})
