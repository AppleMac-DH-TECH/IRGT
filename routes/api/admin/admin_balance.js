const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../../middleware/auth')
const User = require('../../../models/User');
const Balance = require('../../../models/Balance');
const Wallet = require('../../../models/Wallet');
// @route    GET api/posts
// @desc     Get all posts
// @access   Private
// Get User
router.get('/', auth, async (req, res) => {
    try {
      const _user = await User.findById(req.user.id);
      if (!_user) {
        return res.status(404).json({ msg: 'User not found' });
        }
        const _balance = await Balance.findOne({user : req.user.id});
        res.json(_balance);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});


router.post('/', auth, async (req, res) => {

    try {
        const { balance , profit  , id  } = req.body;
      const _wallet = await Wallet.findOne({ user : id});
      if (!_wallet) {
        return res.status(404).json({ msg: 'User wallet not found' });
      } else { 
        await Wallet.findOneAndUpdate({ user: id }, { balance, profit });
        const new_balance = {
          balance,
          profit,
          user: id
        };
        res.json(new_balance);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});
  
  


  

module.exports = router;
