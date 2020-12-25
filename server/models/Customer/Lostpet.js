const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const lostpetSchema = new mongoose.Schema(
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
        breed: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        
        contact: {
            type: Number
        },
       
        photo: {
            type:String
        },
    },
    
    { timestamps: true }
);

module.exports = mongoose.model("Lostpet", lostpetSchema);