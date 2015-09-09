//Testing Refactoring

var response = {
   workout: [
      {name: "Let's get started", duration: 5, type: "break"},
      {name: "Jump", duration: 30, type: "workout"},
      {name: "Cool down", duration: 5, type: "break"},
      {name: "Prance", duration: 30, type: "workout"}
   ]
}


function nextWorkout(){
    var next = response.workout.shift();
    if (next) {
        return next
    } else {
        alert("No more workouts!")
    }
}

function doNextWorkout(){
    var current_workout = nextWorkout();
    if (current_workout){
        $("body").prepend(current_workout.name)
        countDownFrom(current_workout.duration, doNextWorkout)
    }
}

$(function(){

    doNextWorkout()

})


// $(document).ready(function() {

//     var $item = $(".routine p.itemName");
//     var workouts = ["Jumping Jacks", "Lunges", "Sit ups", "Macarena"];
//     var workTime = 30;
//     var breakTime = 10;
//     countDownFrom(5);
//     $item.text("Start");


// var i = 0;
// var redirect = "/menu";

// if (i < workouts.length - 1){

//     setTimeout(function() {
//         var interval = 40000;

//                 setInterval(
//                     function eachDisplay(workoutName, timer) {
//                         countDownFrom(30);
//                         $item.text(workouts[i]);
                        
//                         setTimeout(function(){      //insert Break
//                             $item.text("Break") ;
//                             countDownFrom(breakTime);
//                         }, 30000);
                        
//                         i++;
//                         console.log(i, "first i");
//                         clearInterval(interval);
//                     }, interval);
//                 eachDisplay(workouts[0], interval);

//     },5000);
//      function eachDisplay(workoutName, timer) {
//                         countDownFrom(workTime);
//                         $item.text(workouts[i]);
//                         setTimeout(function(){      //insert Break
//                             $item.text("Break") ;
//                             countDownFrom(breakTime);
//                         }, 30000);
//                         i++;
//                         console.log(i, "second i");
//                         console.log("next");
//                     }
//                 }
//                 else {
//                     window.location.href = redirect;
//                 }







//     // var start = function(){
//     //   $item.text("Let's get started!");
//     //   countDownFrom(4);
//     //   console.log("started");
//     // };

//     // var jumpingJacks = function(){
//     //   $item.text("Jumping Jacks!");
//     //   countDownFrom(7);
//     //   console.log("started");
//     // };

//     // var breakTen = function(){
//     //   $item.text("Let's take a break!");
//     //   countDownFrom(4);
//     //   console.log("started");
//     // };

//     // var lunges = function(){
//     //   $item.text("Lunges!");
//     //   countDownFrom(6);
//     //   console.log("started");
//     // };


//     // function eachWork(set, num) {
//     //     $item.text(set);
//     //     countDownFrom(num);

//     // }


//     // workouts.forEach(function(){
//     //     var i = 0

//     //     $item.text(workouts[i]);
//     //     countDownFrom(9);
//     //     console.log(workouts, "workouts");
//     //     i++;
//     // });


//     //setTimeout(start, 0000);

//     // setTimeout(start, 0000);
//     // setTimeout(lunges, 4000);
//     // setTimeout(breakTen, 10000);
//     // setTimeout(jumpingJacks, 15000);

    





// });




//========================================
// <<<<<<<<<< countdown timer >>>>>>>>>>
//========================================

function countDownFrom(time, next) {
    var myInterval = setInterval(function() {
        if (time <= 1) {
            clearInterval(myInterval);
            next();
        }
        else {
            time--;
            console.log(time);
            $(".countdown").html(time);
           }
        }, 1000);
}
//countDownFrom(5);








