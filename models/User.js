'use strict';

const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  title: String,
  body: String
});

module.exports = mongoose.model(`User`, UserSchema);