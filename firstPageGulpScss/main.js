
let btnIn = document.getElementsByClassName ("section__right__tabs__btn__in");
let btnUp = document.getElementsByClassName("section__right__tabs__btn__up");
let formIn = document.getElementsByClassName("section__right__tabs__form__in");
let formUp = document.getElementsByClassName("section__right__tabs__form__up");

btnUp[0].onclick = function() {
  formIn[0].classList.add("hidden");
  formUp[0].classList.remove("hidden");
}

btnIn[0].onclick = function() {
  formUp[0].classList.add("hidden");
  formIn[0].classList.remove("hidden");
};
