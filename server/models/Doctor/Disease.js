const mongoose = require('mongoose');
// const crypto = require('crypto');
// const uuidv1 = require('uuid/v1');

const diseaseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique:true
        },

        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref : "user"
        }
        
    },
    { timestamps: true }
);

module.exports = mongoose.model('Disease', diseaseSchema);