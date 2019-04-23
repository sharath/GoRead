const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SettingsSchema = new Schema({
  fontSize: {
    type: Number,
    default: 12,
    required: true,
  },
  viewMode: {
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
    type: SettingsSchema,
    required: true,
  }
});

var UserInfo = mongoose.model('user', UserSchema);
var Settings = mongoose.model('settings', SettingsSchema);

module.exports = User = {
  UserInfo: UserInfo,
  Settings: Settings
};
