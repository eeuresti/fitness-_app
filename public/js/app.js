//========================================
// <<<<<<<<<< Routine Countdown >>>>>>>>>>
//========================================



$(document).ready(function() {

    var counter = 480; //total length of routine in seconds
    var secondsLeft = 0;
    var countDown = setInterval(function(){
      
      counter--; //decrease the counter each second
      secondsLeft--; //decrease time left in current excersice 
      var workSession = 30;
      var breakSession = 10;
      var redirect = "/menu";

      $(".countdown").html("Just " + secondsLeft + " seconds to go!");

        if (counter === 479) {
            $(".routine").append("<p class='itemName'>Let's gets started!</p>");
            secondsLeft = breakSession;
        }
        else if (counter === 470) {
            $(".routine").empty().append("<p class='itemName'>Jumping Jacks!</p>");
            secondsLeft = workSession;
        }
        else if (counter === 440) {
            $(".routine").empty().append("<p class='itemName'>Take a break!</p>");
            secondsLeft = breakSession;
        }
        else if (counter === 430) {
            $(".routine").empty().append("<p class='itemName'>Lounges!</p>");
            secondsLeft = workSession;
        }
        else if (counter === 400) {
            $(".routine").empty().append("<p class='itemName'>Take a Break!</p>");
            secondsLeft = breakSession;
        }
        else if (counter === 390) {
            $(".routine").empty().append("<p class='itemName'>Sit Ups!</p>");
            secondsLeft = workSession;
        }
        else if (counter === 360) {
            $(".routine").empty().append("<p class='itemName'>Take break!</p>");
            secondsLeft = breakSession;
        }
        else if (counter === 350) {
            $(".routine").empty().append("<p class='itemName'>Plank!</p>");
            secondsLeft = workSession;
        }
         else if (counter === 320) {
            $(".routine").empty().append("<p class='itemName'>Take break!</p>");
            secondsLeft = breakSession;
        }
        else if (counter === 310) {
            $(".routine").empty().append("<p class='itemName'>Plank!</p>");
            secondsLeft = workSession;
        }
        else if (counter === 280) {
            $(".routine").empty().append("<p class='itemName'>Take break!</p>");
            secondsLeft = breakSession;
        }
        else if (counter === 270) {
            $(".routine").empty().append("<p class='itemName'>Plank!</p>");
            secondsLeft = workSession;
        }
        else if (counter === 220) {
            $(".routine").empty().append("<p class='itemName'>Take break!</p>");
            secondsLeft = breakSession;
        }
        else if (counter === 210) {
            $(".routine").empty().append("<p class='itemName'>Plank!</p>");
            secondsLeft = workSession;
        }
        else if (counter === 170) {
            $(".routine").empty().append("<p class='itemName'>Take break!</p>");
            secondsLeft = breakSession;
        }
        else if (counter === 160) {
            $(".routine").empty().append("<p class='itemName'>Plank!</p>");
            secondsLeft = workSession;
        }
        else if (counter === 130) {
            $(".routine").empty().append("<p class='itemName'>Take break!</p>");
            secondsLeft = breakSession;
        }
        else if (counter === 120) {
            $(".routine").empty().append("<p class='itemName'>Plank!</p>");
            secondsLeft = workSession;
        }
        else if (counter === 90) {
            $(".routine").empty().append("<p class='itemName'>Take break!</p>");
            secondsLeft = breakSession;
        }
        else if (counter === 80) {
            $(".routine").empty().append("<p class='itemName'>Plank!</p>");
            secondsLeft = workSession;
        }
        else if (counter === 50) {
            $(".routine").empty().append("<p class='itemName'>Take break!</p>");
            secondsLeft = breakSession;
        }
        else if (counter === 40) {
            $(".routine").empty().append("<p class='itemName'>Plank!</p>");
            secondsLeft = workSession;
        }
        else if (counter === 10) {
            $(".routine").empty().append("<p class='itemName'>You are Done! Great Workout!!</p>");
            secondsLeft = breakSession;
        }
        else if (counter === 5) {
            console.log("Finished!!");
          }
          else if (counter === 0) {
            window.location.href = redirect;
          }
    }, 1000); 
    
    

});









