const router = require('express').Router();
let Group = require('../model/group.model');

router.route('/').get((req, res) =>
{
    Group.find().then(groups => res.json(groups))
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

router.delete('/remove', (req, res) =>
{
    Group.remove()
    .then(() => res.json('removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) =>
{
    Group.findById(req.params.id)
        .then(group => res.json(group))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) =>
{
    Group.findByIdAndDelete(req.params.id)
        .then(() => res.json('Group deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) =>
{
    Group.findById(req.params.id)
        .then(group => {
            group.id = req.body.id;
            group.save()
                .then(() => res.json('Group updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;