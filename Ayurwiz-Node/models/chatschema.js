const mongoose = require('mongoose')
const chatSchema = new mongoose.Schema({
    room:{
        type:String,
        required:true,
    },
    chat:{
        type:JSON,
        required:true
    },
    
});
const Msg= mongoose.model("msg",chatSchema);
module.exports=Msg;