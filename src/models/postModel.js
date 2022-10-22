const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, required: true },
    text: { type: String, required: true },
    published: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Post', postSchema);
