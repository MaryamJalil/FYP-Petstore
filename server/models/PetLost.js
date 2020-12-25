const mongoose = require('mongoose')

const petlostSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    maxlength: 2000 
 
},

age: {
    type: Number,
    trim: true,
    required: true,
    maxlength: 32
},
breed: {
    type: String
},
Location:{
    type: String,
    required: true
},
phone: {
    type: Number,
    min: 9,
}
}
);

module.exports = mongoose.model('petlost', petlostSchema)