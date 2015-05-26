imageHeight = getComputedStyle(document.getElementById('imageHeight')).height;
titleHeight = document.getElementById('titleHeight1');
titleHeight.style.height = imageHeight;

imageHeight = getComputedStyle(document.getElementById('imageHeight')).height;
titleHeight = document.getElementById('titleHeight');
titleHeight.style.height = imageHeight;

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});