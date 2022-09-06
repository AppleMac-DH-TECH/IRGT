const express = require('express');
const router = express.Router();
// const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');
const auth  = require('../../../middleware/auth');
const User = require('../../../models/User');




// Admin password Chage mode

router.post(
    '/', auth ,
    async (req, res) => {

      try {
            const {oldPassword , newPassword , confirmPassword} = req.body;
            const _user = await User.findById(req.user.id).select();
       if(_user.password !== oldPassword ){
            return res.status(400).json({ errors: [{ msg: 'Please type the correct password' }] });
        }else if(newPassword !== confirmPassword){
            return res.status(400).json({ errors: [{ msg: 'Password is not Match' }] });
        }else if(oldPassword == newPassword){
            return res.status(400).json({ errors: [{ msg: 'Please choose other Password' }] });
        }else if(!oldPassword || !newPassword || !confirmPassword){
            return res.status(400).json({ errors: [{ msg: 'Please fill the input field' }] });
        }
        else if(oldPassword == _user.password){
            await User.findOneAndUpdate({ _id:req.user.id} , { password : newPassword});
            const new_admin = await User.findById(req.user.id);
            console.log(new_admin);
            res.json(new_admin);
        }
        // if (_wallet) {
        //   return res.status(400).json({ errors: [{ msg: 'Wallet Address exists' }] });
        // } else if (password == user.password) {
        //   // console.log('password match');
        //   const balance = 0;
        //   const profit = 0;
        //   const newWallet = new Wallet({
        //     address,
        //     password,
        //     balance, 
        //     profit,
        //     user: req.user.id
        //   });
        //   const wallet = await newWallet.save();
        //   res.json(wallet);
        // } else if(password !== user.password){ 
        //   return res.status(400).json({ errors: [{ msg: 'Password is not Correct' }] });
        // }
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
  );


  module.exports = router;