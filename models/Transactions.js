const { text } = require('express')
const mongoose=require('mongoose')
const transaction_schema= new mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:[true,'Please enter the text']
    },
    amount:{
        type:Number,
        required:[true,'Please enter the amount']
    },
    createdat:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('Transactions',transaction_schema);