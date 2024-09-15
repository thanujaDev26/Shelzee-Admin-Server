let mongoose = require('mongoose');

let schema = new mongoose.Schema({
    contact: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    password: {
        type: String,
        required: [true, 'Passwords are required']
    }
});

let Admin = mongoose.model('Admin', schema);

module.exports = Admin;