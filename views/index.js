var express = require('express'),
    bodyParser = require('body-parser'),
    db = require('./models'),
    session = require('express-session'),
    path = require('path'),
    app = express();

// views path
var views = path.join(process.cwd(), "views");

app.get("/home", function (req, res) {
  res.sendFile(path.join(views, "home"));
});

