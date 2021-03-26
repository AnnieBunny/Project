const mongoose = require('mongoose');


const placeScheme = new mongoose.Schema({

    country: {
        type: String,
        required : true
    },

    description : {
        type: String, 
        required : true

    },

    image : {
        type: String,
        required : true,
    },
 
});


module.exports = mongoose.model('Place', placeScheme);
