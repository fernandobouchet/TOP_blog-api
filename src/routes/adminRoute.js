const express = require('express');
const {
  getAdmin,
  registerAdmin,
  loginAdmin,
} = require('../controllers/adminController');
const router = express.Router();

router.get('/me', getAdmin);

router.post('/', registerAdmin);

router.post('/login', loginAdmin);

module.exports = router;
