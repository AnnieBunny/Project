const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config');

async function registerUser(email, password) {
    let checkUser = await User.findOne({ email });
    if (checkUser) throw { message: 'These email is already taken.' };

    let user = new User({ email, password });
    return await user.save();
}

async function loginUser( email, password ) {

    console.log(22222222);
    console.log(email)
    console.log(password)


    let user = await User.findOne({ email });
    if (!user) throw { message: 'Invalid email or password' };
    console.log(user)

  


    let hasValidPass = await bcrypt.compare(password, user.password);
 
    console.log(hasValidPass)

    if (!hasValidPass) throw { message: "Invalid email or password" }

    let token = jwt.sign({ _id: user._id, email: user.email }, SECRET, { expiresIn: '1h' });
    return token;
}

module.exports = {
    registerUser,
    loginUser
}