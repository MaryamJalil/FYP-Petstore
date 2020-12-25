const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const PetOwnerSchema = new mongoose.Schema({
  PetOwnername: {
    type: String,
    index: {
      unique: true
    }
  },
  password: String,
  pets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pet"
    }
  ],
 
});

PetOwnerSchema.methods.comparePassword = function(inputPass) {
  return bcrypt.compareSync(inputPass, this.password);
};

PetOwnerSchema.pre("save", function(next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hashSync(this.password, 10);
  return next();
});

module.exports = mongoose.model("PetOwner", PetOwnerSchema);