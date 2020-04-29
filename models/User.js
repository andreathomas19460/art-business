'use strict';

const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  
  id: Number,
  
  username: {
    type: String,
    trim: true,
    unique: true,
    userCreated: {
      type: Date,
      default: Date.now
    },
    required: `username is required`
  },
  
  password: {
    type: String,
    trim: true,
    required: `password is required`
    validate: [({ length }) => length >= 6, `Password should be longer.`]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, `please enter valid email address`]
  }
});

module.exports = mongoose.model(`User`, UserSchema);