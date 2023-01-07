const User = require('../model/auth.model');
const dotenv = require('dotenv');
dotenv.config();

exports.readController = (req, res) => {
  const userId = req.params.id;
  User.findById(userId).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found',
      });
    }
    console.log('fetching user');
    res.json(user);
  });
};

exports.updateController = (req, res) => {
  const {
    _id,
    referralCode,
  } = req.body;
  User.findOne({ _id: _id }, (err, user) => {
    if (err || !user) {
      console.log('this is the error ', err);
      return res.status(400).json({
        error: 'User not found',
      });
    }
    user.referralCode = referralCode;
    user.save((err, updatedUser) => {
      if (err) {
        console.log('USER UPDATE ERROR', err);
        return res.status(400).json({
          error: 'User update failed',
        });
      }
      console.log('Updated user info- ', updatedUser);
      res.json(updatedUser);
    });
  });
};

exports.updateReferredAddresses = (req, res) => {
  const { id } = req.params;
  const { address, mintType } =
    req.body;
  // find by document id and update and push item in array
  console.log(address, mintType);

  // find the user in db
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found',
      });
    }
    console.log('fetching user for referral update');
    

    User.findByIdAndUpdate(
      id,
      { $push: { addressReferred: req.body } },
      { safe: true, upsert: true },
      (err, doc) => {
        if (err) {
          return res.status(400).json({ error: err });
        } else {
          console.log('New Referral Saved');
          return res.status(200).send('New Referral Saved');

        }
      }
    );
  });
};

exports.getReferredAddress = (req, res) => {
  const { _id } = req.params;

  User.findById(_id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found',
      });
    }
    console.log('fetching addresses referred');
    res.json(user.addressReferred);
  });
};


