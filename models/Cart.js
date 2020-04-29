'use strict';

const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  title: String,
  body: String
});

module.exports = mongoose.model(`Cart`, CartSchema);