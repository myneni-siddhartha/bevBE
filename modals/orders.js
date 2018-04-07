
const mongoose = require('mongoose');
const order = new mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"user"
    // },
    user:{
        type: String,
        required:true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    quantity: {
        type: Number,
        default: 1,
        required: true
    },
    orderStatus: {
        type: String,
        enum:['Confirmed','Canceled'],
        default: 'Confirmed'
    },
    orderDate: {
        type: Date,
        default: Date.now()
    },
    createdOn:{
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
module.exports = mongoose.model('order', order)