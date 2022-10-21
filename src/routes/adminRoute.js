const express = require('express');
const {
  getAdmin,
  registerAdmin,
  loginAdmin,
} = require('../controllers/adminController');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

router.get('/me', protect, getAdmin);

router.post('/', registerAdmin);

router.post('/login', loginAdmin);

module.exports = router;
