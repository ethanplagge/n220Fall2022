let test = document.getElementById("square");
let r = 0;
let g = 0;
let b = 0;
test.style.backgroundColor = "rgb(" + r + "," + g + "," + b +" )";

function addRed(event){
    let origin = Number(event.target.dataset.val);
    r += origin;
    test.style.backgroundColor = "rgb(" + r + "," + g + "," + b +" )";
    final.innerHTML = "Current rgb: ( " + r + ", " + g + ", " + b + ")";
}

function addGreen(event){
    let origin = Number(event.target.dataset.val);
    g += origin;
    test.style.backgroundColor = "rgb(" + r + "," + g + "," + b +" )";
    final.innerHTML = "Current rgb: ( " + r + ", " + g + ", " + b + ")";
}

function addBlue(event){
    let origin = Number(event.target.dataset.val);
    b += origin;
    test.style.backgroundColor = "rgb(" + r + "," + g + "," + b +" )";
    final.innerHTML = "Current rgb: ( " + r + ", " + g + ", " + b + ")";
}



var final = document.createElement("div");
document.body.appendChild(final);