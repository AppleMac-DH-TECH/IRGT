const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
  account: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required : true
  },
  
  amount: {
    type: String,
    required: true
  },
 
  method: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('notification', NotificationSchema);
