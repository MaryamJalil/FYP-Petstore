const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const pharmacySchema = new mongoose.Schema(
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
        price: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        pharm: {
            type: ObjectId,
            ref: "Pharm",
            required: true
        },
        quantity: {
            type: Number
        },
        expirydate:{
            type:Date,
            required: true

        },
        sold: {
            type: Number,
            default: 0
        },
        photo: {
            type:String
        },

        shipping: {
            required: false,
            type: Boolean
        }
    },
    
    { timestamps: true }
);

module.exports = mongoose.model("Pharmacy", pharmacySchema);