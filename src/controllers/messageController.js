const getMessage = (req, res) => {
  res.status(200).json({ message: 'Get message' });
};

const setMessage = (req, res) => {
  res.status(200).json({ message: 'Set message' });
};

const updateMessage = (req, res) => {
  res.status(200).json({ message: `Update message ${req.params.id}` });
};

const deleteMessage = (req, res) => {
  res.status(200).json({ message: `Delete message ${req.params.id}` });
};

module.exports = { getMessage, setMessage, updateMessage, deleteMessage };
