//Testing Refactoring

var $item = $(".routine p.itemName");
var redirect = "/menu";

var response = {
  workout: [
      {name: "Let's get started", duration: 10, type: "break"},
      {name: "Jumping Jacks", duration: 30, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Wall Sits", duration: 30, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Push-ups", duration: 30, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Abdominal crunches", duration: 30, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Step-up onto a chair", duration: 30, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Squat", duration: 30, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Tricep dips on a chair", duration: 30, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Plank", duration: 30, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "High knees running in place", duration: 30, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Lunge", duration: 30, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Push and rotations", duration: 30, type: "workout"},
      {name: "Side-plank", duration: 30, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},

  ]
}


function nextWorkout(){
    var next = response.workout.shift();
    if (next) {
        return next
    } else {
        window.location.href = redirect;
    }
}

function doNextWorkout(){
  var next = nextWorkout()
    var current_workout = nextWorkout();
    if (current_workout.type === "break"){
      $("body").css("background-color", "#9068be");
      $(".itemName").text(current_workout.name)
      $(".next").text(nextWorkout.name)
      countDownFrom(current_workout.duration, doNextWorkout)
    }
    else {
      $("body").css("background-color", "#6ed3cf");
      $(".itemName").text(current_workout.name)
      countDownFrom(current_workout.duration, doNextWorkout)
    }
}

$(function(){

    doNextWorkout()

})



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
