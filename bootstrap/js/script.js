
if (document.body.clientWidth > 991) {
	imageHeight = getComputedStyle(document.getElementById('imageHeight')).height;
	titleHeight = document.getElementById('titleHeight3');
	titleHeight.style.height = imageHeight;

	imageHeight = getComputedStyle(document.getElementById('imageHeight')).height;
	titleHeight = document.getElementById('titleHeight');
	titleHeight.style.height = imageHeight;
}