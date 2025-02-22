import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    price:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: true,
    }
},{
    timestamps:true, // good as it maintains createAt updateAt
})

const Product = mongoose.model('Product', productSchema) // here Product is changed to produts by mongoose

export default Product;