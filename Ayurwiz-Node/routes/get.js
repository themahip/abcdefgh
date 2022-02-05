const express= require("express");
const router= express.Router();
const cookieParser= require("cookie-parser");
const auth= require("../middleware/auth");

router.use(cookieParser());
router.get("/ayurwiz/dashboard",auth,(req,res)=>
{
res.send(req.user);
});

module.exports=router;
