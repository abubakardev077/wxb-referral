const express = require('express');
const router = express.Router();

// import controller
const {
  readController,
  updateController,
} = require('../controllers/user.controller');

router.get('/user/:id', readController);
router.put('/user/update', updateController);

module.exports = router;