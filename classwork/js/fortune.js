let myButton = document.getElementsByClassName("future");

let newFortune = document.getElementById("addition");

let prophetic = ["You will have a good day", "Your second cousin is currently possessed", "Your birthday is May 24th", "You don't want to know what the original fortune said", "your house is going to explode", "You will have a bad day", "Your Zodiac sign is a Gemini"]


function getRandomInt() {  
    return Math.floor(Math.random() * prophetic.length );
}

var fortune = document.createElement("div");
document.body.appendChild(fortune);

function oracle(){
    
    fortune.innerHTML = prophetic[getRandomInt()];
   
}



