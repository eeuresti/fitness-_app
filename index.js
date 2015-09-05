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





//========================================
// <<<<<<<<<<<<<< routes >>>>>>>>>>>>>>>>>
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









var listener = app.listen(3000, function () {
  console.log("Listening on port " + listener.address().port);
});