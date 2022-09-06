const mongoose = require('mongoose');

const BalanceSchema = new mongoose.Schema({
  user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
  balance: {
    type: String,
    required: true
  },
 
  profit: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('balance', BalanceSchema);
