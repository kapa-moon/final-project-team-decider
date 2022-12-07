const router = require('express').Router();
let Location = require('../model/location.model');

router.route('/').get((req, res) =>
{
    Location.find()
        .then(locations => res.json(locations))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>
{
    const group_id = req.body.group_id;
    const location_id = req.body.location_id;
    const name = req.body.name;
    const location_address = req.body.location_address;
    const longitude = Number(req.body.longitude);
    const latitude = Number(req.body.latitude);
    const type = req.body.type;
    const category = req.body.category;
    const distance = req.body.distance ? Number(req.body.distance): 0;
    const image = req.body.image;
    const vote = Number(req.body.vote);

    const newLocation = new Location({
        group_id,
        location_id,
        name,
        location_address,
        longitude,
        latitude,
        type,
        category,
        distance,
        image,
        vote,
    });

    newLocation.save()
        .then(() => res.json('Location added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/location_id/:location_id').delete((req, res) =>
{
    Location.deleteMany({location_id: req.params.location_id})
        .then(() => res.json('Location deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/group_id/:group_id').get((req, res) =>
{
    Location.find({group_id: req.params.group_id})
        .then(locations => res.json(locations))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/location_id/:location_id').get((req, res) =>
{
    Location.find({location_id: req.params.location_id})
        .then(locations => res.json(locations))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/vote').post((req, res) =>
{
    let filter = {group_id: req.body.group_id, location_id: req.body.location_id},
    update = {$set: {vote: req.body.vote}};
    Location.findOneAndUpdate(filter, update)
    .then(() => res.json('Location updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;