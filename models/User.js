const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  PhoneNumber: {
    type: String,
  },
  Password: {
    type: String,
    required: true,
  },
  UserType: {
    type: String, // You can use an ENUM for UserType if you have predefined values.
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
