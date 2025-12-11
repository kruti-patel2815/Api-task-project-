const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   studentname : String,
    sub1 : Number,
    sub2 : Number,
    sub3 : Number
});

module.exports = mongoose.model('marks', userSchema);
