function setup(){
    createCanvas(800, 600);
    noStroke();
}

function draw(){
    background(200);

    //draws car with the coordinates originating with the mouse
   drawCar(mouseX, mouseY);
}



function drawCar(x,y){

    fill(138, 18, 50);
    //main body
    rect(x, y, 140, 40);
    //top part of the car
    rect(x + 35, y - 30, 70, 40);
    //window
    fill(97, 87, 212);
    rect(x + 35, y - 30, 30, 30);
    //wheels
    fill(100, 100, 100);
    circle(x + 35, y + 40, 30);
    circle(x + 100, y + 40, 30);
}




