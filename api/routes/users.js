const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const verify = require('../verifyToken');

// Update
router.put('/:id', verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    // checking if we are changing the password
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.CRYPTO_SECRET_KEY
      ).toString();
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true, // return new user
        }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You can't be able to update your account!");
  }
});

// Delete
router.delete('/:id', verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('User has been deleted successfully!');
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json('You can delete only your account!');
  }
});

// Get
router.get('/find/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // we don't want to see password
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get all
router.get('/', verify, async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(10)
        : await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json('You are not allowed to see all users!');
  }
});

// Get user stats

module.exports = router;
