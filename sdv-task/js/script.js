//Tab switcher
$(document).ready(function() {
    $(".hints-top__item-tablink--cache").click(function(event) {
        event.preventDefault();
        $(this).addClass("hints-top__item-tablink--active");
        $(this).siblings().removeClass("hints-top__item-tablink--active");
        var tab = $(this).attr("href");
        $(".hints-top__item-tabcontent--cache").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
    $(".hints-top__item-tablink--cookies").click(function(event) {
        event.preventDefault();
        $(this).addClass("hints-top__item-tablink--active");
        $(this).siblings().removeClass("hints-top__item-tablink--active");
        var tab = $(this).attr("href");
        $(".hints-top__item-tabcontent--cookies").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});

//Pesky little separator switch
var cacheIe = document.querySelector(".hints-top__item-tablink--cache-ie");
var cacheFf = document.querySelector(".hints-top__item-tablink--cache-ff");
var cacheCh = document.querySelector(".hints-top__item-tablink--cache-ch");
var cacheSa = document.querySelector(".hints-top__item-tablink--cache-sa");

cacheIe.addEventListener("click", function() {
  cacheIe.classList.add("hints-top__item-tablink--off");
  cacheFf.classList.remove("hints-top__item-tablink--off");
  cacheCh.classList.remove("hints-top__item-tablink--off");
});

cacheFf.addEventListener("click", function() {
  cacheIe.classList.add("hints-top__item-tablink--off");
  cacheFf.classList.add("hints-top__item-tablink--off");
  cacheCh.classList.remove("hints-top__item-tablink--off");
});

cacheCh.addEventListener("click", function() {
  cacheIe.classList.remove("hints-top__item-tablink--off");
  cacheFf.classList.add("hints-top__item-tablink--off");
  cacheCh.classList.add("hints-top__item-tablink--off");
});

cacheSa.addEventListener("click", function() {
  cacheIe.classList.remove("hints-top__item-tablink--off");
  cacheFf.classList.remove("hints-top__item-tablink--off");
  cacheCh.classList.add("hints-top__item-tablink--off");
});

//Same for bottom tab
var cookiesIe = document.querySelector(".hints-top__item-tablink--cookies-ie");
var cookiesFf = document.querySelector(".hints-top__item-tablink--cookies-ff");
var cookiesCh = document.querySelector(".hints-top__item-tablink--cookies-ch");
var cookiesSa = document.querySelector(".hints-top__item-tablink--cookies-sa");

cookiesIe.addEventListener("click", function() {
  cookiesIe.classList.add("hints-top__item-tablink--off");
  cookiesFf.classList.remove("hints-top__item-tablink--off");
  cookiesCh.classList.remove("hints-top__item-tablink--off");
});

cookiesFf.addEventListener("click", function() {
  cookiesIe.classList.add("hints-top__item-tablink--off");
  cookiesFf.classList.add("hints-top__item-tablink--off");
  cookiesCh.classList.remove("hints-top__item-tablink--off");
});

cookiesCh.addEventListener("click", function() {
  cookiesIe.classList.remove("hints-top__item-tablink--off");
  cookiesFf.classList.add("hints-top__item-tablink--off");
  cookiesCh.classList.add("hints-top__item-tablink--off");
});

cookiesSa.addEventListener("click", function() {
  cookiesIe.classList.remove("hints-top__item-tablink--off");
  cookiesFf.classList.remove("hints-top__item-tablink--off");
  cookiesCh.classList.add("hints-top__item-tablink--off");
});
