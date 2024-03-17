const titleForImg = document.querySelectorAll(".gallery__chapter-title");

function slideToggle(element) {
  if (
    window.getComputedStyle(element).visibility === "hidden" ||
    window.getComputedStyle(element).opacity === "0"
  ) {
    element.style.visibility = "visible";
    element.style.opacity = "1";
    element.style.height = element.scrollHeight + "px";
  } else {
    element.style.opacity = "0";
    element.style.height = "0";
    element.addEventListener(
      "transitionend",
      () => {
        element.style.visibility = "hidden";
      },
      {
        once: true,
      }
    );
  }
}

if (titleForImg) {
  titleForImg.forEach((title) => {
    title.addEventListener("click", () => {
      title.classList.toggle("active");
      slideToggle(title.nextElementSibling);
    });
  });
}


