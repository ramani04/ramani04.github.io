const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    dusrnm:String,
    demail:String,
    dlocality: String,
        DNumber:String,
        dbg: String,
        dpsw: String,
        dconpsw: String,

    });
module.exports = mongoose.model("Donor", UserSchema);
