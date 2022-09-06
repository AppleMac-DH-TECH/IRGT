const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  '/',
  check('username', 'Username is required').exists(),
  check('password', 'Password is required').exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    //Check admin
    // const _user =await User.findOne({role : 'admin'});
    // console.log("admin : " , _user);

    try {
      let user = await User.findOne({ username });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User cannot find' }] });
      }
      

      // const isMatch = await bcrypt.compare(password, user.password);

      if (password != user.password) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      } 

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '24h' },
        (err, token) => {
          if (err) throw err;
          res.json({ token,id:user.id , user });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
// 


module.exports = router;
