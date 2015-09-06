var REPL= require("repl");
var db = require('./models');


db.User.find({}, function(err, user){
	if (err) {
		console.log(err, "error!");
	}
	else {
		console.log(user);
	}
});



// Book.remove({ title: "The Giver" }, function(err, book) {
//     if (err) { return console.log(err) };

//     console.log("removal of " + book.title + " successful.")
// });

