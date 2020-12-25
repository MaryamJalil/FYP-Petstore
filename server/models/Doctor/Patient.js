const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    min: 9,
},
  description: {
    type: String,
    required: true,
    maxlength: 2000  }
});

module.exports = mongoose.model('Patient', patientSchema)