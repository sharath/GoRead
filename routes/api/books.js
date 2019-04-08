const express = require('express');
const router = express.Router();

const Book = require('../../models/Book');

router.get('/', (req, res) => {
  Book.find()
    .then(books => res.json(books))
});

module.exports = router;
