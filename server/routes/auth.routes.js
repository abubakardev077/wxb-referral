const express = require('express');
const router = express.Router();

//load controllers
const {
  loginController,
  registerController
} = require('../controllers/auth.controller.js');

router.post('/login', loginController);
router.post('/register', registerController);

module.exports = router;