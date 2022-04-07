"use strict";

// Variables
const iconMenu = document.querySelector(".menu-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const categoryBtn = Array.from(document.querySelectorAll(".category__title"));
const categoryElements = Array.from(
  document.querySelectorAll(".category__subjects")
);

hamburgerMenu.addEventListener("click", function () {
  iconMenu.classList.toggle("open");

  if (iconMenu.classList.contains("open")) {
    iconMenu.src = "./images/icon-close.svg";
  } else {
    iconMenu.src = "./images/icon-hamburger.svg";
  }
});

console.log(categoryElements);

categoryBtn.forEach((x, i) => {
  x.addEventListener("click", function () {
    categoryElements.forEach((box, j) => {
      if (i === j) {
        box.classList.toggle("hide");
      } else {
        box.classList.add("hide");
      }
    });
  });
});
