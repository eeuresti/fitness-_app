var REPL = require("repl");
var db = require("./models");

var repl = REPL.start("> ");
repl.context.db = db;
repl.context.findAllWorkouts = findAllWorkouts;


repl.on("exit", function () {
 console.log("Goodbye");
 process.exit();
});



function findAllWorkouts() {
db.Workout.find({}, function(err, workouts){
	console.log(workouts);
	});
}