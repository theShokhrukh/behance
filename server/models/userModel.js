const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  ism: {
    type: String,
    required: true,
  },
  familiya: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  parol: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
