const mongoose = require("mongoose");
const BloodbankSchema = new mongoose.Schema({
  	sno: String,
	Address : String,
	blood_group : String,
	Contact : String
});
module.exports = mongoose.model("Bloodbank", BloodbankSchema);
