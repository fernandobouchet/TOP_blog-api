const express = require('express');
const {
  getAdmin,
  setAdmin,
  updateAdmin,
  deleteAdmin,
} = require('../controllers/adminController');
const router = express.Router();

router.get('/', getAdmin);

router.post('/', setAdmin);

router.put('/:id', updateAdmin);

router.delete('/:id', deleteAdmin);

module.exports = router;
