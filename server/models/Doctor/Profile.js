const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const profileSchema = new mongoose.Schema(
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
        address: {
            type: String,
            required: true,
            maxlength: 2000
        },
        experience: {
        type: String,
        required: true
        },
        contact: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        hospital: {
            type: ObjectId,
            ref: "Hospital",
            required: true
        }
    },
    
    { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);