const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Project = require("./models/Project");
const Contact = require("./models/Contact");


const app = express();


app.use(cors());
app.use(express.json());



// MongoDB Connection

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));




// Home Route

app.get("/", (req, res) => {

  res.send("Welcome to Vishnu Priya's Backend");

});





// Get All Projects

app.get("/projects", async (req, res) => {

  try {

    const projects = await Project.find();

    res.json(projects);


  } catch(error) {

    res.status(500).json({
      message:error.message
    });

  }

});





// Add Project

app.post("/projects", async(req,res)=>{

  try {


    const project = new Project({

      title:req.body.title,

      technology:req.body.technology,

      description:req.body.description,

      image:req.body.image,

      github:req.body.github,

      live:req.body.live

    });


    const savedProject = await project.save();


    res.status(201).json(savedProject);



  }catch(error){

    res.status(400).json({

      message:error.message

    });

  }

});





// Update Project

app.put("/projects/:id", async(req,res)=>{


  try{


    const updatedProject = await Project.findByIdAndUpdate(

      req.params.id,

      req.body,

      {
        new:true
      }

    );


    res.json(updatedProject);



  }catch(error){


    res.status(500).json({

      message:error.message

    });


  }


});





// Delete Project

app.delete("/projects/:id", async(req,res)=>{


  try{


    await Project.findByIdAndDelete(req.params.id);


    res.json({

      message:"Project Deleted Successfully"

    });



  }catch(error){


    res.status(500).json({

      message:error.message

    });


  }


});






// Add Sample Projects

app.get("/addsample", async(req,res)=>{


  try{


    const projects=[


      {

        title:"Portfolio Website",

        technology:"React, Node.js, MongoDB",

        description:
        "Personal portfolio website to showcase skills and projects.",

        image:"https://via.placeholder.com/400",

        github:"https://github.com/yourusername",

        live:"https://yourwebsite.com"

      },


      {

        title:"Smart Travel Companion",

        technology:"AI, Machine Learning, React",

        description:
        "AI based travel recommendation platform.",

        image:"https://via.placeholder.com/400",

        github:"https://github.com/yourusername",

        live:"https://yourwebsite.com"

      }


    ];



    await Project.insertMany(projects);



    res.send("Projects Added Successfully");



  }catch(error){


    res.status(500).send(error.message);


  }


});






// Contact Form API

app.post("/contact", async(req,res)=>{


  try{


    const contact = new Contact({


      name:req.body.name,


      email:req.body.email,


      message:req.body.message


    });



    const savedContact = await contact.save();



    res.status(201).json(savedContact);



  }catch(error){


    res.status(500).json({

      message:error.message

    });


  }


});






const PORT = process.env.PORT || 5002;
app.get("/contact", async(req,res)=>{

  try{

    const contacts = await Contact.find();

    res.json(contacts);

  }
  catch(error){

    res.status(500).json({
      message:error.message
    });

  }

});


app.listen(PORT,()=>{


  console.log(`Server running at http://localhost:${PORT}`);


});