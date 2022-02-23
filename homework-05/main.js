var blank = "./images/blank.jpg";

var images = ["./images/image0.jpg","./images/image1.jpg","./images/image2.jpg","./images/image3.jpg","./images/image4.jpg","./images/image5.jpg","./images/image6.jpg","./images/image7.jpg","./images/image8.jpg","./images/image9.jpg"];
var imgID = ["image0","image1","image2","image3","image4","image5","image6","image7","image8","image9"];

var imagesRandom = new Array();

function load() {

  loadImages();

  for(var i=0; i < imgID.length; i++) {
    document.getElementById(imgID[i]).src = blank;
  }
}

function loadImages() {
  //start var k at 0 outside of loop. It will be used to index images[];
  var k = 0;

  //The while block I mentioned in the readme
  while(imagesRandom.length < 10){

      //Select radnom number
      var i = Math.floor(Math.random()*images.length);

      //If i <= 5, 'push' images[k] onto back, otherwise 'unshift' onto front
      if(i <= 5) {
        imagesRandom.push(images[k]);
        k++;
      } else {
        imagesRandom.unshift(images[k]);
        k++;
      }
      //console.log(imagesRandom.join());
    }
}




function flip(num) {
  document.getElementById(imgID[num]).src = imagesRandom[num];
}
