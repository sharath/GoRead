const express = require('express')
const router = express.Router();

const User = require('../../models/User');

router.get('/:ruser', (req, res) => {
    let ruser = req.params.ruser;
    console.log(ruser);

    User.findOne({ username: ruser })
        .then((user) => {
            if (user.username === ruser) {
                res.json({
                    "font-size": user.settings.fontSize,
                    "view-mode": user.settings.viewMode
                });
            }
        }).catch((err) => res.json({ message: 'unauthorized' }));
})

module.exports = router;