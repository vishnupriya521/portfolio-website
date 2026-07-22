const mongoose = require("mongoose");


const projectSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },


    technology:{
        type:String,
        required:true
    },


    description:{
        type:String
    },


    image:{
        type:String
    },


    github:{
        type:String
    },


    demo:{
        type:String
    }


});


module.exports = mongoose.model(
    "Project",
    projectSchema
);
