// ETHAN PLAGGE
// September 7, 2022

let radius = 60;

//initial x and y values
let x = 110;
let y = 110;

let speed = 3;

//velocity values for x and y directions
let xdirection = -1;
let ydirection = -1;


function setup(){
    createCanvas(800, 600);
    
}

function draw(){
    background(19, 17, 92);

    //calculates the x/y position by speed and direction
    x += speed * xdirection;
    y += speed * ydirection;

    //checks if the x position has gotten out of bounds,
    //if it is, the direction value is flipped.
    if((x > 800-radius) || (x < radius)){
        xdirection = -xdirection;
    }

    
    //checks if the y position has gotten out of bounds,
    //if it is, the direction value is flipped.
    if((y > 600-radius) || (y < radius)){
        ydirection = -ydirection;
    }


    if(xdirection == 1 && ydirection == 1){
        fill(143, 141, 199); 
        circle(x, y, radius);
    }
    else{
        fill(143, 141, 199);
        circle(x, y, radius);
    }

    console.log(y);

   



   
}