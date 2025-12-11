const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password : String,
    profile: String
});

module.exports = mongoose.model('user', userSchema);
