var posX = 10;
var posY = 10;
var long;
var lat;


// A big thanks and all credit to freecodecamp for the canvas! https://www.freecodecamp.org/news/how-displaying-an-image-on-html5-canvas-works-13e3f6a6c4bd/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = './theWholeWorld.png';
img.onload = () => {
  ctx.drawImage(img, 0, 0);
};

//------------------------------------------------------------------------------





$(document).ready(function () {
    $("#coord").click(function () {
        $("#information").load("http://api.open-notify.org/iss-now.json", function(response){;
        var info = JSON.parse(response);
        console.log(info);
        long = info.iss_position.longitude;
        lat = info.iss_position.latitude;
        //console.log(string1);
        //console.log(string2);
        $("#information").html("Longitude: " + long + " Latitude: " + lat);

        //The Canvas pixels are double the number of lat-long lines (eg 720x360 vs. 360x180); posX = 360 is 0 degress long. posY = 90 is 0 degrees lat.
        if (long >= 0 && long <=180) {
          // East of Prime Meridian
          posX = Math.round(360 + (long*2));

        } else if (long < 0 && long >= -180) {
          //West of Prime Meridian
          posX = Math.round(360 - (long*-2));
        }

        if (lat >= 0 && lat <=90) {
          //North of Equator
          posY = Math.round(180 - (lat*2));

        } else if (lat < 0 && lat >= -90) {
          //South of Equator
          posY = Math.round(180 + (lat*-2));
        }
        ctx.fillRect(posX, posY, 10, 10)});
    });
});

function fadeText()
{
    $("#information").fadeOut("slow").fadeIn("slow");
}

(function($){
$.fn.lucky = function () {
    this.css("background-color", "gold");
    this.css("color", "white");
    this.css("font-size", 48);
    document.getElementById("title").innerHTML = "WHOA!! I'm feeling lucky about the ISS!!!"
    return this;
};
}(jQuery));
$(function () {
    $("#luck").click(function () {
        $("#title").lucky().fadeOut("slow").fadeIn("slow");
    });

});
