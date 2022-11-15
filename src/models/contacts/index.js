const mongoose = require('mongoose');

const Contact = mongoose.model('contacts', {
  firstName: String,
  lastName: String,
  email: String,
  favoriteColor: String,
  birthday: Date,
});

module.exports = Contact;
