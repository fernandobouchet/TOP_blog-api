const getAdmin = (req, res) => {
  res.status(200).json({ message: 'Get admin' });
};

const setAdmin = (req, res) => {
  res.status(200).json({ message: 'Set admin' });
};

const updateAdmin = (req, res) => {
  res.status(200).json({ message: `Update admin ${req.params.id}` });
};

const deleteAdmin = (req, res) => {
  res.status(200).json({ message: `Delete admin ${req.params.id}` });
};

module.exports = { getAdmin, setAdmin, updateAdmin, deleteAdmin };
