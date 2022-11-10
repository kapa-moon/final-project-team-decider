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
    const name = req.body.name;
    const location_address = req.body.location_address;
    const longitude = Number(req.body.longitude);
    const latitude = Number(req.body.latitude);
    const type = req.body.type;
    const category = req.body.category;
    const distance = Number(req.body.distance);
    const image = req.body.image;
    const vote = Number(req.body.vote);

    const newLocation = new Location({
        group_id,
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

router.route('/:id').get((req, res) =>
{
    Location.findById(req.params.id)
        .then(location => res.json(location))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) =>
{
    Location.findByIdAndDelete(req.params.id)
        .then(() => res.json('Location deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) =>
{
    Location.findById(req.params.id)
        .then(location => {
            location.group_id = req.body.group_id;
            location.name = req.body.name;
            location.location_address = req.body.location_address;
            location.longitude = Number(req.body.longitude);
            location.latitude = Number(req.body.latitude);
            location.type = req.body.type;
            location.category = req.body.category;
            location.distance = Number(req.body.distance);
            location.image = req.body.image;
            location.vote = Number(req.body.vote);

            location.save()
                .then(() => res.json('Location updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/group_id/:group_id').get((req, res) =>
{
    Location.find({group_id: req.params.group_id })
        .then(locations => res.json(locations))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;