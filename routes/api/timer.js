const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Timer = require('../../models/Timer');
const Wallet = require("../../models/Wallet");
// @route    POST api/timer/addTimer
// @desc     ADD TIMER
// @access   Public
router.post(
  '/', auth ,
  async (req, res) => {

    try {
        const newTimer = new Timer({
            user: req.user.id,
            current: Date.now(),
            timerId: req.body.timerId,
            status: "started",          

        });
// Wallet remove
        
        let type = req.body.timerId;
        // let profit =  (Math.floor(Math.sqrt(type)) * 0.5 + type / 2);
        const _wallet = await Wallet.findOne({ user: req.user.id });
        let price =_wallet.balance -  (type % 2 ? 100 : 500) * Math.pow(10, Math.floor((type -0.5) / 2));
        console.log(price);
        await Wallet.findOneAndUpdate({ user: req.user.id }, { balance : price });
        console.log(_wallet);
        // res.json(_wallet);


        // if (req.body.timerId == 1) {

        // } else if (req.body.timerId == 1.5) { 

        // } else if (req.body.timerId == 1.5) { 

        // } else if (req.body.timerId == 1.5) { 

        // }
// 
        const _timer = await newTimer.save();
        console.log(_timer);
        res.send("success");
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
router.delete(
    '/:id', auth ,
    async (req, res) => {  
      try {          
          const timers = await Timer.remove({ user: req.user.id, timerId: req.params.id });
          res.json(timers);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
);
  
  router.get('/:id'
    , auth ,
    async (req, res) => {  
      try {          
          const timer = await Timer.findOne({ user: req.user.id, timerId: req.params.id });
          console.log(timer);
          if(timer != null)
          {
              const currentTime = new Date();           
              const oldTime = new Date(timer.current);
              const time = Math.round((currentTime.getTime()-oldTime.getTime())/1000);
            //   console.log(currentTime.getTime()-Date(timer.current).getTime());
            //   res.send(currentTime - timer.currentTime);
            //   res.send("uhh");
              res.send(String(time));
          }
          else {
              res.send("Empty");
          }
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
  );


module.exports = router;
