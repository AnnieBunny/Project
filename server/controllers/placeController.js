const { Router } = require('express');
const router = Router();


const placeService = require('../services/placeService');
const Place = require('../models/Place');

router.post('/create', (req,res) =>{
    const {country, description, imageUrl} = req.body;
    console.log(req.body);

    placeService.create(req.body, req.params.id)
    .then(place => {
        console.log(place);
        res.status(200).json(place);
    })
    .catch(err => res.status(500).json(err))
});

router.get('/', (req, res) => {
    Place.find()
        .then(places=> {
            res.status(200).json(places);
        })
        .catch(err => res.status(500).json(err))
})



router.get('/specific/:id', (req, res) => {
    Place.findById(req.params.id)
        .then(place => {
            res.status(200).json(place);
        })
        .catch(err => console.log(err))
});

router.get('/delete/:id' , (req,res) =>{
    console.log(req.params.id)
    placeService.deletePlace(req.params.id)
    .catch(err=> console.log(err))

})



module.exports = router;