const getPost = (req, res) => {
  res.status(200).json({ message: 'Get post' });
};

const setPost = (req, res) => {
  res.status(200).json({ message: 'Set post' });
};

const updatePost = (req, res) => {
  res.status(200).json({ message: `Update post ${req.params.id}` });
};

const deletePost = (req, res) => {
  res.status(200).json({ message: `Delete post ${req.params.id}` });
};

module.exports = { getPost, setPost, updatePost, deletePost };
