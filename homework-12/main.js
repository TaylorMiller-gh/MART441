class Square{

    constructor(posX,posY,h,w, clr)
    {
        this.posX = posX;
        this.posY = posY;
        this.h = h;
        this.w = w;
        this.clr = clr;
    }

    get x()
    {
        return this.posX;
    }

    set x(value)
    {
        this.posX = value;
    }
    get y()
    {
        return this.posY;
    }
    set y(value)
    {
        this.posY = value;
    }

    get height()
    {
        return this.h;
    }
    set height(value)
    {
        this.h = value;
    }

    get width()
    {
        return this.w;
    }
    set width(value)
    {
        this.w = value;
    }
    get color()
    {
        return this.clr;
    }
    set color(value)
    {
      this.clr = value;
    }
}

var canvas;
var ctx;


var player;
var collide;
//var score;
var playerH = 50;
var playerW = 50;
var playerC = "#0000FF";

var object;
var objH = 40;
var objW = 40;
var objC = "#FF0000";
var speedY;
var speedX;
var c3 = "#000000";

$(document).ready(function(){

    setup();

    $(this).keypress(function(event){
        getKey(event);
    });
});

function setup()
{
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    player = new Square(50,50,playerH,playerW,playerC);
    object = new Square(200,200,objH,objW,objC);
    speedY = Math.floor(Math.random()*40)-20;
    speedX = Math.floor(Math.random()*40)-20;
  doodle();
}

setInterval(move, 150);

function getKey(event)
{
    var key = event.which || event.keyCode;
    var input = String.fromCharCode(key);
    if(input == "w" && player.posY > 0)
    {
        player.posY-=10;
    }
    if(input == "s" && player.posY < 590)
    {
        player.posY+=10;
    }
    if(input == "a" && player.posX > 0)
    {
        player.posX-=10;
    }
    if(input == "d" && player.posX < 790)
    {
        player.posX+=10;
    }

    collide = false;
    collide = hasCollided(player, object);
    if(collide == true)
    {
      // Scored this random hex bit from CSS Tricks - https://css-tricks.com/snippets/javascript/random-hex-color/
      var c1 = Math.floor(Math.random()*16777215).toString(16);
      var c2 = Math.floor(Math.random()*16777215).toString(16);
      c3 = Math.floor(Math.random()*16777215).toString(16);
      playerC = "#"+ c1;
      objC = "#" + c2;
      playerH = Math.floor(Math.random()*60)+20;
      playerW = Math.floor(Math.random()*60)+20;
      objH = Math.floor(Math.random()*50)+20;
      objW = Math.floor(Math.random()*50)+20;
      canvas.style.backgroundColor = "#" + c3;
    }
    doodle();
}

function hasCollided(player, object2) {
    return !(
        ((player.posY + player.h) < (object2.posY)) ||
        (player.posY > (object2.posY + object2.h)) ||
        ((player.posX + player.w) < object2.posX) ||
        (player.posX > (object2.posX + object2.w))
    );
}

function move() {
  if(object.posY <= 0 || object.posY >= 580) {
    speedY = speedY*-1;
  }
  if(object.posX <= 0 || object.posX >= 780) {
    speedX = speedX*-1;
  }
  object.x += speedX;
  object.y += speedY;
  doodle();
}

function doodle() {
  ctx.clearRect(0,0,800,600);
    object.color = objC;
    ctx.fillStyle = object.color;
    ctx.fillRect(object.posX, object.posY, objH, objW, objC);

    player.color = playerC;
    ctx.fillStyle = player.color;
    ctx.fillRect(player.posX, player.posY, playerH, playerW);

}
