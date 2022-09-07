
//initial size of circle
let size = 10;


function setup(){
    createCanvas(800,600);
    background("black"); 
    console.log(size); //checking initial size of circle
}

function draw(){

//only occurs when mouse is clicked and the variable is under 50

    if(mouseIsPressed == true && size < 50){
        size = size + 1;
        console.log(size); //checking new size
    }
    circle(mouseX,mouseY,size);
}