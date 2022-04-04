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
var square = [];
var pickUp = [];
var collide;
var score;

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

    player = new Square(50,50,50,50,"#0000FF");
    score = 0;

    $.getJSON("data/square.json", function(data) {
        for(var i = 0; i < data.object.length; i++)
        {
            square.push(new Square(data.object[i].x,data.object[i].y, data.object[i].h, data.object[i].w, data.object[i].color));
        }
        drawSquare();
    });
    $.getJSON("data/pickUp.json", function(data) {
        for(var i = 0; i < data.object.length; i++)
        {
            pickUp.push(new Square(data.object[i].x,data.object[i].y, data.object[i].h, data.object[i].w, data.object[i].color));
        }
        drawPickUp();
    });
    drawPlayer();
}

function getKey(event)
{
    var key = event.which || event.keyCode;
    var input = String.fromCharCode(key);
    if(input == "w")
    {
        player.posY-=10;
    }
    if(input == "s")
    {
        player.posY+=10;
    }
    if(input == "a")
    {
        player.posX-=10;
    }
    if(input == "d")
    {
        player.posX+=10;
    }

    collide = false;
    for(var i = 0; i < pickUp.length; i++)
    {
        collide = hasCollided(player,pickUp[i]);
        if(collide == true)
        {
          pickUp.splice(i, 1);
          score++;
            break;
        }
    }
    drawPlayer();
    drawSquare();
    drawPickUp();
}

function hasCollided(player, object2) {
    return !(
        ((player.posY + player.h) < (object2.posY)) ||
        (player.posY > (object2.posY + object2.h)) ||
        ((player.posX + player.w) < object2.posX) ||
        (player.posX > (object2.posX + object2.w))
    );
}

function drawSquare()
{
    for(var i = 0; i < square.length; i++)
    {
        ctx.fillStyle = square[i].color;
        ctx.fillRect(square[i].posX, square[i].posY, square[i].w, square[i].h);
    }
}

function drawPickUp ()
{
  for (var i = 0; i < pickUp.length; i++)
  {
    ctx.fillStyle = pickUp[i].color;
    ctx.fillRect(pickUp[i].posX, pickUp[i].posY, pickUp[i].h, pickUp[i].w);
  }
}

function drawPlayer ()
{
  ctx.clearRect(0,0,800,600);
  ctx.fillStyle = player.color;
  ctx.fillRect(player.posX, player.posY, player.w, player.h);

  ctx.font = "36px Arial";
  ctx.fillText("Score: " + score, 10, 550);
}
