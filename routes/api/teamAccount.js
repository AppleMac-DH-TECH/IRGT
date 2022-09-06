const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const TeamAccount = require('../../models/TeamAccount');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/', auth ,
  check('accountName', 'Account Name is required').notEmpty(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  async (req, res) => {
    console.log("req.body : " , req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      }

    const { accountName  , password  } = req.body;

    try {
        const user = await User.findById(req.user.id).select();
        let _account = await TeamAccount.findOne({ accountName }); 
        if (_account) {
            return res.status(400).json({ errors: [{ msg: 'Account Address exists' }] });
        }else {
            const newAccount = new TeamAccount({
                accountName,
                password,
                user: req.user.id
            });
            // console.log("New account : " , new_account);
            const new_account = await newAccount.save();
            res.json(new_account);
      } 
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

//Get All of the Wallets 
router.get('/', auth, async (req, res) => {
  try {
    const _accounts = await TeamAccount.find().sort({ date: -1 });
    res.json(_accounts);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/posts/:id
// @desc     Get post by ID
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  // console.log("Server can work : " );
  try {
    const _account = await TeamAccount.findById(req.params.id);
    if (!_account) {
      return res.status(404).json({ msg: 'Account not found' });
    }
    // console.log(wallet.user.toString());

    // Check user
    if (_account.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await _account.remove();

    res.json({ msg: 'Account removed successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/posts/:id
// @desc     Delete a post
// @access   Private
router.delete('/:id', auth , async (req, res) => {
  try {
    const wallet = await Wallet.findById(req.params.id);

    if (!wallet) {
      return res.status(404).json({ msg: 'Wallet not found' });
    }

    // Check user
    if (wallet.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await wallet.remove();

    res.json({ msg: 'Wallet removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});


module.exports = router;
