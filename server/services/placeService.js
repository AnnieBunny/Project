const Place = require('../models/Place');
const User = require('../models/User');




function create(data, userId) {
    let place = new ({ ...data, creator: userId });

    return place.save();
};

// function getAll() {
//     let expenses = Expense.find({}).lean();

//     return expenses;
// };



function getOne(id) {

    return Place.findById(id).lean()
        .then(place => {
            return place;
        })

};
function deleteOne(placeId) {
    return Place.deleteOne({ _id: placeId });
};





module.exports = {
    create,
    // getAll,
    getOne,
    deleteOne,
   
}