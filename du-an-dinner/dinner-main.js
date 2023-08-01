var elementMoon = document.getElementById("moon");
var elementSun = document.getElementById("sun");
var elementSearch = document.getElementById("header-search");
var aboutSearch = document.getElementById("about-section");

elementMoon.addEventListener("click", function (event) {
  event.preventDefault;
  elementMoon.classList.add("d-none");
  elementMoon.classList.remove("d-block");
  elementSun.classList.add("d-block");
  elementSearch.classList.add("black");
  aboutSearch.classList.add("black");
});

elementSun.addEventListener("click", function (event) {
  event.preventDefault;
  elementSun.classList.add("d-none");
  elementSun.classList.remove("d-block");
  elementMoon.classList.add("d-block");
  elementSearch.classList.remove("black");
  aboutSearch.classList.remove("black");
});
