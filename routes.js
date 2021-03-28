const router = require('express').Router();
const authController = require('./controllers/authController');
const placeController = require('./controllers/placeController');


//Contollers


router.use('/auth', authController);
router.use('/places', placeController);








module.exports = router;