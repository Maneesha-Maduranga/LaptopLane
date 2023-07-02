const express = require('express');
const {
  getAllLaptop,
  getSingleLaptop,
  createLaptop,
  updateLaptop,
  deleteLaptop,
  uploadImageLaptop,
} = require('../Controllers/Laptop');
const router = express.Router();

const { roleAccess, authentication } = require('../middleware/security');

router.post('/upload', authentication, roleAccess('admin'), uploadImageLaptop);

router.get('/', getAllLaptop);

router.get('/:id', getSingleLaptop);

router.post('/', authentication, roleAccess('admin'), createLaptop);

router.patch('/:id', authentication, roleAccess('admin'), updateLaptop);

router.delete('/:id', authentication, roleAccess('admin'), deleteLaptop);

module.exports = router;
