// ETHAN PLAGGE
// September 29, 2022

let height = 100;
let width = 100;


//creation of the square
let over = document.createElement("div");
over.style.height = height + "px";
over.style.width = width + "px";
over.style.backgroundColor = "blue";
document.body.appendChild(over);


//hover mouse function
over.onmouseover = function hover(){
    over.style.backgroundColor = "black";
}


//off the square function
over.onmouseout = function hover(){
    over.style.backgroundColor = "blue";
}