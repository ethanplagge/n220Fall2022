// ETHAN PLAGGE
// September 29, 2022

var mcDiv = document.createElement("div");
mcDiv.innerHTML = "div";
document.body.appendChild(mcDiv);

//function for lengthening the innerHTML
mcDiv.onclick = function getLong(){
    mcDiv.innerHTML += "div";
}
