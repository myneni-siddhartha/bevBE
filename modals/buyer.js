
const mongoose = require('mongoose');
const buyer = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // unique:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },

    // later
    password: {
        type: String,
        default:'123'
    },
    status: {
        type: String,
        required:true,
        enum:['active','passive','suspended','prime'],
        default:'passive'
    },
    createdeOn:{
        type:Date,
        default: Date.now()
    },
    lastActiveOn:{
        type:Date,
        default:Date.now()
    },
    updatedOn: {
        type: Date
    },
    isDeleted:{
        type: Boolean,
        default:false
    }
})
module.exports = mongoose.model('buyer', buyer)