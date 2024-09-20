const { Int32 } = require('mongodb');
const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
  Id: {
    type:String,
    required:true
  },
  Name: {
    type:String,
    required:true
  },
  Price: {
    type:Number,
    required:true
  },
  NumberOf: {
    type:Number,
    required:true
  },
  Description: {
    type:String,
    required:true
  },
  Image: {
    type:String,
    required:true
  },
  Link: {
    type:String,
    required:true
  }
  },{ timestamps:true});
const Product = mongoose.model('Product_info', productSchema);
module.exports = Product;