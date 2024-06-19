const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  // You can add other fields as needed
});

// Set 'autoIndex' to false to disable automatic index creation
userSchema.set("autoIndex", false);

// Create indexes explicitly
userSchema.index({ username: 1, email: 1 });

const User = mongoose.model("User", userSchema);

module.exports = User;
