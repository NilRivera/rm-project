const { Schema, model } = require('mongoose');
const isValidPassword = require('../utils/validatePassword');

const userSchema = new Schema({
  email: String,
  password: String,
});

userSchema.methods.isValidPassword = isValidPassword;

module.exports = model('User', userSchema);
