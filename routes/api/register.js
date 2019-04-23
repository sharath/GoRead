const express = require('express');
const router = express.Router();
const models = require('../../models/User');

console.log("before router");
router.post('/', (req, res) => {
  console.log("before settings");
  let settings = new models.Settings({ fontSize: 12, viewMode: 'day'});
  console.log("after settings");
  let user = new models.UserInfo({ username: req.body.username, password: req.body.password, settings: settings });
  console.log("after user");

  user.save((err) => {
    if (err) return handleError(err);
  })

  res.json({ message: 'successful' });
});

module.exports = router;
