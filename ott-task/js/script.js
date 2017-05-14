var navMain = document.querySelector(".page-header__navbar");
var navToggle = document.querySelector(".page-header__navbar-toggle");

var cashToggle = document.querySelector(".cashback__option-toggle");
var cashApp = document.querySelector(".cashback__option-toggle--app");
var cashSite = document.querySelector(".cashback__option-toggle--site");

var percentApp = document.querySelector(".cashback__item-percent--app");
var percentSite = document.querySelector(".cashback__item-percent--site");

navMain.classList.remove("page-header__navbar--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("page-header__navbar--closed")) {
    navMain.classList.remove("page-header__navbar--closed");
    navMain.classList.add("page-header__navbar--opened");
  }

  else {
    navMain.classList.add("page-header__navbar--closed");
    navMain.classList.remove("page-header__navbar--opened");
  }
});

cashApp.addEventListener("click", function() {

  if (cashApp.classList.contains("cashback__option-toggle--inactive")) {
    this.classList.remove("cashback__option-toggle--inactive");
    this.classList.add("cashback__option-toggle--active");
    cashSite.classList.remove("cashback__option-toggle--active");
    cashSite.classList.add("cashback__option-toggle--inactive");
  }
  document.getElementById("air-site").style.display = "none";
  document.getElementById("rail-site").style.display = "none";
  document.getElementById("hotel-site").style.display = "none";

  document.getElementById("air-app").style.display = "block";
  document.getElementById("rail-app").style.display = "block";
  document.getElementById("hotel-app").style.display = "block";
});

cashSite.addEventListener("click", function() {

  if (cashSite.classList.contains("cashback__option-toggle--inactive")) {
    this.classList.remove("cashback__option-toggle--inactive");
    this.classList.add("cashback__option-toggle--active");
    cashApp.classList.remove("cashback__option-toggle--active");
    cashApp.classList.add("cashback__option-toggle--inactive");
  }

  document.getElementById("air-site").style.display = "block";
  document.getElementById("rail-site").style.display = "block";
  document.getElementById("hotel-site").style.display = "block";

  document.getElementById("air-app").style.display = "none";
  document.getElementById("rail-app").style.display = "none";
  document.getElementById("hotel-app").style.display = "none";

});
