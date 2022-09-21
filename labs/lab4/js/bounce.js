// ETHAN PLAGGE
// September 20, 2022



//creation of object, ball
let ball = {
    radius: 60,
    //initial x and y values
    x: 110,
    y: 110,
    //set the speed
    speed: 3,
    //velocity values for x and y directions
    xdirection: -1,
    ydirection: -1
}



function setup(){
    createCanvas(800, 600);
    
}

function draw(){
    background(19, 17, 92);

    //calculates the x/y position by speed and direction
    ball.x += ball.speed * ball.xdirection;
    ball.y += ball.speed * ball.ydirection;

    //checks if the x position has gotten out of bounds,
    //if it is, the direction value is flipped.
    if((ball.x > 800-ball.radius) || (ball.x < ball.radius)){
        ball.xdirection = -ball.xdirection;
    }

    
    //checks if the y position has gotten out of bounds,
    //if it is, the direction value is flipped.
    if((ball.y > 600-ball.radius) || (ball.y < ball.radius)){
        ball.ydirection = -ball.ydirection;
    }


    if(ball.xdirection == 1 && ball.ydirection == 1){
        fill(143, 141, 199); 
        circle(ball.x, ball.y, ball.radius);
    }
    else{
        fill(143, 141, 199);
        circle(ball.x, ball.y, ball.radius);
    }

}