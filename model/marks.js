const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   studentname : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student',
    },
    sub1 : Number,
    sub2 : Number,
    sub3 : Number
});

module.exports = mongoose.model('marks', userSchema);


