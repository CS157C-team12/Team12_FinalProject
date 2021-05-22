/*
user.js: defines the user schema
*/

//Connecting MongoDB to JS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    name: {
        firstName: String,
        lastName: String
    },
    address: {
        street: String,
        state: String,
        zip: Number
    },
    email: {
        type: String,
        required: true
    },
    username: String
})

//By using passport local mongoose, it manages the password portion itself,
//which is why it is not included in the user schema
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);
