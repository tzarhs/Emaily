const mongoose = require("mongoose");
const { Schema } = mongoose;

//Schema helps mongoose to know all the properties of a Model class
const userSchema = new Schema({
  googleId: String,
});
// Create a Model Class/Collection
mongoose.model("users", userSchema);
