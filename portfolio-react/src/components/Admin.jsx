import { useState } from "react";
import axios from "axios";


function Admin(){


const [project,setProject] = useState({

title:"",
technology:"",
description:"",
image:"",
github:"",
demo:""

});



const handleChange=(e)=>{

setProject({

...project,

[e.target.name]:e.target.value

});

};




const addProject=async(e)=>{

e.preventDefault();


try{


await axios.post(

"http://localhost:5002/projects",

project

);


alert("Project Added Successfully!");



setProject({

title:"",
technology:"",
description:"",
image:"",
github:"",
demo:""

});



}

catch(error){

console.log(error);

alert("Error Adding Project");

}


};




return(

<div className="
min-h-screen
bg-gray-100
p-10
">


<h1 className="
text-4xl
font-bold
text-center
mb-10
">

Admin Dashboard

</h1>



<form

onSubmit={addProject}

className="
max-w-xl
mx-auto
bg-white
p-8
rounded-xl
shadow
space-y-4
"

>


<input

name="title"

value={project.title}

onChange={handleChange}

placeholder="Project Title"

className="
w-full
p-3
border
rounded
"

/>



<input

name="technology"

value={project.technology}

onChange={handleChange}

placeholder="Technology Used"

className="
w-full
p-3
border
rounded
"

/>



<textarea

name="description"

value={project.description}

onChange={handleChange}

placeholder="Project Description"

className="
w-full
p-3
border
rounded
"

/>



<input

name="image"

value={project.image}

onChange={handleChange}

placeholder="Image URL"

className="
w-full
p-3
border
rounded
"

/>



<input

name="github"

value={project.github}

onChange={handleChange}

placeholder="Github Link"

className="
w-full
p-3
border
rounded
"

/>



<input

name="demo"

value={project.demo}

onChange={handleChange}

placeholder="Live Demo Link"

className="
w-full
p-3
border
rounded
"

/>



<button

className="
bg-blue-600
text-white
px-6
py-3
rounded-lg
w-full
"

>

Add Project

</button>



</form>


</div>


);


}


export default Admin;