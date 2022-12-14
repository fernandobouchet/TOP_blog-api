const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const messageModel = mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
    date: { type: Date, required: true },
    username: { type: String, required: true },
    text: { type: String, required: true },
  },
  { toJSON: { virtuals: true }, timestamps: true }
);

messageModel.virtual('date_formatted').get(function () {
  return DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model('Message', messageModel);
