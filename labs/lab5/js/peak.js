// ETHAN PLAGGE
// September 29, 2022

//initializing variables

let height = 200;
let width = 200;


//square creation 
let square = document.createElement("div");
square.style.height = height + "px";
square.style.width = width + "px";
square.style.backgroundColor = "green";
document.body.appendChild(square);


//function to make square larger
square.onclick = function getBig(){
    height*= 1.1;
    width*= 1.1;
    square.style.height  = height + "px";
    square.style.width = width  + "px";
}