function setup(){
    createCanvas(800,600);
    background(200);
    noStroke();
}


//function for removing red
function noRed(r, g, b){

    //if the red value does NOT equal 0, this removes it
    if(r !== 0 ){
        fill(0,g,b);
        
    }

    //if the red value does equal 0, it prints as normal
    else{
        fill(r,g,b);
        
    }
}

function draw(){
    noRed(176, 44, 88);
    circle(150, 150, 50);

}