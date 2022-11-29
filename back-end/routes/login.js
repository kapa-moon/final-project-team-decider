let router = require('express').Router(), 
user = require('../model/user.model'),
jwt = require('jsonwebtoken'),
config = require('./config'),
refresh_token_array = [];

router.route('/').get((req, res) =>
{
    user.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

function authenticate_token(req, res, next)
{
    let auth_header = req.headers['authorization'],
    token = auth_header && auth_header.split(' ')[1]; 
    if(!token) return res.sendStatus(401);
    jwt.verify(token, config.access_token, (err, user) =>
    {
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

router.route('/cur_user', authenticate_token).post(async(req, res) =>
{
    res.json(await user.findOne({username: req.body.cur_username}).exec());
});

function generate_access_token(user)
{
    return jwt.sign(user, config.access_token, {expiresIn: '365d'});
} 

router.post('/token', (req, res) =>
{
    let refresh_token = req.body.token;
    if(!refresh_token) return res.sendStatus(401);
    if(refresh_token_array.includes(refresh_token)) return res.send(403);
    jwt.verify(refresh_token, config.refresh_token, (err, user) =>
    {
        if(err) return res.sendStatus(403);
        let access_token = generate_access_token({name: user.username});
        res.json({access_token: access_token});
    });
});

router.route('/').post(async(req, res) =>
{
    let username = req.body.username,
    hash = req.body.hash;
    if(!username || !hash)
        res.status(401).json({success: false, message: `Supply a username and password.`});
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
        let payload = {user: usr},
        access_token = generate_access_token(payload),
        refresh_token = jwt.sign(payload, config.refresh_token);
        refresh_token_array.push(refresh_token);
        res.json
        ({
            success: true,
            user: usr,
            access_token: access_token,
            refresh_token: refresh_token
        });
    });
});

module.exports = router;