const express = require('express')
const connectDB = require('./mongodb/connectDB')
const { User } = require('./mongodb/models/User')


connectDB()

const app = express()

app.use(express.json())

app.get('/getUser/:email', async (req, res) => {
    try {
        const { email } = req.params
        const user = await User.findOne({ email })

        res.send(user)
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
})

app.post('/addUser', async (req, res) => {
    try {
        const user = new User(req.body)
        console.log(user)
        await user.save()
        res.send('request received')
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
})

app.listen(3003, (req, res) => {
    console.log('server listening at PORT 3003')
})