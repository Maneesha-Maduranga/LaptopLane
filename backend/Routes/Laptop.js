const express = require('express');
const router = express.Router();

//Controllers
const {
  getAllLaptop,
  getSingleLaptop,
  getDiscountLaptops,
  createLaptop,
  deleteLaptop,
  uploadImageLaptop,
} = require('../Controllers/Laptop');
//Securirity
const { roleAccess, authentication } = require('../middleware/security');

router.post('/upload', authentication, roleAccess('admin'), uploadImageLaptop);
router.get('/discount', getDiscountLaptops);

router.get('/', getAllLaptop);

router.get('/:id', getSingleLaptop);

router.post('/', authentication, roleAccess('admin'), createLaptop);

router.delete('/:id', authentication, roleAccess('admin'), deleteLaptop);

module.exports = router;
