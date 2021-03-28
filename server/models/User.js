const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    email: {
        type: String,
        required: ['Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: ['Password is required'],
        minlength: [4, 'Password should be at least 4 characters long']
    },
    places: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Place'
        }
    ]

});


module.exports = mongoose.model('User', userScheme);