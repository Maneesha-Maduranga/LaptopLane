const express = require('express');
const router = express.Router();
//Controllers
const {
  getAllUser,
  getsingleUser,
  showUser,
  updateUser,
  updateUserPassword,
} = require('../Controllers/User');

const { authentication, roleAccess } = require('../middleware/security');

router.get('/', authentication, roleAccess('admin'), getAllUser);

router.get('/dashboard', authentication, showUser);

router.patch('/update', updateUser);

router.patch('/update/password', authentication, updateUserPassword);

router.get('/:id', authentication, roleAccess('admin'), getsingleUser);

module.exports = router;
