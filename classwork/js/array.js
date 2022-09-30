let colors = ["red", "blue", "green", "yellow", "purple", "orange", "gray", "brown"];

console.log(colors);

/*let a = 0;
while(a < 5){
    console.log("hi" + a);
    a++;
}*/

/*for(let i = 0; i < colors.length; i++){
    console.log("My favorite color is " + colors[i]);
}*/


for(let i = 0; i < colors.length; i++){
    let aDiv = document.createElement("div");
    aDiv.innerHTML = colors[i];
    aDiv.style.backgroundColor = colors[i];
    aDiv.style.height = "100px";
    aDiv.style.width = "150px";
    document.body.appendChild(aDiv);
}



function placeDiv(){

}