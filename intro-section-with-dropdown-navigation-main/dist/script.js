"use strict";

// Variables
const hamburgerBtn = document.getElementById("hamburger-menu");
const hamburgerBtnClose = document.querySelector(".hamburger-btn--close");
const hamburgerMenu = document.getElementById("menu-overlay");

hamburgerBtn.addEventListener("click", function () {
  hamburgerMenu.classList.remove("hide");
});

hamburgerBtnClose.addEventListener("click", function () {
  hamburgerMenu.classList.add("hide");
});
