const Expense = require('../models/Expense');
const User = require('../models/User');




function create(data, userId) {
    let expense = new Expense({ ...data, creator: userId });

    return expense.save();
};

// function getAll() {
//     let expenses = Expense.find({}).lean();

//     return expenses;
// };



function getOne(id) {

    return Expense.findById(id).lean()
        .then(expense => {
            return expense;
        })

};
function deleteOne(expenseId) {
    return Expense.deleteOne({ _id: expenseId });
};


function updateOne(userId, amount) {
    
    let newAmount = amount;
    
    return User.findOneAndUpdate({ amount: newAmount + amount });
};



module.exports = {
    create,
    // getAll,
    getOne,
    deleteOne,
    updateOne
}