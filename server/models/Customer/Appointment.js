const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const appointmentSchema = new mongoose.Schema(
    {  
         userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
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
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        contact: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32        },
        
    },
    
    { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);