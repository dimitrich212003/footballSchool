// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const burgerIcon = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const logo = document.querySelector(".header__logo");
const tel = document.querySelectorAll(".tel");
const form = document.querySelector(".main__contact-form");
const btnsScroll = document.querySelectorAll(".btnScroll");
const contact = document.getElementById("contact");
const price = document.getElementById("price");

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

if (actionSpan) {
  actionSpan.addEventListener("mouseover", () => {
    actionPopup.classList.add("showActionPopup");
  });

  actionSpan.addEventListener("mouseout", () => {
    actionPopup.classList.remove("showActionPopup");
  });
}

window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(tel, function (input) {
    let keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      let reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      )
        this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let enteredValue;
//   tel.forEach((el) => {
//     enteredValue = el.value;
//   });
//   console.log("Отправленное значение:", enteredValue);
// });

btnsScroll.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    contact.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const scrollTo = urlParams.get("scrollTo");
  if (scrollTo) {
    let elementToScroll = document.getElementById(scrollTo);
    if (elementToScroll) {
      elementToScroll.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
});
