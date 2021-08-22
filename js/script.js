"use strict";

$(document).ready(function () {
  const mediaQuery = window.matchMedia("(max-width: 500px)");
  if (mediaQuery.matches) {
    $(".news__slider").slick({
      arrows: true,
      slidesToShow: 1,
      infinite: true,
      speed: 500,
    });
  }

  $(".news__slider").slick({
    arrows: true,
    slidesToShow: 3,
    infinite: true,
    speed: 500,
  });
});

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".burger__menu");
const headerMenu = document.querySelector(".header__menu");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    headerMenu.classList.toggle("_inactive");
  });
}
