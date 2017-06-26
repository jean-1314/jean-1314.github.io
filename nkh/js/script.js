var greenBlock = document.querySelector(".aside-panel__block-1");
var blueBlock = document.querySelector(".aside-panel__block-2");
var asideToggle = document.querySelector(".aside-panel__block-pop");

greenBlock.addEventListener("click", function() {

  if (asideToggle.classList.contains("aside-panel__block-pop--hidden")) {
    asideToggle.classList.remove("aside-panel__block-pop--hidden");
    asideToggle.classList.add("aside-panel__block-pop--shown");
  }

  else {
    asideToggle.classList.remove("aside-panel__block-pop--shown");
    asideToggle.classList.add("aside-panel__block-pop--hidden");
  }

  blueBlock.classList.toggle("aside-panel__block-2--toggle");
});

var mainBtn = document.querySelector(".main__btn");
var mainWindow = document.querySelector(".main");

mainBtn.addEventListener("click", function() {
  if (mainWindow.classList.contains("main--first")) {
    mainWindow.classList.remove("main--first");
    mainWindow.classList.add("main--second");
  }

  else if (mainWindow.classList.contains("main--second")) {
    mainWindow.classList.remove("main--second");
    mainWindow.classList.add("main--first");
  }

  else {
    mainWindow.classList.add("main--second");
  }
});

var navToggle = document.querySelector(".main-nav__toggle");
var navMain = document.querySelector(".main-nav");
var header = document.querySelector(".page-header");
var fullNav = document.querySelector(".full-nav");
var fullNavWrap = document.querySelector(".full-nav__wrapper");

navToggle.addEventListener("click", function() {

  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");

    header.classList.remove("page-header--hidden");
    header.classList.add("page-header--shown");
  }

  else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");

    header.classList.remove("page-header--shown");
    header.classList.add("page-header--hidden");
  }

  if (fullNav.classList.contains("full-nav--hidden")) {
    fullNav.classList.remove("full-nav--hidden");
    fullNav.classList.add("full-nav--shown");
  }

  else if (fullNav.classList.contains("full-nav--shown")) {
    fullNav.classList.add("full-nav--hidden");
    fullNav.classList.remove("full-nav--shown");
  }

  else {
    fullNav.classList.add("full-nav--shown");
  }

  if (fullNavWrap.classList.contains("full-nav__wrapper--hidden")) {
    fullNavWrap.classList.remove("full-nav__wrapper--hidden");
    fullNavWrap.classList.add("full-nav__wrapper--shown");
  }

  else if (fullNavWrap.classList.contains("full-nav__wrapper--shown")) {
    fullNavWrap.classList.remove("full-nav__wrapper--shown");
    fullNavWrap.classList.add("full-nav__wrapper--hidden");
  }

  else {
    fullNavWrap.classList.add("full-nav__wrapper--shown");
  }
});
