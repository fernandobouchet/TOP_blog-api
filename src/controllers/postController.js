const Post = require('../models/postModel');
const Message = require('../models/messageModel');

const getAllPost = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  const messages = await Message.find({ postId: req.params.id });
  if (messages) {
    post.messages = messages;
  }
  res.status(200).json(post);
};

const setPost = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const post = await Post.create({
    title: req.body.title,
    author: req.body.author,
    date: req.body.date,
    text: req.body.text,
    published: req.body.published,
  });
  res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  }

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedPost);
};

const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  }

  await post.remove();

  res.status(200).json({ id: req.params.id });
};

module.exports = {
  getAllPost,
  getPost,
  setPost,
  updatePost,
  deletePost,
};
