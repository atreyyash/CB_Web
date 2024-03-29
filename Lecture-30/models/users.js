const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    password: String,
    facebookId: String,
    token: String,
    googleId: String
})

module.exports = mongoose.model('Users', userSchema);