//========================================
// <<<<<<<<<<< requirements >>>>>>>>>>>>>>
//========================================
var express = require('express'),
    bodyParser = require('body-parser'),
    db = require('./models'),
    session = require('express-session'),
    path = require('path'),
    app = express();

// views path
var views = path.join(process.cwd(), "views");
var cookieParser = require("cookie-parser");



//========================================
// <<<<<<<<<<<<<< config >>>>>>>>>>>>>>>>>
//========================================

// serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

// body parser config to accept all datatypes
app.use(bodyParser.urlencoded({extended: true}))

app.use(cookieParser("Super Secret")); // parse cookie data




//=======================================
// <<<<<<<<<< create session >>>>>>>>>>>>
//========================================

//create session
app.use(
  session({
    secret: 'super-secret-private-keyyy',
    resave: false,
    saveUninitialized: true
  })
);

// extending the `req` object to help manage sessions
app.use(function (req, res, next) {
  // login a user
  req.login = function (user) {
    req.session.userId = user._id;
  };

  // find the current user
  req.currentUser = function (cb) {
    db.User.
      findOne({ _id: req.session.userId },
      function (err, user) {
        req.user = user;
        cb(null, user);
      })
  };

  // logout the current user
  req.logout = function () {
    req.session.userId = null;
    req.user = null;;
  }

  // call the next middleware in the stack
  next(); 
});



//========================================
// <<<<<<<<<<<< get routes >>>>>>>>>>>>>>>
//========================================

//home route 
app.get("/home", function (req, res) {
  res.sendFile(path.join(views, "home.html"));
});

//Sign up route
app.get("/signup", function (req, res) {
  res.sendFile(path.join(views, "signup.html"));
});

//login route 
app.get("/login", function (req, res) {
  res.sendFile(path.join(views, "login.html"));
});

//menu route 
app.get("/menu", function (req, res) {
  res.sendFile(path.join(views, "menu.html"));
});

//name route
// app.get("/name", function (req, res) {
//   db.User.
//       findOne({ _id: req.session.userId },
//       function (err, user) {
        
//         res.send(user.name);
//   });
// });



//routine1 route 
app.get("/routine1", function (req, res) {
  res.sendFile(path.join(views, "routine1.html"));
});

//routine2 route 
app.get("/routine2", function (req, res) {
  res.sendFile(path.join(views, "routine2.html"));
});

//routine3 route 
app.get("/routine3", function (req, res) {
  res.sendFile(path.join(views, "routine3.html"));
});


//========================================
// <<<<<<<<<<<< db routes >>>>>>>>>>>>>>>
//========================================

// //routine index path
// app.get("/phrase", function (req, res){
//   //console.log("get is getting /phrase");
//   // render phrases index as JSON
//   db.Phrase.find({}, function(err, phrases_list) {
//     //console.log("db.Phrase.find");
//     if (err) {
//       console.log(err);
//       return res.sendStatus(400);
//     }
//     //console.log(phrases);
//     res.send(phrases_list);
//   })
// });



// app.post("/phrase", function (req, res){
//   //console.log("posting is working!");
//   var newPhrase = req.body;
//   //console.log(newPhrase);
//   // create new food to DB (array, really...)
//   db.Phrase.create(newPhrase, function(err, phrases) {
//     if (err) {
//       console.log(err);
//       return res.sendStatus(400);
//     }
//     // send a response with newly created object
//     res.send(phrases);
//   });
// });


//========================================
// <<<<<<<<<<<< API endpoints >>>>>>>>>>>>
//========================================

// user submits the sign-up form
app.post(["/users", "/signup"], function signup(req, res) {
	console.log("Looks like you're trying to signup!");
	
	// grab the user from the params
	var user = req.body.user;
	
	// pull out their email, name & password
	var name = user.name;
	var email = user.email;
	var password = user.password;
	
	// create the new user
	db.User.createSecure(name, email, password, function() {
	//res.send(email + " is registered!\n");
  res.cookie("fit", user._id);
  res.redirect("/menu");
	});
});



// user submits the login form
app.post(["/sessions", "/login"], function login(req, res) {
  var user = req.body.user;
  var email = user.email;
  var password = user.password;
  db.User.authenticate(email, password, function (err, user) {
  	if (err) {
  		console.log(err, "error");
  		res.redirect("/login"); 
  	}
  	else {
	    // login the user
	    req.login(user);
      //assign cookie
      res.cookie("fit", user._id, { signed: true });
	    // redirect to user profile
	    res.redirect("/menu"); 
	}
  });
});

//last workout completed and when
app.post('/logCompletion', function logCompleteToDatabase (req, res) {
  console.log("Current User: ", req.session.userId);
  db.User.findOne({_id: req.session.userId}, function(err, user) {
    if(err) {console.log(err);}
    console.log(user, "this is the user");
    var some = req.body.data;
    user.completions.push(some);

    user.save(function(err, success) {
       if (err) {return console.log(err);}
       console.log("Successfully added timestamp for " + user.email);
    })
  })
  res.redirect('/menu');
})


//getting workout info

//routine index path
app.get("/workouts", function (req, res){
  console.log("get is getting /workouts");
  // render phrases index as JSON
  db.User.find({completions: completions }, function(err, log) {
    //console.log("db.Phrase.find");
    if (err) {
      console.log(err);
      return res.sendStatus(400);
    }
    //console.log(phrases);
    res.send(log);
  })
});


var listener = app.listen(process.env.PORT || 3000);