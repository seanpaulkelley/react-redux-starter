const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose; //es 2015 of the above line aka destructuring

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  credits: { type: Number, default: 0 }
});

//create model class
mongoose.model('users', userSchema);
