const goToPrice = document.querySelectorAll(".goToPrice");
if (goToPrice) {
  goToPrice.forEach((link) => {
    link.addEventListener("click", () => {
      window.location.href = "home.html?scrollTo=price";
    });
  });
}