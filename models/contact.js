const mongoose = require('mongoose');

// Define the schema for the 'contacts' collection
const contactSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    favoriteColor: String,
    birthday: String,
  });
  
  // Create the 'Contact' model using the schema
  const Contact = mongoose.model('Contact', contactSchema);
  
  module.exports = Contact;