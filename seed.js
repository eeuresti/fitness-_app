var db = require("./models");

// TODO:
// create a user
// once inside a user's callback
// 		create a routine
// 		push that routine into user's routines array


// var 	routine1 = [
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

//   ];



// 	db.User.findOne({name: "Justin"}, function (err, user) {
// 		// if user doesn't exist, say it doesn't exist and leave
// 		if(err) {console.log(err); process.exit(0);}

// 		// creating a new Routine
// 		var newRoutine = {};
// 		newRoutine.name = "Leg Day";
// 		newRoutine.workouts = [];

// 	 	routine1.forEach(function(workout){
// 	 		newRoutine.workouts.push(workout);
// 			newRoutine.workouts.push("Running in place", 10, "Workout");
// 		});
// 		console.log(newRoutine);
// 		user.routines.push(newRoutine);
// 		//console.log(user.routines);
// 		// save the user now that we added the newRoutine to routines
// 		//console.log(user.routines[0].length);
// 		// user.save(function(err, success) {
// 		// 	if(err) {return console.log(err);}
// 		// 	console.log("Routine added Successfully");
// 		// 	console.log(user);
// 		// });
// 	});




// // create a user named justin
// var Justin = {};
// Justin.name="Justin";
// Justin.email="justing@email.com";
// Justin.passwordDigest="123";

	// db.User.create(Justin, function(err, success) {
	// 	if(err) {return console.log(err);}
	// 	console.log(success.name + " is registered!\n");
	// 	process.exit(0);
	// });


// // adding a new routine to a current user
// db.User.findOne({name: "Justin"}, function (err, user) {
// 	// if user doesn't exist, say it doesn't exist and leave
// 	if(err) {console.log(err); process.exit(0);}
// 	// creating a new Routine
// 	var newRoutine = {};
// 	newRoutine.name = "Leg Day";
// 	newRoutine.workouts = [];

//   	// push into routines a workout object
// 	newRoutine.workouts.push(workout);
// 	// push into user's routines the newRoutine
// 	user.routines.push(newRoutine);
// 	// save the user now that we added the newRoutine to routines
// 	user.save(function(err, success) {
// 		if(err) {return console.log(err);}
// 		console.log("Routine added Successfully");
// 	});
// });

// db.User.findOne({name: 'Justin'}, function(err, users) {
// 	console.log(users.routines);
// });

// db.User.remove({name: 'Justin'}, function(err, user) {
// 	console.log("Removed " + user.name);
// })

// db.Workout.remove({},function(err, deleted){
// 	if(err) {
// 		console.log('ERROR: ', err);
// 	}
// 	console.log('DELETE: ', deleted);
// });

// workout.forEach(function (workout) {
//   db.Workout.create(workout, function(err, workout){
//     if (err) { return console.log(err); };
//     console.log("---> One workout added")
//     console.log(workout);
//   });

// })
db.User.find({}, function(err, success){
      console.log(success);
});

db.User.remove({}, function(err, success){
	console.log("Successfully removed everything.");
});
// process.exit();
