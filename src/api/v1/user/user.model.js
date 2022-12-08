const { mongoose } = require("../../../libs/libs");

const userSchema = new mongoose.Schema({
  name: String
  });
  
const User = mongoose.model("User", userSchema);

module.exports = User;
