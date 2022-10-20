const express = require('express');
const {
  getPost,
  setPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');
const router = express.Router();

router.get('/', getPost);

router.post('/', setPost);

router.put('/:id', updatePost);

router.delete('/:id', deletePost);

module.exports = router;
