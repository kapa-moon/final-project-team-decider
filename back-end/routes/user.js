const router = require('express').Router();
const User = require('../model/user.model');
const Location = require('../model/location.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const user_id = req.body.user_id;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const phone = req.body.phone;

    const my_location = req.body.my_location;
    const my_groups = req.body.my_groups;
    const current_group = req.body.current_group;
    const voted_locations = req.body.voted_locations;


    const newUser = new User({
        user_id,
        username,
        password,
        email,
        phone,
        my_location,
        my_groups,
        current_group,
        voted_locations,
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:user_id').get((req, res) => {
    User.find({ user_id: req.params.user_id })
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/print/:user_id').get((req, res) => {
    User.find({ user_id: req.params.user_id })
        .select('voted_locations')
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/vote').post((req, res) => {
    let filter = { user_id: req.body.user_id };
    let update = { $push: { voted_locations: req.body.location_id } };
    User.findOneAndUpdate(filter, update)
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addgroup').post((req, res) => {
    let filter = { user_id: req.body.user_id };
    let update = { $push: { my_groups: req.body.group_idx } };
    User.findOneAndUpdate(filter, update)
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
});



router.route(`/unvote`).post((req, res) => {
    let filter = { user_id: req.body.user_id };
    let update = { $pull: { voted_locations: req.body.location_id } };
    User.findOneAndUpdate(filter, update)
        .then(() => res.json('Voted location deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));

});


router.route('/switchgroup/:user_id').post((req, res) => {
    let filter = { user_id: req.params.user_id };
    let update = { current_group: req.body.current_group };
    User.findOneAndUpdate(filter, update)
        .then(() => res.json('User current group updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

