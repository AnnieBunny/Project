const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS, SECRET } = require('../config/config');



const userScheme = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [4, 'Password should be at least 4 charackters long'],
        validate: {
                validator: (v) => {
                    return /^[A-Za-z0-9]+$/.test(v)
                },
                message: (props) => {
                    return `Password should contains only english letters and digits`
                }
            }
    },
    password: {
        type: String,
        required: true,
        minlength: [4, 'Password should be at least 4 charackters long'],
    },
    amount:{
        type: Number,
        required: true,
        default: 0,

    },
    expenses : [{
        type: mongoose.Types.ObjectId,
        ref: 'Expenses'
    }]
});

userScheme.pre('save', function (next) {

    bcrypt.genSalt(SALT_ROUNDS)
        .then(salt => bcrypt.hash(this.password, salt))
        .then(hash => {
            this.password = hash;
            next();
        });
});

module.exports = mongoose.model('User', userScheme);