const mongoose = require('mongoose');
// import the catagories array here
const product = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    quantityAvailable: {
        type: Number,
        default: 0
    },
    createdeOn:{
        type:Date,
        default: Date.now()
    },
    updatedOn: {
        type: Date
    },
    isDeleted:{
        type: Boolean,
        default:false
    }
})
module.exports = mongoose.model('product', product)