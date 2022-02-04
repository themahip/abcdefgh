const express=require("express");
const cookieParser = require("cookie-parser");
const jwt= require("jsonwebtoken");
const User= require("../models/userSchema");
const dotenv= require("dotenv");
const app= express();

app.use(cookieParser());
dotenv.config({path:"../config.env"});

const auth= async (req,res,next)=>{

    try {
        
        const token= req.cookies.jwt;
        console.log(token);
        console.log(token);
        
        const sec=process.env.SECRET_KEY;
        const verifyUser= jwt.verify(token,sec);
        
        const user= await User.findOne({_id:verifyUser._id,"tokens.token":token});
        if(!user){
            res.status(401).json("user not verified")
        }
        req.user=user;
    
        next();
    } catch (error) {
        
       res.status(401).json("unautorized user please login");
    }
       
    
    }
    
    module.exports=auth;
