const express = require('express');
const { getAllLaptop, getSingleLaptop } = require('../Controllers/Laptop');
const router = express.Router();

router.get('/', getAllLaptop);

router.get('/:id', getSingleLaptop);

module.exports = router;
