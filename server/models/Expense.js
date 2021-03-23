const mongoose = require('mongoose');


const expenseScheme = new mongoose.Schema({

    merchant: {
        type: String,
        required : true
    },

    total : {
        type: Number, 
        required : true

    },

    category : {
        type: String,
        required : true,
    },
    description : {
        type: String, 
        required : true,
        minlength: [3, 'Description should be at least 3 charackters long'],
        maxlength : [30, 'Description should be max 30 charackters long'],
    },
    report : {
        type : Boolean,
        required : true,
        default: false,

    },


});


module.exports = mongoose.model('Expense', expenseScheme);
