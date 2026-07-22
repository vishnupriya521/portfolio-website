const text = "Priya 👋";

let index = 0;

function typeEffect() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 150);

    }

}

typeEffect();
const darkButton = document.getElementById("darkBtn");

darkButton.addEventListener("click", function(){

document.body.classList.toggle("dark");

});

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;

const email=document.getElementById("email").value;

const message=document.getElementById("message").value;

if(name==""||email==""||message==""){

alert("Please fill all fields.");

}

else{

alert("Message Sent Successfully!");

}

});