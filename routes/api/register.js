const express = require('express');
const router = express.Router();
const models = require('../../models/User');

router.post('/', (req, res) => {
  let settings = new models.Settings({ fontSize: 12, viewMode: 'day'});
  let user = new models.UserInfo({ username: req.body.username, password: req.body.password, settings: settings });

  user.save((err) => {
    if (err) return handleError(err);
  })

  res.json({ message: 'successful' });
});

module.exports = router;
