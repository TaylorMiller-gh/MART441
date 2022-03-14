var orbs = new Array();
var theWisestOfWords = new Array();

class orb {

  constructor(path) {
    this.path = path;

  }

  toString() {
    let str;
    str = '${this.path}';
    return str;
  }
}

function setArray () {

  var orb1 = new orb('./images/img0.jpg');
  orbs.push(orb1);
  var orb2 = new orb('./images/img1.jpg');
  orbs.push(orb2);
  var orb3 = new orb('./images/img2.jpg');
  orbs.push(orb3);
  var orb4 = new orb('./images/img3.jpg');
  orbs.push(orb4);
  var orb5 = new orb('./images/img4.jpeg');
  orbs.push(orb5);

  var wisdom1 = 'Time Flies like an arrow; fruit flies like a banana.';
  theWisestOfWords.push(wisdom1);
  var wisdom2 = 'Noses run, yet feet smell.';
  theWisestOfWords.push(wisdom2);
  var wisdom3 = 'No matter how much you push the envelope, it is still stationery';
  theWisestOfWords.push(wisdom3);
  var wisdom4 = 'All generalizations are false.';
  theWisestOfWords.push(wisdom4);
  var wisdom5 = 'A koan: When a man falls in the woods, do the trees clap?';
  theWisestOfWords.push(wisdom5);

$(function() {
  $("#thePhrase").hide();
  $("#thePhrase").text("From the fires of knowledge, a new revelation:");
});

//console.log(theWisestOfWords.join());
//console.log(orbs.join());
}

$(document).ready(function(){
  $("#ponder").click(function(){

    //console.log('click');

    var random1 = Math.floor(Math.random()*orbs.length);
    var random2 = Math.floor(Math.random()*orbs.length);

    $("#img").fadeOut("slow");
    $("#revelation").fadeOut();

    $("#thePhrase").fadeIn("slow").delay(2200).fadeOut("slow");

    $("#img").hide().attr("src", orbs[random1].path);
    $("#revelation").hide().text(theWisestOfWords[random2]);

    $("#img").delay(2200).fadeIn();
    $("#revelation").delay(2200).fadeIn();

    $("#squareOfMotion").animate({left:300}).animate({top:500}).animate({left:40}).animate({top:600});

  });

});
