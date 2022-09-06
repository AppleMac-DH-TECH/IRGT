const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Notification = require('../../models/Notification');
const User = require('../../models/User');
const Wallet = require('../../models/Wallet');
const bcrypt = require('bcryptjs');
// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/', auth,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { account, amount, method, password } = req.body;

    try {
      if (method == "withdraw") {
        const _user = await User.findById(req.user.id);
        const _wallet = await Wallet.findOne({ user: req.user.id });
        if (password == _user.password && _wallet.address == account) {
          const newNotification = new Notification({
            account,
            amount,
            method,
            user: req.user.id,
            username : _user.username
          });
      
          const notify = await newNotification.save();
        
          const _wallet = await Wallet.findOne({ user: req.user.id });
          new_balance = _wallet.balance - amount;
          await Wallet.findOneAndUpdate({ user: req.user.id }, { balance: new_balance })
          res.json(notify );
          // console.log(notify);
        } else if (password !== _user.password) {
          return res.status(400).json({ errors: [{ msg: 'Password is not Correct' }] });
        } else if (account !== _wallet.address) { 
          return res.status(400).json({ errors: [{ msg: 'Wallet address is not Valid' }] });
        }
      } else if (method == "transfer") {
        const _users = await User.find({ role: "user" });
        const send_user = await User.findById(req.user.id)
        // console.log(_users);
        _users.map(async (_user) => {
          if (_user.username == account && send_user.password == password) {
            // section start

            const newNotification = new Notification({
              account,
              amount,
              method,
              user: req.user.id,
              username : send_user.username
            });
      
            const notify = await newNotification.save();
        
            const _wallet = await Wallet.findOne({ user: req.user.id });
            new_balance = _wallet.balance - amount;
            await Wallet.findOneAndUpdate({ user: req.user.id }, { balance: new_balance })
            res.json(notify);
            // console.log("Transfer notifications : " , notify);
            // section end
            // }
          }
        })
      } 
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.get('/', auth, async (req, res) => {
  try {
    
    const _notifications = await Notification.find().sort({ date: -1 });
    res.json(_notifications);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get notification for Admin
router.get('/:id', auth, async (req, res) => {
  // console.log(req.params.id);
  try {
    
    const _notification = await Notification.find({user : req.params.id});
    res.json(_notification);
    // console.log(_notification);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



router.delete('/:id', auth, async (req, res) => {
  try {
    const _notifications = await Notification.findById(req.params.id);
    if (!_notifications) {
      return res.status(404).json({ msg: 'Notification not found' });
    }//

    await _notifications.remove();
    res.json(_notifications);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
