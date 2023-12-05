// Section 1 -  Declare an array of elements -----------------
let myImagesArray = [
    './images/product-1.jpg',
    './images/product-2.jpg',
    './images/product-3.jpg',
  ];
  
  // -----------------------------------------------------------
  // Section 2 -  Build the slide of images --------------------
  let lowerLimit = 0;
  let upperLimit = myImagesArray.length - 1;
  
  setInterval('changeImage(-1)',1000)
  function changeImage(direction) {
    lowerLimit = lowerLimit + direction;
    if (lowerLimit > upperLimit) {
      lowerLimit = 0;
    }
    if (lowerLimit < 0) {
      lowerLimit = upperLimit;
    }
    document.getElementById('slideshow').src = myImagesArray[lowerLimit];
  }
  