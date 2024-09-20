const { Int32 } = require('mongodb');
const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const internSchema = new Schema({
 Name: {
    type:String,
    required:true
  },
  Email_Id: {
    type:String,
    required:true
  },
  Age: {
    type:String,
    required:true
  },
  PhoneNo: {
    type:String,
    required:true
  },
  WhyWork: {
    type:String,
    required:true
  },
  ValueIntegration: {
    type:String,
    required:true
  }
  },{ timestamps:true});

const Intern = mongoose.model('Intern_info', internSchema);
module.exports = Intern;