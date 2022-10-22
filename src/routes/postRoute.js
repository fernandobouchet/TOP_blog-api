const express = require('express');
const {
  getAllPost,
  getPost,
  setPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

router.get('/', getAllPost);

router.get('/:id', getPost);

router.post('/', protect, setPost);

router.put('/:id', protect, updatePost);

router.delete('/:id', protect, deletePost);

module.exports = router;
