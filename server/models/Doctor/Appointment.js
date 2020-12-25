const mongoose = require("mongoose");
const Schema = mongoose.Schema

const AppointmentSchema = new mongoose.Schema({
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'doctor',
        default: null
      },
      hospital: {
        type:String,
        required: true
      },
    time:
     {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    }
  
    
});

module.exports = mongoose.model('appointment', AppointmentSchema);