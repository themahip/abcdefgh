const express= require("express");
const Ques= require("../models/ques");
const auth= require("../middleware/auth");
const router = express.Router();

router.post("/Questionnaire",auth,(req,res)=>{

    const {a,b,c,d,e,f,g,h}=req.body;
    user= req.user;
    console.log(user);
    userId=user._id;

    if(!a || !b || !c || !d || !e || !f || !g || !h){
        res.status(200).send("Please fill in all the places");
    }
    else{
        const newAns= new Ques({
            userId:userId,
            
        })
    }
})
module.exports= router;
