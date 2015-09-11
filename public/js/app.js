

var $item = $(".routine p.itemName"); //shortcut to html
var $next = $(".next"); //shortcut to html
var redirect = "/menu";  //shortcut to the next page to be displayed upon routine completion

//========================================
// <<<<<<<<<< Routine 1 Data >>>>>>>>>>
//========================================

var response = {
   workout: [
      {name: "Let's get started", duration: 6, type: "break", song: "https://archive.org/embed/start_201509&autoplay=1"},
      {name: "Jumping Jacks", duration: 30, type: "workout", song: "https://archive.org/embed/BritneySpearsWorkBChDANKUSARadioMix&autoplay=1"},
      {name: "Cool down", duration: 10, type: "break", song: "https://archive.org/embed/wallsits&autoplay=1"},
      {name: "Wall Sits", duration: 30, type: "workout", song:"https://archive.org/embed/TheWeekndCantFeelMyFacemp3cut.net&autoplay=1"},
      {name: "Cool down", duration: 10, type: "break", song: "https://archive.org/embed/pushups&autoplay=1"},
      {name: "Push-ups", duration: 30, type: "workout", song: "https://archive.org/embed/MajorLazerWatchOutForThisBumayeSongtextLyricsmp3cut.net_20150911&autoplay=1"},
      {name: "Cool down", duration: 10, type: "break", song: "https://archive.org/embed/absominalcrunches&autoplay=1"},
      {name: "Abdominal Crunches", duration: 30, type: "workout", song: "https://archive.org/embed/IFINKUFREEKYByDIEANTWOORDOfficialmp3cut.net1&autoplay=1"},
      {name: "Cool down", duration: 10, type: "break", song: "https://archive.org/embed/stepups&autoplay=1"},
      {name: "Step-up onto a chair", duration: 30, type: "workout", song: "https://archive.org/embed/TechnotronicPumpUpTheJammp3cut.net1&autoplay=1"},
      {name: "Cool down", duration: 10, type: "break", song: "https://archive.org/embed/squats_201509&autoplay=1" },
      {name: "Squat", duration: 30, type: "workout", song:"https://archive.org/embed/MajorLazerBubbleButtfeat.BrunoMars2ChainzTygaMysticDirectedByEricWareheimmp3cut.net&autoplay=1"},
      {name: "Cool down", duration: 10, type: "break", song:"https://archive.org/embed/tricepdips&autoplay=1"},
      {name: "Tricep dips on a chair", duration: 30, type: "workout", song: "https://archive.org/embed/AMAZINGPitbullFunOfficialAudioFt.ChrisBrownmp3cut.net&autoplay=1"},
      {name: "Cool down", duration: 10, type: "break", song: "https://archive.org/embed/plank_201509&autoplay=1"},
      {name: "Plank", duration: 30, type: "workout", song: "https://archive.org/embed/DefLeppardPourSomeSugarOnMemp3cut.net&autoplay=1"},
      {name: "Cool down", duration: 10, type: "break", song: "https://archive.org/embed/runninginplace_201509&autoplay=1"},
      {name: "High knees running in place", duration: 30, type: "workout", song: "https://archive.org/embed/DJSnakeLilJonTurnDownForWhat1mp3cut.net&autoplay=1"},
      {name: "Cool down", duration: 10, type: "break", song: "https://archive.org/embed/lunges&autoplay=1"},
      {name: "Lunges", duration: 30, type: "workout", song: "https://archive.org/embed/AGAINPitbullFireballAudioFt.JohnRyanmp3cut.net&autoplay=1"},
      {name: "Cool down", duration: 10, type: "break", song: "https://archive.org/embed/pushupandrotations&autoplay=1"},
      {name: "Push and rotations", duration: 30, type: "workout", song: "https://archive.org/embed/SaltNPepaPushItmp3cut.net1&autoplay=1"},
      {name: "Cool down", duration: 10, type: "break", song: "https://archive.org/embed/sideplank&autoplay=1" },
      {name: "Side-plank", duration: 30, type: "workout", song: "https://archive.org/embed/wtfistis&autoplay=1" },
      {name: "You Are Done! Great Job!", duration: 6, type: "final", song: "https://archive.org/embed/mel_Done&autoplay=1"}
   ]
}


//========================================
// <<<<<<<<<<<<<< Functions >>>>>>>>>>>>>>
//========================================


//music 



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
    var currentSong = current_workout.song;
  
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
      $("#music").attr('src', currentSong);
      countDownFrom(current_workout.duration, doNextWorkout)
    }
    
    //if the workout type is break, do this
    else if (currentType === "break") {
      var upNext = response.workout[0].name;
      console.log("this is a break");
      $("body").css("background-color", "#9068be");
      $(".itemName").text(current_workout.name);
      $(".next").text("Up Next: "+ upNext);
      $("#music").attr('src', currentSong);
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




