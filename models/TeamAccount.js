const mongoose = require('mongoose');

const TeamAccountSchema = new mongoose.Schema({
  user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
  accountName: {
    type: String,
    required: true
  },
 
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('team', TeamAccountSchema);
