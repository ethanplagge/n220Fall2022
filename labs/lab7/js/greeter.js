//pull the name from the html

let greeting = document.getElementById("name");


//create a div that shows the greeting
var test = document.createElement("div");
document.body.appendChild(test);

function welcome(){
    //function that combines the name from the html and "Welcome"
    test.innerHTML = "Welcome " + greeting.value;
}