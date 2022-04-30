"use strict";

// Variables
const iconMenu = document.querySelector(".menu-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const categoryBtn = Array.from(document.querySelectorAll(".category__title"));
const categoryElements = Array.from(
  document.querySelectorAll(".category__subjects")
);
const categoryIcon = document.querySelectorAll(".category__icon");
const menuOverlay = document.getElementById("menu-overlay");
const mediaLarge = window.matchMedia("(min-width: 900px)");

// Images
const imageEditor = document.querySelector(".image--editor");
const imageLaptop = document.querySelector(".image--laptop");

if (!mediaLarge.matches) {
  hamburgerMenu.addEventListener("click", function () {
    // Show mobile menu
    menuOverlay.classList.toggle("hide");

    // Change icon of het hamburger menu
    iconMenu.classList.toggle("open");

    if (iconMenu.classList.contains("open")) {
      iconMenu.src = "./images/icon-close.svg";
    } else {
      iconMenu.src = "./images/icon-hamburger.svg";
    }
  });
}

// Change category Icon image color
if (mediaLarge.matches) {
  categoryIcon.forEach((x) => (x.src = "./images/icon-arrow-light.svg"));
  imageEditor.src = "./images/illustration-editor-desktop.svg";
  imageLaptop.src = "./images/illustration-laptop-desktop.svg";
}

// Navigation functionality
categoryBtn.forEach((x, i) => {
  x.addEventListener("click", function () {
    // delete opacity of category title
    categoryBtn.forEach((el) => el.classList.remove("category--open"));

    // Open menu options on click of category title
    categoryElements.forEach((box, j) => {
      if (i === j) {
        box.classList.toggle("hide");

        if (!box.classList.contains("hide")) {
          categoryIcon[j].style.transform = "rotate(180deg)";
          x.classList.add("category--open");
        } else {
          categoryIcon[j].style.transform = "rotate(0deg)";
        }
      } else {
        box.classList.add("hide");
        categoryIcon[j].style.transform = "rotate(0deg)";
      }
    });
  });
});
