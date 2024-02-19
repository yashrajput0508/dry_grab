var mainDiv = document.querySelector('.main-div');
var mainDivWidth = mainDiv.offsetWidth;
var mainDivHeight = mainDiv.offsetHeight;

// Apply the dimensions to the rotated div
var rotatedDiv = document.querySelector('.rotated-div');
rotatedDiv.style.width = mainDivWidth + 100 + 'px';
rotatedDiv.style.height = mainDivHeight + 100 + 'px';