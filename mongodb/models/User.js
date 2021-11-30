const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String
})

module.exports.User = mongoose.model("User", UserSchema)