const express = require('express');
const {
  getAllPosts,
  getPost,
  setPost,
  updatePost,
  deletePost,
  getPublishedPosts,
} = require('../controllers/postController');
const upload = require('../services/imageUploader');

const singleUpload = upload.single('image');

const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

router.get('/', getPublishedPosts);

router.get('/all', getAllPosts);

router.get('/:id', getPost);

router.post('/', protect, singleUpload, setPost);

router.put('/:id', protect, updatePost);

router.delete('/:id', protect, deletePost);

module.exports = router;
