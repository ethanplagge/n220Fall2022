function setup(){
    createCanvas(800,800);
    background(200);
}

function drawFace(x,y){
    circle(10 + x, 10 + y, 10);
    circle(30 + x, 10 + y, 10);
    circle(20 + x, 30 + y, 20);
}

//call the function
function draw(){

drawFace(400,400);
drawFace(10,10);
drawFace(400,10);
//drawFace(mouseX, mouseY);

}