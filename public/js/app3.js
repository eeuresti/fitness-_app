

var $item = $(".routine p.itemName"); //shortcut to html
var $next = $(".next"); //shortcut to html
var redirect = "/menu";  //shortcut to the next page to be displayed upon routine completion


//========================================
// <<<<<<<<<< Routine 1 Data >>>>>>>>>>
//========================================

var response = {
   workout: [
      {name: "Let's get started", duration: 6, type: "break"},
      {name: "Push-ups & Clap", duration: 60, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Up and Down planks", duration: 60, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Mountain Climbers", duration: 60, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Squats & Side Kicks", duration: 60, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Side Lunges", duration: 60, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Abdominal Crunches", duration: 60, type: "workout"},
      {name: "Cool down", duration: 10, type: "break"},
      {name: "Cross-body Crunches", duration: 60, type: "workout"},
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
    //if no more workouts, count log completions and redirect to menu page
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
  
      //if the workout type is "start", do this
      if (currentType === "start") {
      $("body").css("background-color", "#9068be");
      $(".itemName").text(current_workout.name);
      countDownFrom(current_workout.duration, doNextWorkout)
    }
    //if the workout type is workout, then do this
    else if (currentType === "workout"){
      var upNext = response.workout[0].name;
      $("body").css("background-color", "#61EF9E");
      $(".itemName").text(current_workout.name);
      $(".next").text("You Can Do This!");
      countDownFrom(current_workout.duration, doNextWorkout)
    }
    
    //if the workout type is break, do this
    else if (currentType === "break") {
      var upNext = response.workout[0].name;
      console.log("this is a break");
      $("body").css("background-color", "#9068be");
      $(".itemName").text(current_workout.name);
      $(".next").text("Up Next: "+ upNext);
      countDownFrom(current_workout.duration, doNextWorkout)
    }

    //if the workout type is final, then do this
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




