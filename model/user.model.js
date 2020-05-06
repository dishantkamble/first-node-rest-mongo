const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    address: String,
    dob: Number,
    email: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);