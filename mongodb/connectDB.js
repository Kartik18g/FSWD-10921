const mongoose = require('mongoose')

const connection_string = 'mongodb+srv://kartik:kartik123@class.sujvt.mongodb.net/test'


const connectDB = async () => {
    try {
        await mongoose.connect(connection_string)
        console.log("CONNNECTED TO THE DATABASE")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB