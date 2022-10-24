const Message = require('../models/messageModel');

const getMessage = async (req, res) => {
  const message = await Message.find().sort({ date: -1 });
  res.status(200).json(message);
};

const setMessage = async (req, res) => {
  if (!req.body.text || !req.body.username || !req.body.postId) {
    res.status(400);
    throw new Error('Field of message missing');
  }

  const message = await Message.create({
    date: new Date(),
    postId: req.body.postId,
    username: req.body.username,
    text: req.body.text,
  });

  res.status(200).json(message);
};

const updateMessage = async (req, res) => {
  const message = await Message.findById(req.params.id);

  if (!message) {
    res.status(400);
    throw new Error('Message not found');
  }

  const updatedMessage = await Message.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedMessage);
};

const deleteMessage = async (req, res) => {
  const message = await Message.findById(req.params.id);

  if (!message) {
    res.status(400);
    throw new Error('Message not found');
  }

  await message.remove();
  res.status(200).json({ id: req.params.id });
};

module.exports = { getMessage, setMessage, updateMessage, deleteMessage };
