const Place = require('../models/Place');
const User = require('../models/User');

async function create(data, userId) {
    let place = await new Place({ ...data, creator: userId })
    return place.save();
   
    
}

async function getAll(userId) {
    return await Place.find({ creator: userId }).lean();
}

async function getSpecific(id) {
    let place = await Place.findById(id).lean();
    return place;
}

async function update(id, place) {
    let placeUpdated = await Place.updateOne( {_id: id}, place);
    return placeUpdated;
    
}

 function deletePlace(id) {
    return Place.deleteOne({ _id: id });
}

module.exports = {
    create,
    getAll,
    getSpecific,
    update,
    deletePlace,
}