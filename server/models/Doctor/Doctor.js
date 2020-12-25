
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DoctorSchema = new Schema({
  doctor: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    default: null
  },
  hospital:{
    type: Schema.Types.ObjectId,
    ref: 'hospital',
    default: null
  },
  hospital_id:{
    type: Schema.Types.ObjectId,
    ref: 'hospital',
    default: null
  },
  
  contact: {
    type: String,
    required: true
  },
  experience: [
    {
      jobtitle: {
        type: String,
        required: true
      },
      joblocation: {
        type: String
      },
      jobdescription: {
        type: String
      }
    }
  ],
  education: [
    {
      
      degree: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String,
        required: true
      }
      
    }
  ],
  
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Doctor = mongoose.model('doctor', DoctorSchema);
