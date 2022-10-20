const express = require('express');
const {
  getMessage,
  setMessage,
  updateMessage,
  deleteMessage,
} = require('../controllers/messageController');
const router = express.Router();

router.get('/', getMessage);

router.post('/', setMessage);

router.put('/:id', updateMessage);

router.delete('/:id', deleteMessage);

module.exports = router;
