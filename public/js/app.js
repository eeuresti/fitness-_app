//Testing Refactoring

$(document).ready(function() {

    var $item = $(".routine p.itemName");
    var workouts = "Jumping Jacks";
    var timers = 10;

    function eachDisplay(workoutName, timer) {
        $item.text(workoutName);
        countDownFrom(timer);
        setTimeout(workoutName, 0000);
    }
    eachDisplay(workouts, timers);

    // var start = function(){
    //   $item.text("Let's get started!");
    //   countDownFrom(4);
    //   console.log("started");
    // };

    // var jumpingJacks = function(){
    //   $item.text("Jumping Jacks!");
    //   countDownFrom(7);
    //   console.log("started");
    // };

    // var breakTen = function(){
    //   $item.text("Let's take a break!");
    //   countDownFrom(4);
    //   console.log("started");
    // };

    // var lunges = function(){
    //   $item.text("Lunges!");
    //   countDownFrom(6);
    //   console.log("started");
    // };

    // setTimeout(start, 0000);
    // setTimeout(lunges, 4000);
    // setTimeout(breakTen, 10000);
    // setTimeout(jumpingJacks, 15000);

    





});




//========================================
// <<<<<<<<<< countdown timer >>>>>>>>>>
//========================================

function countDownFrom(time) {
    var myInterval = setInterval(function() {
        if (time === 1) {
            clearInterval(myInterval);
        }
        else {
            time--;
            console.log(time);
            $(".countdown").html(time);
           }
        }, 1000);
}
//countDownFrom(5);








