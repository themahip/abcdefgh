const mongoose= require("mongoose");

const Schema= mongoose.Schema;
const modelSchema= new Schema({
    userId:{
        require:true,
        type:String
        
    },
    average:{
        require:true,
        type:String
    }
})

const avg= mongoose.model("avg",modelSchema);
module.exports= avg;