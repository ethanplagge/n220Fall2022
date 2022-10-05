// ETHAN PLAGGE
// October 5, 2022

var loop = document.createElement("div");
document.body.appendChild(loop);

//loop for iteration
for(i = 1; i <= 5; i++){
    //use the i variable, plus 000, kind of cheating, but it works
    loop.innerHTML += i + "000, ";
}