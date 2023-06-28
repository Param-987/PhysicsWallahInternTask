const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phoneNo: { type: String },
  Bookmarks: { type: [String] },
  applied: { type: [String] },
  profile: { type: String },
});

const User = mongoose.model('User', userSchema);

module.exports = User
