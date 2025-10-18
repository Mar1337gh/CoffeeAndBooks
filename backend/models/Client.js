//import { Schema } from "mongoose"

const { Schema, model } = require('mongoose')

const Client = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    userPhone: {
        type: Number,
        unique: false,
        required: true
    },
    userEmail: {
        type: String,
        unique: false,
        required: true
    }

})

module.exports = model("Client", Client)