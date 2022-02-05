const mongoose= require("mongoose");

const Schema= mongoose.Schema;

const queSchema= new Schema({
userId:{
    type:String,
    required:true
},
questions:[
    {
        question:"",
        answer:{
            type:String,
            required:true
        }
    },
    {
        question:"",
        answer:{
            type:String,
            required:true
        }

    },{
        question:"",
        answer:{
            type:String,
            required:true
        }
    },
    {
        question:"",
        answer:{
            type:String,
            required:true
        }
    },
    {
        question:"",
        answer:{
            type:String,
            required:true
        }
    }
]

});

const Ques= mongoose.model("Ques",queSchema);
module.exports= Ques;