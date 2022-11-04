const express = require('express');
const { setMessageValidator } = require('../../validators/messageValidator');
const {
  getMessage,
  setMessage,
  updateMessage,
  deleteMessage,
} = require('../controllers/messageController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getMessage);

router.post('/', setMessageValidator, setMessage);

router.put('/:id', protect, updateMessage);

router.delete('/:id', protect, deleteMessage);

module.exports = router;
