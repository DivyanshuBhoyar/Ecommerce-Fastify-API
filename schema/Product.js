const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const productSchema = new Schema({
    title : String ,
    price: Number ,
    id : String,
    description : String ,
    image: String,
    category: String,
})

const Product = new mongoose.model("Product", productSchema)
module.exports = Product