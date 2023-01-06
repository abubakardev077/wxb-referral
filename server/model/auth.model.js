const mongoose = require('mongoose');
// user schema
const userSchema = new mongoose.Schema(
  {
    address: {
      type: String,
    },
    referralCode: {
      type: String,
    },
    addressReferred: [
      {
        address: String,
        isMinted: {type: Boolean, default: false}
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);