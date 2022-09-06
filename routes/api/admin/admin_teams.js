const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../../middleware/auth')
const User = require('../../../models/User');
const Balance = require('../../../models/Balance');
const Team = require('../../../models/TeamAccount.js');
// @route    GET api/posts
// @desc     Get all posts
// @access   Private
// Get User
router.get('/:id', auth, async (req, res) => {
    try {
        const _user = await User.findById(req.params.id);        
      if (!_user) {
            return res.status(404).json({ msg: 'User Account not found' });
        }
        const _teams = await Team.find({user : req.params.id});
        res.json({ _teams , username : _user.username });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});
module.exports = router;
