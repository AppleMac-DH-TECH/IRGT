const mongoose = require('mongoose');

const WalletSchema = new mongoose.Schema({
  user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
  address: {
    type: String,
    required: true
  },
  balance : {
    type: String, 
    required : true
  },
  profit: {
    type: String, 
    required : true
  },
  password : {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('wallet', WalletSchema);
