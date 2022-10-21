const express = require('express');
const {
  getPost,
  setPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

router.get('/', getPost);

router.post('/', protect, setPost);

router.put('/:id', protect, updatePost);

router.delete('/:id', protect, deletePost);

module.exports = router;
