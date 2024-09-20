const { Int32 } = require('mongodb');
const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const voluntSchema = new Schema({
 Name: {
    type:String,
    required:true
  },
  Email_Id: {
    type:String,
    required:true
  },
  PhoneNo: {
    type:String,
    required:true
  },
  Location: {
    type:String,
    enum: ['Bengaluru', 'Mumbai', 'Chennai'],
    required:true
  },
  PrevExp: {
    type:String,
    enum: ['Yes', 'No'],
    required:true
  }
  },{ timestamps:true});

const Volunteer = mongoose.model('Volunt_info', voluntSchema);
module.exports = Volunteer;