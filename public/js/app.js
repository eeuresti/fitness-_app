//========================================
// <<<<<<<<<< Main Countdown >>>>>>>>>>>>
//========================================



$(document).ready(function() {

    var counter = 480; //total length of routine in seconds
    var secondsLeft = 0;
    var countDown = setInterval(function(){
      
      console.log(counter);
      counter--; //decrease the counter each second
      secondsLeft--; //decrease time left in current excersice 

        if (counter === 479) {
            $(".routine").append("<p class='itemName'>Let's gets started!</p>", "<div>Workout starts in <span id='time'>10</span> seconds!</div>", tenSeconds());
        }
        else if (counter === 470) {
            $(".routine").empty().append("<p class='itemName'>Jumping Jacks!</p>");
        }
        else if (counter === 440) {
            $(".routine").empty().append("<p class='itemName'>Take a break!</p>");
        }
        else if (counter === 430) {
            $(".routine").empty().append("<p class='itemName'>Lounges!</p>");
        }
        else if (counter === 400) {
            $(".routine").empty().append("<p class='itemName'>Take a Break!</p>");
        }
        else if (counter === 390) {
            $(".routine").empty().append("<p class='itemName'>Sit Ups!</p>");
        }
        else if (counter === 360) {
            $(".routine").empty().append("<p class='itemName'>Take break!</p>");
        }
        else if (counter === 350) {
            $(".routine").empty().append("<p class='itemName'>Plank!</p>");
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

// function countDown(s) {
//     var counter = s;
//     var countDown = setInterval(function(){
//       console.log(counter);
//       counter--
//       if (counter === 0) {
//         console.log("Finished!!");
//         clearInterval(countDown);
//       }
//     }, 1000);  

// };




// //test countdown

// function startTimer(duration, display) {
//     var timer = duration, seconds;
//     setInterval(function () {
//         //minutes = parseInt(timer / 60, 10)
//         seconds = parseInt(timer % 60, 10);

//         //minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//         display.textContent = seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// };


// function timing(s) {
//     var seconds = s,
//     display = document.querySelector('#timer');
//     startTimer(seconds, display);
// } ;







//========================================
// <<<<<<<<<< Start Countdown >>>>>>>>>>>>
//========================================

function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        //minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        //minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;
        console.log(seconds, "text content seconds");

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function tenSeconds() {
    var seconds = 10;
    display = document.querySelector('#time');
    startTimer(seconds, display);
};




