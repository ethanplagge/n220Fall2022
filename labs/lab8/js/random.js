function number(){
    let final = mathy();

    newDiv.innerHTML = "Your random number is " + final;
}

function mathy(){
    let num = Math.floor(Math.random() * 10) + 1;
    return num;
}

var newDiv = document.createElement("div");
document.body.appendChild(newDiv);