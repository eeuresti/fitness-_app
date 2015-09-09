var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/express_auth");
module.exports.User = require("./user");
module.exports.Workout = require("./workout");