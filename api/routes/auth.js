const router = require('express').Router();
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    // we're using model & inside our model we're using mongoose and mongoose Schema is gonna
    // automatically save our user inside our d/b
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
