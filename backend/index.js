const URLB = 'mongodb://localhost:27017'
const PORT = 9001

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const Client = require('./models/Client.js')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/contacts', async (req, res) => {
    console.log(req.body)
    
    try {
        const { userName, userPhone, userEmail } = req.body
        const client = new Client({ userName, userPhone, userEmail })
        await client.save()
        res.json({ 
            message: 'Данные пользователя введены' 
        })
    }
    catch (error) {
        console.error(error)
            ({ message: 'Пользователь не найден!' })
    }
}
)

const start = async () => {
    try {
        await mongoose.connect(URLB, { authSource: "admin" })
        app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порте`))
    }
    catch (e) {
        console.log(e)
    }
}

start()
