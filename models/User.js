const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Settings = new Schema({
  fontSize: {
    type: Number,
    default: 12,
    required: true,
  },
  viewMode:{
    type: String,
    default: 'day',
    require: true,
  }
});

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  settings: {
    type: Settings,
    required: true,
  }
});

module.exports = User = mongoose.model('user', UserSchema);
