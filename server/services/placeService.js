const Place = require('../models/Place');
const User = require('../models/User');

async function create(data, userId) {
    let place = await new Place({ ...data, creator: userId })
    return place.save();
   
    
}

async function getAll(userId) {
    return await Place.find({ creator: userId }).lean();
}

async function getSpecific(id, userId) {
    let place = await Place.findById(id).lean();
    return place;
}

async function update(id, data) {
    return await Place.updateOne({ _id: id }, data);
}

async function deletePlace(id, userId) {
    await Place.deleteOne({ _id: id });
    await User.updateOne({ _id: userId }, { $pull: { createdSells: id } });
    return;
}

module.exports = {
    create,
    getAll,
    getSpecific,
    update,
    deletePlace,
}