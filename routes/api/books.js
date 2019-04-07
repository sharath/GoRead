const express = require('express');
const router = express.Router();

const Book = require('../../models/Book');

// @route GET api/books
// @desc Get all books
// @access Public
router.get('/', (req, res) => {
  Book.find()
    .then(books => res.json(books))
});

module.exports = router;
