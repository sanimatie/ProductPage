// I do not yet have enough knowlege of JavaScript to write this code from scratch, so I most of it is copied and altered to fit my needs.

// scroll buttons producten
const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');
let productWidth = document.getElementById('product1').offsetWidth;

buttonRight.onclick = function () {
  document.getElementById('img-container').scrollLeft += productWidth;
};

buttonLeft.onclick = function () {
  document.getElementById('img-container').scrollLeft -= productWidth;
};

// header verkleinen op alleen desktop 
window.onscroll = function () {scrollFunction();};
window.onload = function () {scrollFunction();};
window.onresize = function () {scrollFunction();};

function scrollFunction() {
  if (window.innerWidth < 900) {
    document.getElementById("nav-bar-container").style.height = "70px";
  } else
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("nav-bar-container").style.height = "100px";
  } else {
    document.getElementById("nav-bar-container").style.height = "200px";
  }
}