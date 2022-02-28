var blank = "./images/blank.jpg";

var images = ["./images/image0.jpg","./images/image1.jpg","./images/image2.jpg","./images/image3.jpg","./images/image4.jpg","./images/image5.jpg","./images/image6.jpg","./images/image7.jpg","./images/image8.jpg","./images/image9.jpg"];
var imgID = ["image0","image1","image2","image3","image4","image5","image6","image7","image8","image9"];

var imagesRandom = new Array();

// ------  New array to hold a 'comparable' value for the images---------------
var imgVal = new Array();

//-------- New variables to check images---------------------------------------
var click1 = -1;
var click2 = -1;
//-----------------------------------------------------------------------------

var info = {"name":"", "age":0, "attempts":0};

/* If these variable are not private, the info is reset
var name;
var age;
*/
var attempts = 0;
var win = 0;

function load() {

  loadImages();

  attempts = 0;

  for(var i=0; i < imgID.length; i++) {
    document.getElementById(imgID[i]).src = blank;
  }

}

function loadImages() {

  var k = 0;

  while(imagesRandom.length < 10){


      //Push or Unshift Image based on random number
      var i = Math.floor(Math.random()*images.length);

      if(i <= 5) {
        imagesRandom.push(images[k]);
        imgVal.push(k); //            <-------------------------- Push Index value into new array
        k++;
      } else {
        imagesRandom.unshift(images[k]);
        imgVal.unshift(k);
        k++;
      }
      console.log(imagesRandom.join());
      console.log(imgVal.join());

    }
}

function flip(num) {

  //Set parameter num to variable and show image
  if (click1 >=0) {
    click2 = num;
    document.getElementById(imgID[num]).src = imagesRandom[num];
  } else if (click1 < 0) {
    click1 = num;
    document.getElementById(imgID[num]).src = imagesRandom[num];
  }

/*
  Since every image has an individual name, I have to compare their assigned index values in the ImgVal array.
  Images 0-4 are the exact same as images 5-9. The image of index 0 is the image of index 5, index 1 is 6, etc. Therefore,
  if I compare the parameter value of click1 to 'click2 - imageArray.length/2' (and vice versa) the value should be equal.
*/


  if(imgVal[click1] - imgVal.length/2 === imgVal[click2] || imgVal[click1] === imgVal[click2] - imgVal.length/2 && click2 >=0) {
    attempts++;
    win++;
    click1=-1;
    click2=-1;
  }
  //player must click twice to set click2 above 0
  else if (click2 >=0) {
    attempts++
    setTimeout(reset, 1000);
  }

  if(win == imagesRandom.length/2) {
    info.attempts = attempts;
    localStorage.setItem("info", JSON.stringify(info));
    window.location = "page3.html"
  }

}

function reset () {
  document.getElementById(imgID[click1]).src = blank;
  document.getElementById(imgID[click2]).src = blank;
  click1=-1;
  click2=-1;
}

function setInfo() {

  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  info.name = name;
  info.age = age;
  info.attempts = attempts;

  localStorage.setItem("info", JSON.stringify(info));

  window.location = "page2.html";

}

function getInfo() {

  var storedInfo = localStorage.getItem("info");
  info = JSON.parse(storedInfo);

  //If the player is on the end page, display info
  if(document.getElementById("end") != null) {
    document.getElementById("name").innerHTML = "Name: " + info.name;
    document.getElementById("age").innerHTML = "Age: " + info.age;
    document.getElementById("attempts").innerHTML = "Attempts: " + info.attempts;
  }
}

function page1() {
  window.location = "index.html";
}
