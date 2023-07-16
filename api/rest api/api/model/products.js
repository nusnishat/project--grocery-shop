const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
     _id:mongoose.Schema.Types.ObjectId,
    title:String,
    department:String,
    description:String,
    quantity:String,
    price:Number,
    stock:String,
    imagePath:String
})

module.exports = mongoose.model('Products',productsSchema)