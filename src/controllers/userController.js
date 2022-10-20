const getUser = (req, res) => {
  res.status(200).json({ message: 'Get user' });
};

const setUser = (req, res) => {
  res.status(200).json({ message: 'Set user' });
};

const updateUser = (req, res) => {
  res.status(200).json({ message: `Update user ${req.params.id}` });
};

const deleteUser = (req, res) => {
  res.status(200).json({ message: `Delete user ${req.params.id}` });
};

module.exports = { getUser, setUser, updateUser, deleteUser };
