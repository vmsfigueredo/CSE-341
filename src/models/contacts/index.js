const mongoose = require('mongoose');

const Contact = mongoose.model('contacts', {
    _id: mongoose.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    favoriteColor: String,
    birthday: Date
})

module.exports = Contact;