// I do not yet have enough knowlege of JavaScript to write this code from scratch, so most of it is copied and altered to fit my needs.

// scroll buttons producten
const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');
let productWidth = document.getElementById('product1').offsetWidth;
let imgContainer = document.getElementById('img-container');

buttonRight.onclick = function () {
  imgContainer.scrollLeft += productWidth;
}

buttonLeft.onclick = function () {
  imgContainer.scrollLeft -= productWidth;
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

/* WIP: fade rand en knop verbergen als je naar het eind van de container bent gescrolld*/
/*

function hideScrollFade() {
	if (imgContainer.style.width == imgContainer.scrollLeft) {
		document.getElementById('scroll-fade-right').display = 'hidden';
		buttonRight.display = 'hidden';
	}
	console.log(imgContainer.offsetWidth);
	console.log(imgContainer.scrollLeft);
}
*/
