//get the values entered from the html

let firstX = document.getElementById("x1");
let firstY = document.getElementById("y1");
let secondX = document.getElementById("x2");
let secondY = document.getElementById("y2");

//create a div that shares the distance
var distance = document.createElement("div");
document.body.appendChild(distance);


function calculate(){

    //pull numbers from the html
    let x1 = Number(firstX.value);
    let y1 = Number(firstY.value);
    let x2 = Number(secondX.value);
    let y2 = Number(secondY.value);
    
    //formula to calculate the distance
    distance.innerHTML = "Distance = " + Math.sqrt((Math.abs(x1 - x2) * Math.abs(x1 - x2)) + (Math.abs(y1 - y2) * Math.abs(y1 - y2)))

}
