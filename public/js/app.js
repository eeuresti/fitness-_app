//========================================
// <<<<<<<<<< Routine Countdown >>>>>>>>>>
//========================================

$(document).ready(function() {

    var $item = $(".routine p.itemName");

    var counter = 477; //total length of routine in seconds
    var secondsLeft; //countdown for each workout & break
    
    var countDown = setInterval(function(){
      
      counter--; //decrease the counter each second
      secondsLeft--; //decrease time left in current excersice 
      
      var workSession = 31; //how long each workout lasts (in seconds)
      var breakSession = 11; //how long each breakout lasts (in seconds)
      var shortSession = 6; //how long start and finish screens lasts (in seconds)
      var redirect = "/menu"; //where to be redirected once workout ends

      $(".countdown").html(secondsLeft);

        if (counter === 476) {
            $item.text("Let's gets started!");
            secondsLeft = shortSession;
        }
        else if (counter === 470) {
            $item.text("Jumping Jacks!");
            secondsLeft = workSession;
        }
        else if (counter === 440) {
            $item.text("Take a break!");
            secondsLeft = breakSession;
            $("body").css("background-color", "#9068be");
        }
        else if (counter === 430) {
            $item.text("Lounges!");
            secondsLeft = workSession;
            $("body").css("background-color", "#6ed3cf");
        }
        else if (counter === 400) {
            $item.text("Take a Break!");
            secondsLeft = breakSession;
            $("body").css("background-color", "#9068be");
        }
        else if (counter === 390) {
            $item.text("Sit Ups!");
            secondsLeft = workSession;
            $("body").css("background-color", "#6ed3cf");
        }
        else if (counter === 360) {
            $item.text("Take break!");
            secondsLeft = breakSession;
            $("body").css("background-color", "#9068be");
        }
        else if (counter === 350) {
            $item.text("Plank!");
            secondsLeft = workSession;
            $("body").css("background-color", "#6ed3cf");
        }
         else if (counter === 320) {
            $item.text("Take break!");
            secondsLeft = breakSession;
            $("body").css("background-color", "#9068be");
        }
        else if (counter === 310) {
            $item.text("Plank!");
            secondsLeft = workSession;
            $("body").css("background-color", "#6ed3cf");
        }
        else if (counter === 280) {
            $item.text("Take break!");
            secondsLeft = breakSession;
            $("body").css("background-color", "#9068be");
        }
        else if (counter === 270) {
            $item.text("Plank!");
            secondsLeft = workSession;
            $("body").css("background-color", "#6ed3cf");
        }
        else if (counter === 220) {
            $item.text("Take break!");
            secondsLeft = breakSession;
            $("body").css("background-color", "#9068be");
        }
        else if (counter === 210) {
            $item.text("Plank!");
            secondsLeft = workSession;
            $("body").css("background-color", "#6ed3cf");
        }
        else if (counter === 170) {
            $item.text("Take break!");
            secondsLeft = breakSession;
            $("body").css("background-color", "#9068be");
        }
        else if (counter === 160) {
            $item.text("Plank!");
            secondsLeft = workSession;
            $("body").css("background-color", "#6ed3cf");
        }
        else if (counter === 130) {
            $item.text("Take break!");
            secondsLeft = breakSession;
            $("body").css("background-color", "#9068be");
        }
        else if (counter === 120) {
            $item.text("Plank!");
            secondsLeft = workSession;
            $("body").css("background-color", "#6ed3cf");
        }
        else if (counter === 90) {
            $item.text("Take break!");
            secondsLeft = breakSession;
            $("body").css("background-color", "#9068be");
        }
        else if (counter === 80) {
            $item.text("Plank!");
            secondsLeft = workSession;
            $("body").css("background-color", "#6ed3cf");
        }
        else if (counter === 50) {
            $item.text("Take break!");
            secondsLeft = breakSession;
            $("body").css("background-color", "#9068be");
        }
        else if (counter === 40) {
            $item.text("Plank!");
            secondsLeft = workSession;
            $("body").css("background-color", "#6ed3cf");
        }
        else if (counter === 10) {
            $item.text("You are Done! Great Workout!!");
            $("body").css("background-color", "#9068be");
        }
          else if (counter === 0) {
            window.location.href = redirect;
          }
    }, 1000); 
    
});









