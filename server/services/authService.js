const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config');

const register = (username, password) => {

    let user = new User({ username, password, repeatPassword });

    if (password !== repeatPassword) throw {message: 'Passwords should match.'};

        if (password.length < 4) throw {message: 'Password should be at least 4 characters long.'};

        if (username.length < 4) throw {
            message: 'Username should be at least 4 characters long and should contains only english letters and digits'
        };

        let isAlreadyExists = await User.findOne({username});

        if (isAlreadyExists) throw {message: 'User already exists!'};

        let hash = await bcrypt.hash(password, SALT_ROUNDS);

        let user = await new User({username, password: hash}).save();

        return jwt.sign({_id: user._id, username: user.username}, SECRET);
    
};

const login = async (username, password) => {

    let user = await User.findOne({ username });
    if (!user) throw { message: 'No such user', status: 404 };

    let areEqual = await bcrypt.compare(password, user.password);
    if (!areEqual) throw { message: 'Invalid password', status: 404 };
   
    let token = jwt.sign({_id: user._id, username: user.username}, SECRET);
    return token;
};

module.exports = {
    register,
    login,

};
