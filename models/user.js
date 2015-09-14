// require dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt');


 //========================================
// <<<<<<<<<<< Completion Schema >>>>>>>>>>>>
//========================================

var CompletionSchema = new Schema({
  routineUsed: String,
  createdAt: {type: Date, default: Date.now}
});


// //========================================
// // <<<<<<<<<<< Routine Schema >>>>>>>>>>>>
// //========================================

// var RoutineSchema = new Schema({
//   name: String,
//   workouts: [
//     {name: String, duration: Number, type: String}
//   ]
// });


//========================================
// <<<<<<<<<<< User Schema >>>>>>>>>>>>>>>
//========================================

var UserSchema = new Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	passwordDigest: {type: String, required: true},
	createdAt: {type: Date, default: Date.now},
  completions: [CompletionSchema]
});





//========================================
// <<<<<<<< Create User w/ Hash Pw>>>>>>>>
//========================================

// create a new user with secure (hashed) password (for sign up)
UserSchema.statics.createSecure = function (name, email, password, cb) {
  // `_this` now references our schema
  var _this = this;
  // generate some salt
  bcrypt.genSalt(function (err, salt) {
    // hash the password with the salt
    bcrypt.hash(password, salt, function (err, hash) {
      // build the user object
      var user = {
      	name: name,
        email: email,
        passwordDigest: hash,
        createdAt: Date.now()
      };
      // create a new user in the db with hashed password and execute the callback when done
      _this.create(user, cb);
      console.log(user, "user in db");
    });
  });
};

//========================================
// <<<< authenticate user (for login)>>>>>
//========================================

UserSchema.statics.authenticate = function (email, password, cb) {
  // find user by email entered at log in
  this.findOne({email: email}, function (err, user) {
    // throw error if can't find user
    if (user === null) {
      cb("Can\'t find user with that email", null);
    // if found user, check if password is correct
    } else if (user.checkPassword(password)) {
      // the user is found & password is correct, so execute callback
      // pass no error, just the user to the callback
      cb(null, user);
    } else {
      // user found, but password incorrect
      cb("password incorrect", user);
    }
  });
};

//=====================================================================
// <<<<< compare user pw w/ hashed password (`passwordDigest`) >>>>>>>>
//=====================================================================

UserSchema.methods.checkPassword = function (password) {
  // run hashing algorithm (with salt) on password to compare with stored `passwordDigest`
  // `compareSync` is like `compare` but synchronous
  // returns true or false
  return bcrypt.compareSync(password, this.passwordDigest);
};









// define completion model
var Completion = mongoose.model('Completion', CompletionSchema);

// define user model
var User = mongoose.model('User', UserSchema);

// export user model
module.exports = User;
