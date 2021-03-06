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
});



router.get('/specific/:id', (req, res) => {
    
 placeService.getSpecific(req.params.id)
        .then(place => {
  
            res.status(200).json(place);
        })
        .catch(err =>res.status(500).json(err))
});

router.get('/delete/:id' , (req,res) =>{
    
    placeService.deletePlace(req.params.id)
    .then((res)=> { 

        res.status(200)
    })
    .catch(err=> res.status(500).json(err))

});

router.post('/edit-place/:id', (req, res) => {
    
    placeService.update(req.params.id, req.body)
    .then(newPlace => res.status(200).json(newPlace))
    .catch(err=> res.status(500).json(err))

});


module.exports = router;