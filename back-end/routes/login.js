let router = require('express').Router(), 
user = require('../model/user.model'),
jwt = require("jsonwebtoken"),
cur_user, cur_username, cur_hash;

router.route('/').get((req, res) =>
{
    user.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/cur_user').get(async(req, res) =>
{
    cur_user = await user.findOne({username: cur_username, hash: cur_hash}).exec();
    res.json(cur_user);
});

router.route('/').post(async(req, res) =>
{
    let username = req.body.username,
    hash = req.body.hash;
    if(!username || !hash)
        res.status(401).json({success: false, message: `Supply a username and password.`});
    cur_user = await user.findOne({username: req.body.username, hash: req.body.hash}).exec();
    cur_username = req.body.username;
    cur_hash = req.body.hash;
    user.findOne({username: req.body.username})
    .exec(async (err, usr) =>
    {
        if(err)
        {
            res.status(401).send({message: err});
            return;
        }
        if(!usr)
            return res.status(404).send({message: 'Username not found.'});
        if(usr.hash != hash)
        {
            return res.status(401).send
            ({
                success: false,
                token: null,
                message: 'Password is incorrect.'
            })
        }
        let token = await jwt.sign({user: usr}, hash);
        res.json
        ({
            success: true,
            user: usr,
            token: token
        });
    });
});

router.route('/logout').get((req, res) =>
{
    cur_user = null;
    cur_username = null;
    cur_hash = null;
    res.json(cur_user);
});

module.exports = router;