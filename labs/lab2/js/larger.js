// ETHAN PLAGGE
// September 7, 2022

let radius = 0.5;

function setup(){
    createCanvas(500,500);

}

function draw(){
    fill("white");
    background(143, 141, 199);
    radius += 1;
    if(radius > 100){
        radius = 0.5;
    }
    circle(250, 250, radius);
}