const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema({
    name:"String",
    price:"String",
    description:"String",
    
    rating:"String",
    seller:"String",
    stock:"String",
    
    reviews:"String",
    image:[
        {
            image:"String"
        }
    ],
    category:"String",
    createdOn:"Date"
})

const productModel = mongoose.model('Product',productsSchema);

module.exports = productModel;