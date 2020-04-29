'use strict';

const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const ArtSchema = new Schema({
  title: String,
  body: String
});

module.exports = mongoose.model(`Art`, ArtSchema);