const mongoose = require('mongoose');

const messageModel = mongoose.Schema(
  {
    date: { type: Date, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Message', messageModel);
