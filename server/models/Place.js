const mongoose = require('mongoose');


const placeScheme = new mongoose.Schema({

 
    country: {
        type: String,
        // required: true
    },


    description: {
        type: String,
        // required: true,
        minlength: [3, 'Description should be at least 3 charackters long'],
        maxlength: [30, 'Description should be max 30 charackters long'],
    },

    imageUrl: {
        type: String,
        // required: true,
    },
 
});


module.exports = mongoose.model('Place', placeScheme);
