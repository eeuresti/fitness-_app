//========================================
// <<<<<<<<<< Main Countdown >>>>>>>>>>>>
//========================================



$(document).ready(function() {
    var $workout = $(".workout");

    var counter = 75;
    var countDown = setInterval(function(){
      console.log(counter);
      counter--
        if (counter === 74) {
            console.log("equal to 74");
            $(".routine").append("<p class='workHead'>Let's gets started!</p>");
        }
        else if (counter === 70) {
            console.log("second workout");
            $(".routine").empty().append("<p class='workHead'>Jumping Jacks!</p>");
        }
        else if (counter === 65) {
            console.log("take a break");
            $(".routine").empty().append("<b>Take a break!</b>");
        }
        else if (counter === 0) {
            console.log("Finished!!");
            clearInterval(countDown);
          }
    }, 1000); 
    
    

});



//========================================
// <<<<<<<<<< Countdowns >>>>>>>>>>>>
//========================================

function countDown(s) {
    var counter = s;
    var countDown = setInterval(function(){
      console.log(counter);
      counter--
      if (counter === 0) {
        console.log("Finished!!");
        clearInterval(countDown);
      }
    }, 1000);  

};








