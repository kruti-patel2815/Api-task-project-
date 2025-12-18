const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   studentname : String
});

module.exports = mongoose.model('student', userSchema);
