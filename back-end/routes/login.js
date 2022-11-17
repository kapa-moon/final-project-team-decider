let router = require('express').Router(), 
user = require('../model/user.model');

router.route('/').get((req, res) =>
{
    user.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) =>
{
    
});

module.exports = router;