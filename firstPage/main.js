
let btnIn = document.getElementsByClassName ("tab__in");
let btnUp = document.getElementsByClassName("tab__up");
let formIn = document.getElementsByClassName("tab__form__in");
let formUp = document.getElementsByClassName("tab__form__up");

btnUp[0].onclick = function() {
  formIn[0].classList.add("hidden");
  formUp[0].classList.remove("hidden");
};

btnIn[0].onclick = function() {
  formUp[0].classList.add("hidden");
  formIn[0].classList.remove("hidden");
};
