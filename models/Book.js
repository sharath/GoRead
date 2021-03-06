const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  cover: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
});

module.exports = Book = mongoose.model('book', BookSchema);
