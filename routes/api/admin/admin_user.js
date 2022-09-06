const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../../middleware/auth')
const User = require('../../../models/User');

// @route    GET api/posts
// @desc     Get all posts
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const _users = await User.find({ role: 'user' }).sort({ date: -1 });
      res.json(_users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/:id', async (req, res) => {
    try {
      const _user = await User.findById(req.params.id);
      if (!_user) {
        return res.status(404).json({ msg: 'User not found' });
      }
      await _user.remove();
      res.json({ msg: 'User Address removed successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

// Get User
router.get('/:id', async (req, res) => {
    try {
      const _user = await User.findById(req.params.id);
  
      if (!_user) {
        return res.status(404).json({ msg: 'User not found' });
      }
  
      res.json(_user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  

module.exports = router;
