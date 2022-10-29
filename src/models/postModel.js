const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const postSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, required: true },
    image: {
      data: Buffer,
      contentType: String,
    },
    text: { type: String, required: true },
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
    published: { type: Boolean, required: true },
  },
  { toJSON: { virtuals: true }, timestamps: true }
);

postSchema.virtual('date_formatted').get(function () {
  return DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model('Post', postSchema);
