const express= require("express");
const router= express.Router();
const axios= require("axios");
const mongoose= require("mongoose");
const avg=require("../models/aimodeluser");
const auth= require("../middleware/auth");
const User= require("../models/userSchema");

router.post("/flask api",auth,async(res,res)=>{
   
   const user= req.user;
const User= findOne({email:user.email});


   
var postData = await JSON.stringify({
    "Education": "No formal education",
           "Sex":"Male",
           "Career Fields": "education",
           "Relationship Status": " “TALKING TO” SOMEONE",
           "Hobbies": "Martial Arts, Calligraphy",
           "Age": "34"
});



axios.post("https://flask-matchmaking-server2.azurewebsites.net/predict",postData).then(res=>{

   let prediction = res.data.prediction;


   let length = prediction.length;
   let sum=0;
   for(let i=1; i<length;i=i+2){
       sum+=prediction[i];
   }
let value= parseInt(sum);


abc=0
while (value) {
   abc += value % 10;
   value = Math.floor(value / 10);
}

const average= abc/10;
console.log(average);

});


const newAvg= new avg({
   userId:User._id,
   average:average,
})

    
});
module.exports= router;


