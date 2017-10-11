const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose; //es 2015 of the above line aka destructuring

const userSchema = new Schema({
  googleId: String,
  facebookId: String
});

//create model class
mongoose.model('users', userSchema);
