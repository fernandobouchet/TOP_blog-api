const mongoose = require('mongoose');
const { DateTime } = require('luxon');

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

postSchema.virtual('date_formatted').get(function () {
  return DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model('Post', postSchema);
