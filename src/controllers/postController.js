const Post = require("../models/postModel");
const Message = require("../models/messageModel");
const fs = require("fs");
const path = require("path");

const getPublishedPosts = async (req, res) => {
  const posts = await Post.find({ published: true }).sort({ date: -1 });
  res.status(200).json(posts);
};

const getAllPosts = async (req, res) => {
  const posts = await Post.find().sort({ date: -1 });
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
    throw new Error("Please add a text field");
  }
  if (!req.file) {
    res.status(400);
    throw new Error("Please add a file");
  }

  const post = await Post.create({
    title: req.body.title,
    author: `${req.user.name} ${req.user.lastname}`,
    date: new Date(),
    image: {
      data: fs.readFileSync(
        path.join(__basedir + "/temp/uploads/" + req.file.filename)
      ),
      contentType: req.file.mimetype,
    },
    text: req.body.text,
    published: req.body.published,
  });
  res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error("Post not found");
  }

  const updatedData = {
    title: req.body.title,
    text: req.body.text,
    published: req.body.published,
  };

  if (req.file) {
    updatedData.image = {
      data: fs.readFileSync(
        path.join(__basedir + "/temp/uploads/" + req.file.filename)
      ),
      contentType: req.file.mimetype,
    };
  }

  const updatedPost = await Post.findByIdAndUpdate(
    req.params.id,
    {
      $set: updatedData,
    },
    {
      new: true,
    }
  );
  res.status(200).json(updatedPost);
};

const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error("Post not found");
  }

  await post.remove();

  res.status(200).json({ id: req.params.id });
};

module.exports = {
  getAllPosts,
  getPost,
  setPost,
  updatePost,
  deletePost,
  getPublishedPosts,
};
