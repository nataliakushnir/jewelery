$(document).ready(function(){
  $('.bxslider').bxSlider();
});
imageHeight = getComputedStyle(document.getElementById('imageHeight')).height;
	titleHeight = document.getElementById('titleHeight');
	titleHeight.style.height = imageHeight;

imageHeight = getComputedStyle(document.getElementById('imageHeight')).height;
	titleHeight = document.getElementById('titleHeight1');
	titleHeight.style.height = imageHeight;
	
	window.onresize = function() {
    imageHeight = getComputedStyle(document.getElementById('imageHeight')).height;
	titleHeight = document.getElementById('titleHeight');
	titleHeight.style.height = imageHeight;

imageHeight = getComputedStyle(document.getElementById('imageHeight')).height;
	titleHeight = document.getElementById('titleHeight1');
	titleHeight.style.height = imageHeight;
};