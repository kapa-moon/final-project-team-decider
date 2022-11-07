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
    const location_name = req.body.location_name;
    const location_address = req.body.location_address;
    const longitude = Number(req.body.longitude);
    const latitude = Number(req.body.latitude);

    const newLocation = new Location({
        group_id,
        location_name,
        location_address,
        longitude,
        latitude,
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
            location.location_name = req.body.location_name;
            location.location_address = req.body.location_address;
            location.longitude = Number(req.body.longitude);
            location.latitude = Number(req.body.latitude);

            location.save()
                .then(() => res.json('Location updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;