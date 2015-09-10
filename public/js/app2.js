

var $item = $(".routine p.itemName");
var $next = $(".next");
var redirect = "/menu";

//========================================
// <<<<<<<<<< Routine 1 Data >>>>>>>>>>
//========================================

var response = {
   workout: [
      {name: "Let's get started", duration: 6, type: "break"},
      {name: "Do the Macarena", duration: 15, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "You are now a chicken", duration: 15, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Run from the cops, in place", duration: 15, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Head, shoulders, knees, and toes", duration: 15, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Look on the floor for the missing contact lens", duration: 15, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Skip around the room", duration: 15, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Give someone a compliment", duration: 15, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Salsa!", duration: 15, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Vogue", duration: 15, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Head Stand", duration: 15, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Prance", duration: 15, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Ballet!", duration: 15, type: "workout"},
      {name: "You Are Done! Great Job!", duration: 6, type: "final"}
   ]
}


//========================================
// <<<<<<<<<<<<<< Functions >>>>>>>>>>>>>>
//========================================

//select workouts one by one
function nextWorkout(){
    var next = response.workout.shift();
    if (next) {
        return next
    } 
    //if no more workouts, redirect to menu page
    else {
        $.post("/logCompletion", {routineUsed: location.pathname.slice(1)})
          .done(function(res){
            // send data <- hint
            res.send(res)
            // var log = {location.pathname.slice(1)}
            // console.log(log, "log");
            //window.location.pathway

          });
        window.location.href = redirect;
    }
}

//display workouts 
function doNextWorkout(){
    var current_workout = nextWorkout();
    var currentType = current_workout.type;
  
      
      if (currentType === "start") {
      console.log("shit just got real");
      $("body").css("background-color", "#9068be");
      $(".itemName").text(current_workout.name);
      countDownFrom(current_workout.duration, doNextWorkout)
    }
    else if (currentType === "workout"){
      var upNext = response.workout[0].name;
      console.log("this is a workout");
      $("body").css("background-color", "#61EF9E");
      $(".itemName").text(current_workout.name);
      $(".next").text("You Can Do This!");
      countDownFrom(current_workout.duration, doNextWorkout)
    }
    
    else if (currentType === "break") {
      var upNext = response.workout[0].name;
      console.log("this is a break");
      $("body").css("background-color", "#9068be");
      $(".itemName").text(current_workout.name);
      $(".next").text("Up Next: "+ upNext);
      countDownFrom(current_workout.duration, doNextWorkout)
    }
    else if (currentType === "final") {
      console.log("this is the end");
      $("body").css("background-color", "#9068be");
      $(".itemName").text(current_workout.name);
      countDownFrom(current_workout.duration, doNextWorkout)
    }
}

//call the function to initiate
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

// //========================================
// // <<<<<<<<<< workoutlog template >>>>>>>>>>
// //========================================
// //create 
// //workoutlogTemplate = _.template($('#workoutlog-template').html());

// //========================================
// // <<<<<<<<<< Routine 1 Data >>>>>>>>>>
// //========================================

// var response = {
//   workout: [
//       {name: "Let's get started", duration: 10, type: "break"},
//       {name: "Let's get started", duration: 10, type: "break"},
//       {name: "Jumping Jacks", duration: 30, type: "workout"},
//       {name: "Cool down", duration: 10, type: "break"},
//       {name: "Wall Sits", duration: 30, type: "workout"},
//       {name: "Cool down", duration: 10, type: "break"},
//       {name: "Push-ups", duration: 30, type: "workout"},
//       {name: "Cool down", duration: 10, type: "break"},
//       {name: "Abdominal crunches", duration: 30, type: "workout"},
//       {name: "Cool down", duration: 10, type: "break"},
//       {name: "Step-up onto a chair", duration: 30, type: "workout"},
//       {name: "Cool down", duration: 10, type: "break"},
//       {name: "Squat", duration: 30, type: "workout"},
//       {name: "Cool down", duration: 10, type: "break"},
//       {name: "Tricep dips on a chair", duration: 30, type: "workout"},
//       {name: "Cool down", duration: 10, type: "break"},
//       {name: "Plank", duration: 30, type: "workout"},
//       {name: "Cool down", duration: 10, type: "break"},
//       {name: "High knees running in place", duration: 30, type: "workout"},
//       {name: "Cool down", duration: 10, type: "break"},
//       {name: "Lunge", duration: 30, type: "workout"},
//       {name: "Cool down", duration: 10, type: "break"},
//       {name: "Push and rotations", duration: 30, type: "workout"},
//       {name: "Side-plank", duration: 30, type: "workout"},
//       {name: "Cool down", duration: 10, type: "break"},

//   ]
// }


// function nextWorkout(){
//     var next = response.workout.shift();
//     if (next) {
//         return next
//     } else {
//         //log to the database that user completed routine

//         window.location.href = redirect;
//     }
// }

// function doNextWorkout(){
//   var next = nextWorkout()
//     var current_workout = nextWorkout();
//           //console.log(current_workout.type, "current_workout type");
//     if (current_workout.type === "break"){
//       $("body").css("background-color", "#9068be");
//       $(".itemName").text(current_workout.name)
//       $(".next").text(nextWorkout.name)
//       countDownFrom(current_workout.duration, doNextWorkout)
//     }
//     else {
//       $("body").css("background-color", "#6ed3cf");
//       $(".itemName").text(current_workout.name)
//       countDownFrom(current_workout.duration, doNextWorkout)
//     }
// }

// $(function(){
//     doNextWorkout()
// })





// //========================================
// // <<<<<<<<<< countdown timer >>>>>>>>>>
// //========================================

// function countDownFrom(time, next) {
//     var myInterval = setInterval(function() {
//         if (time <= 1) {
//             clearInterval(myInterval);
//             next();
//         }
//         else {
//             time--;
//             console.log(time);
//             $(".countdown").html(time);
//            }
//         }, 1000);
// }
