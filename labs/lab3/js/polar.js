function setup(){
    createCanvas(800, 600);
    background(200);
}


function draw(){
   let res = polarPoint(10);
   translate(100, 100);
   circle(res.x, res.y, 7);

}

function polarPoint(r){
    let x = r * Math.sin(mouseX);
    let y = r * Math.cos(mouseX);
    return createVector(x,y);
}