const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.post('/', (req, res) => {
    let ruser = req.body.username;
    let rpass = req.body.password;

    User.findOne({ username: ruser })
        .then((user) => {
            if (user.username === ruser && user.password === rpass) {
                res.json({ message: 'authorized', settings: { "view-mode": user.settings.viewMode, "font-size": user.settings.fontSize } });
            } else {
                res.json({ message: 'unauthorized' });
            }
        }).catch((err) => res.json({ message: 'unauthorized' }));
});

module.exports = router;
