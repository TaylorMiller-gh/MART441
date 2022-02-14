var health = 3;

function choice(){
  var decision = document.getElementById("choice").value;
  var prompt = document.getElementById("prompt");
  var story = document.getElementById("story");

  if (health > 0) {
    switch(decision) {
      case 'Dodge':
          story.innerHTML = "Of course! This guy is an absolute Unit! You've dodged him. Now what?";
          prompt.innerHTML = "'Dodge Again' or 'Attack'";
          document.getElementById("choice").value = "";
          document.getElementById("image").src = "./images/dodge1.png";
        break;
        case 'Attack':
          story.innerHTML = "You thought you saw an opening, but no. That's fine; no problem. Now what?";
          prompt.innerHTML = "'Dodge' or 'Estus'";
          document.getElementById("choice").value = "";
          document.getElementById("image").src = "./images/attack.png";
          health--;
        break;
        case 'Dodge Again':
          story.innerHTML = "Good choice! You've easily missed the edge of his blade at the last frame. Next?";
          prompt.innerHTML = "'For sure Dodge' or 'Attack'";
          document.getElementById("choice").value = "";
          document.getElementById("image").src = "./images/dodge2.png";
        break;
        case 'Estus':
          story.innerHTML = "He does have a powerful hit. While attempting to drink he hits you again. What will you do?";
          prompt.innerHTML = "'Dodge' or 'Run'";
          document.getElementById("choice").value = "";
          document.getElementById("image").src = "./images/estus.png";
          health--;
        break;
        case 'For sure Dodge':
          story.innerHTML = "Absolutely. Looks like you've got an opening!";
          prompt.innerHTML = "'Backstab' or 'Dodge'";
          document.getElementById("choice").value = "";
          document.getElementById("image").src = "./images/dodge3.png";
        break;
        case 'Run':
          story.innerHTML = "You attempt to run, but this man is very fast! Why is he so fast - surely that armor is heavy!";
          prompt.innerHTML = "'Dodge' or 'Estus'";
          document.getElementById("choice").value = "";
          document.getElementById("image").src = "./images/run.png";
          health--;
        break;
        case 'Backstab':
          story.innerHTML = "You land an honorable blow! Success?";
          prompt.innerHTML = "Type 'Restart' to play again.";
          document.getElementById("choice").value = "";
          document.getElementById("image").src = "./images/success.png";
        break;
        case 'Restart':
          story.innerHTML = "You have risen, Unkindled One, to meet the first boss. Shouldn't be too difficult. What will you do?";
          prompt.innerHTML = "Type 'Dodge' or 'Attack'";
          document.getElementById("choice").value = "";
          document.getElementById("image").src = "./images/start.png";
          health = 3;
          success = false;
        break;
        default:
          story.innerHTML = "Enter a Valid Choice. (Answers must be typed as suggested without the ' ' marks.)";
        break;
      }
    } else {
      document.getElementById("image").src = "./images/died.jpg";
      story.innerHTML = "What kind of first boss was this? Who does this?"
      prompt.innerHTML = "Type 'Restart' to play again."
      health = 3;
      }
}
