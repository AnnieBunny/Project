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