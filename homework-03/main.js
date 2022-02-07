function mainFunct(choice) {
  var option1 = document.getElementById("option1").innerHTML;
  var option2 = document.getElementById("option2").innerHTML;

  if (choice == 1 && option1 == "Okay") {
    document.getElementById("dialogue").innerHTML = "Every Nord loves a coffee, but maybe there's something in the fridge.";
    document.getElementById("option1").innerHTML = "Roasted bean water";
    document.getElementById("option2").innerHTML = "Fridge";
  }  else if (choice == 2 && option2 == "Rather not") {
    document.getElementById("dialogue").innerHTML = "Every Nord in the kitchen NEEDS a Beverage, and Sovngarde awaits.";
    document.getElementById("option1").innerHTML = "Okay";
    document.getElementById("option2").innerHTML = "Sovngarde has waited long enough.";
  }
  else if (choice == 1 && option1 == "Roasted bean water") {
    document.getElementById("dialogue").innerHTML = "It's a Hammerfell blend. But it needs something...";
    document.getElementById("option1").innerHTML = "Jug of Milk";
    document.getElementById("option2").innerHTML = "Moon Sugar";
  }  else if (choice == 2 && option2 == "Sovngarde has waited long enough.") {
    document.getElementById("dialogue").innerHTML = "Well... I'll have a coffee then...";
    document.getElementById("option1").innerHTML = "Restart";
    document.getElementById("option2").innerHTML = "Restart";
  }
  else if (choice == 1 && option1 == "Restart") {
    document.getElementById("dialogue").innerHTML = "Hey you! You're finally awake. You tried to cross the hallway, right? Walked right into the kitchen, same as us, and that thief over there. Let's have a morning beverage.";
    document.getElementById("option1").innerHTML = "Okay";
    document.getElementById("option2").innerHTML = "Rather not";
  }  else if (choice == 2 && option2 == "Restart") {
    document.getElementById("dialogue").innerHTML = "Hey you! You're finally awake. You tried to cross the hallway, right? Walked right into the kitchen, same as us, and that thief over there. Let's have a morning beverage.";
    document.getElementById("option1").innerHTML = "Okay";
    document.getElementById("option2").innerHTML = "Rather not";
  }
  else if (choice == 2 && option2 == "Moon Sugar") {
    document.getElementById("dialogue").innerHTML = "That's right! Darn Imperials have inflated the prices! We should protest - Sovngarde awaits!";
    document.getElementById("option1").innerHTML = "Jug of Milk";
    document.getElementById("option2").innerHTML = "Sovngarde has waited long enough.";
  }  else if (choice == 1 && option1 == "Jug of Milk") {
    document.getElementById("dialogue").innerHTML = "Surely not the whole jug! You know, I used to drink Jug of Milk like you once. Then I took an arrow to the knee and needed a stronger blend.";
    document.getElementById("option1").innerHTML = "Restart";
    document.getElementById("option2").innerHTML = "Restart";
  }
  else if (choice == 2 && option2 == "Fridge") {
    document.getElementById("dialogue").innerHTML = "Alright, let's see. Some people call this junk. Me? I call it treasure.";
    document.getElementById("option1").innerHTML = "Jug of Milk";
    document.getElementById("option2").innerHTML = "Cranberry-pomegranate";
  }  else if (choice == 2 && option2 == "Cranberry-pomegranate") {
    document.getElementById("dialogue").innerHTML = "The best drink in all the land! If only I still had my sweetroll to go with it...";
    document.getElementById("option1").innerHTML = "Restart";
    document.getElementById("option2").innerHTML = "Restart";
  }
}
