const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const cookieParser= require("cookie-parser");
const validator = require("email-validator");
const User = require("../models/userSchema");
const { rawListeners } = require("../models/userSchema");
const { route } = require("./get");

const router = express.Router();
router.use(cors());

router.use(express.json());
router.use(cookieParser());

router.post("/signup", async (req, res) => {
  const { name, email, password, cpassword } = req.body;
  console.log(req.body);

  if (!name || !email || !password || !cpassword) {
    res.status(200).send("Please fill in all the places");
  }

  else if (password !== cpassword) {
    res.status(200).send("Password didn't match");
  }

  else if (password.length < 8) {
    res.status(200).send("Password must be greater than 8 character");
  } else if (!validator.validate(email)) {
    res.status(200).send("email donot validate");
  } else {
    const hashPassword = await bcrypt.hash(password, 10);
    
    const user = await User.findOne({ email: email });
    if (user) {
      res.status(200).send("email already exist");
    } else {
      const newUser = await new User({
        name,
        email,
        hashPassword
      });
      newUser.save((err) => {
        if (err) {
          console.log(err);
        } else {
          res.json("")
          console.log("Saved");
        }
      });
    }
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(200).json("fill well")
  } else {
    const user = await User.findOne({ email: email });
    
    if (!user) {
      res.status(200).json("email not registered")
    } else {
      const isMatch = await bcrypt.compare(password, user.hashPassword);
      if (isMatch) {
        
        const token = await user.generateAuthToken();
        console.log(token);       
        res.cookie("jwt",token,{
          expire: new Date(Date.now() + 5000000),
          // httpOnly: true,
          // secure:true  --only can be used in production version. So uncomment when deploying..
        });
        
        res.json("");
      } else {
       res.status(200).json("password didnt match");
      }
    }
  }
});

module.exports = router;
