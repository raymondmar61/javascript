window.onload = initLinks;
window.onload = displayRandomPic;
window.onload = cycleImages;

/* Rotate images */
var picturesArray = new Array("robot1.jpg","robot2.jpg","robot3.jpg");
var picNumber = 0;
function initLinks() {
    document.getElementById("prevLink").onclick = processPreviousImage;
    document.getElementById("nextLink").onclick = processNextImage;
}
function processPreviousImage() {
    if (picNumber == 0) {
        picNumber=picturesArray.length;
    }
    picNumber--;
    document.getElementById("elementIDPicture").src = picturesArray[picNumber];
    return false;
}
function processNextImage() {
    picNumber++;
    if (picNumber == picturesArray.length) {
        picNumber = 0;
    }
    document.getElementById("elementIDPicture").src = picturesArray[picNumber];
    return false;
}

/* Random images */
function displayRandomPic() {
    var picturesArray2 = new Array ("lion.jpg","tiger.jpg","bear.jpg");
    var randomNumber = Math.floor((Math.random()*picturesArray2.length));
    document.getElementById("randomPicture").src = picturesArray2[randomNumber];
}

/* Cycle images rotates every three seconds */
var picturesArray3 = new Array ("lion.jpg","tiger.jpg","bear.jpg");
var imageNumber = 0;
function cycleImages() {
    var imageNumber = Math.floor((Math.random()*picturesArray3.length));
    document.getElementById("cyclePicture").src = picturesArray3[imageNumber];
    rotate();
}
function rotate() {
    imageNumber++;
    if (imageNumber == picturesArray3.length) {
        imageNumber = 0;
    }
    document.getElementById("cyclePicture").src = picturesArray3[imageNumber];
    setTimeout(rotate, 3*1000);
}