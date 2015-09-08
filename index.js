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


//========================================
// <<<<<<<<<<<<<< config >>>>>>>>>>>>>>>>>
//========================================

// serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

// body parser config to accept all datatypes
app.use(bodyParser.urlencoded({extended: true}))



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

//profile route 
app.get("/profile", function (req, res) {
  res.sendFile(path.join(views, "profile.html"));
});

//start route 
app.get("/start", function (req, res) {
  res.sendFile(path.join(views, "start.html"));
});

//break route 
app.get("/break", function (req, res) {
  res.sendFile(path.join(views, "break.html"));
});

//routine1 route 
app.get("/routine1", function (req, res) {
  res.sendFile(path.join(views, "routine1.html"));
});


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
	res.send(email + " is registered!\n");
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
	    // redirect to user profile
	    res.redirect("/profile"); 
	}
  });
});





var listener = app.listen(3000, function () {
  console.log("Listening on port " + listener.address().port);
});