var mongoose = require('mongoose');
var ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  address: String,
});
module.exports = mongoose.model('Contact', ContactSchema);
