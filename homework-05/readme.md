## **Week 5** ##

Working with fixed arrays can be challenging. My initial solution to this problem was once again a P5 solution where I just jumble the images all over the screen. This solution completely dodges the challenge of this week: actually working with the array. It's easy enough to give the images random locations, and replacing the source path is easy as well. The real challenge is accessing a random index of an array, checking if there is a value or not, and pushing a value in if there isn't one (without repeating said value.) The while loop I came up with feels 'wonky' but it works I guess.


Arrays have been difficult for me. I am to understand the solution I came up with is deplorable (and so is splicing) and should be avoided because of the way it handles the data. I decided to leave both of the failed attempts here. Why didn't they work?


---
    while(imagesRandom.length < 10){
      //Select a random index
    var i = Math.floor(Math.random()*images.length);
    //If the index selected is null/undefined, 'splice' in images[k]. Increment k.
    if(imagesRandom[i] == null) {
      //At index i, delete 0 items, insert images[k]
      imagesRandom.splice(i,0,images[k]);
      k++;
    }
    console.log(imagesRandom.join());
    }

---

    /* (ImagesRandom[] has been instantiated with 10 positions)

    for(var j = 0; j <= imagesRandom.length; j++){
      //Select a random index
      var i = Math.floor(Math.random()*images.length);

    //If the index selected is still null/undefined, delete null value and 'splice' in images[k]. Increment k. Otherwise, run again.
    if(imagesRandom[i] == undefined) {
      imagesRandom.splice(i,1,images[k]);
      k++;
      j++;
    }
    else {
      j--;
    }
    console.log(imagesRandom.join());
    }
