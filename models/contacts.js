var mongoose = require("mongoose");
 
var contactSchema = new mongoose.Schema({
   Name: String,
   Title: String,
   Agency: String,
   DID: Number,
   HP: Number,
   Email: String,
   Address: String
});
 
module.exports = mongoose.model("Contact", contactSchema);