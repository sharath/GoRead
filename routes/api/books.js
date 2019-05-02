const express = require('express');
const router = express.Router();

const Book = require('../../models/Book');

router.get('/:id', (req, res) => {
  let id = req.params.id;

  Book.findOne({'_id': id})
    .then(book => res.json(book));
});

router.get('/', (req, res) => {
  Book.find()
    .then(books => res.json(books))
});

module.exports = router;
