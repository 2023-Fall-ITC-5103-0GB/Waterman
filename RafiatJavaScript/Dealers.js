
let myImgArray = [
    './images/dealer.png',
    './images/dealer3.jpg',
    './images/dealer4.jpg',
    './images/dealer5.jpg',
  ];
  
  // Section 2 -------------------------------------------------
  //make an automatic slide to display the images
  let ImgNumber = 0;
  let difference = myImgArray.length - 1;
  
  let delay = 3000; //milliseconds    1sec=1000milliseconds
  
  setInterval('ChangeImages(1)', delay);
  //-1 to show the slide backwards
  //1 to show the slide forwards
  
  function ChangeImages(direction) {
    //begin function
  
    ImgNumber = ImgNumber + direction;
  
    if (ImgNumber > difference) {
      //begin inner first if
      ImgNumber = 0;
    } //end inner first if
  
    if (ImgNumber < 0) {
      //begin inner second if
      ImgNumber = difference;
    } //end inner second if
    //document.slideshow.src = myImagesArray[ImageNumber];
    document.getElementById('deliver').src = myImgArray[ImgNumber];
  } //end function
  
let slideInterval = setInterval(ChangeImages(1), 5000);

// function pause() {
//     clearInterval(slideInterval);
// }

// function resume() {
//     slideInterval = setInterval(ChangeImages(1), 5000);
//   }

  