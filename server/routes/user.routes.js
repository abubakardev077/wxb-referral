const express = require('express');
const router = express.Router();

// import controller
const {
  readController,
  updateController,
  updateReferredAddresses,
  getReferredAddress,
} = require('../controllers/user.controller');

router.get('/user/:id', readController);
router.put('/user/update', updateController);
router.put('/user/referralUpdate', updateReferredAddresses);
router.get('/user/:id', getReferredAddress);

module.exports = router;