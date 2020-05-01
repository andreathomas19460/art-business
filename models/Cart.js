'use strict';

const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  id: Number,
  title: {
    type: String,
  },
  price: Number,
  inStock: Boolean,
  quantity: Number,
  description: String
});

module.exports = mongoose.model(`Cart`, CartSchema);
