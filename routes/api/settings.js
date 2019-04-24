const express = require('express')
const router = express.Router();

const User = require('../../models/User').UserInfo;

router.get('/:ruser', (req, res) => {
    let ruser = req.params.ruser;

    User.findOne({ username: ruser })
        .then((user) => {
            if (user.username === ruser) {
                res.json({
                    "font-size": user.settings.fontSize,
                    "view-mode": user.settings.viewMode
                });
            }
        }).catch((err) => res.json({ message: 'unauthorized' }));
});

router.post('/:ruser', (req, res) => {
    let ruser = req.params.ruser;
    let rfontSize = req.body['font-size'];
    let rviewMode = req.body['view-mode'];

    User.findOneAndUpdate({ username: ruser },
        { settings: { fontSize: rfontSize, viewMode: rviewMode}},
        (err, user) => {
            if(err) {
                return res.json({ message: 'unauthorized' });
            }
    });

    User.findOne({ username: ruser })
        .then((user) => {
            if(user.username === ruser && user.settings.fontSize === rfontSize &&  user.settings.viewMode === rviewMode) { 
                return res.json({ message: 'success' }) 
            } else {
                return res.json({ message: 'failure' });
            }
        })
});


module.exports = router;
