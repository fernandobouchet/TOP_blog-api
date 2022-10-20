const mongoose = require('mongoose');

const messageModel = mongoose.Schema(
  {
    date: { type: Date, required: true },
    username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Message', messageModel);
