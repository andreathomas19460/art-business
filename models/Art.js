'use strict';

const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const ArtSchema = new Schema({
  
  id: Number,
  title: {
    type: String,
    trim: true
  },
  size: String,
  price: Number,
  inStock: Boolean,
  numberInStock: Number,
  description: String

});

module.exports = mongoose.model(`Art`, ArtSchema);