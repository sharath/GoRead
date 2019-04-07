const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const User = require('../../models/User');

router.post('/', (req, res) => {
  let user = new User({username: req.body.username, password: req.body.password});
  
  user.save((err) => {
    if (err) return handleError(err);
  })

  res.json({ message: 'successful'});
  console.log('success');
});



module.exports = router;
