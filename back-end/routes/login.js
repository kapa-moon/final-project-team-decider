let router = require('express').Router(), 
user = require('../model/user.model'),
cur_user;

router.route('/').get((req, res) =>
{
    user.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/cur_user').get((req, res) =>
{
    res.json(cur_user);
});

router.route('/').post(async (req, res) =>
{
    let username = req.body.username,
    hash = req.body.hash;
    if(!username || !hash)
        res.status(401).json({success: false, message: `Supply a username and password.`});
    cur_user = await user.findOne({username: req.body.username, hash: req.body.hash}).exec();
    res.json(cur_user);
});

module.exports = router;