const mongoose = require('mongoose');

const TimerSchema = new mongoose.Schema({
  user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
  current: {
    type: Date,
    required: true
  },
timerId: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('timer', TimerSchema);
