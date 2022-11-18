let router = require('express').Router(), 
user = require('../model/user.model'),
jwt = require("jsonwebtoken"),
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
    })
});

module.exports = router;