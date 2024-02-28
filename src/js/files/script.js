// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const burgerIcon = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const logo = document.querySelector(".header__logo");
const img = document.createElement("img");
img.src = "./img/logoForBurger.png";
img.className = "header__logo-img-active";

burgerIcon.addEventListener("click", () => {
  burgerIcon.classList.toggle("active");
  nav.classList.toggle("active");
  logo.classList.toggle("active");
  const link = logo.querySelector("a");
  document.body.classList.toggle("lock");
  if (nav.classList.contains("active")) {
    link.insertBefore(img, link.firstChild);
  } else {
    link.removeChild(img);
  }
});

const actionSpan = document.querySelector(
  ".main__training-programm-text-action-hover"
);

const actionPopup = document.querySelector(
  ".main__training-programm-text-action-hover-popup"
);

actionSpan.addEventListener("mouseover", () => {
  actionPopup.classList.add("showActionPopup");
});

actionSpan.addEventListener("mouseout", () => {
  actionPopup.classList.remove("showActionPopup");
});
