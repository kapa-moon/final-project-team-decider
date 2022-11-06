const router = require('express').Router();
let Group = require('../model/group.model');

router.route('/').get((req, res) =>
{
    Group.find()
        .then(groups => res.json(groups))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>
{
    const id = req.body.id;

    const newGroup = new Group({id});

    newGroup.save()
        .then(() => res.json('Group added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;