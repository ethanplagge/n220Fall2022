    
    let xPos = 50;
    let yPos = 50;
    let type = "Hello world";

function setup(){
    createCanvas(400,400);
    
}

function draw(){


    xPos += 50;
    yPos *= 3;

    type += "d";

    text(type, xPos, yPos);
   

    //Condition for if the mouse is in the top left quadrant.
    if(mouseX < 160 && mouseY < 160){
        background(200);
        fill(252, 119, 3);
        circle(360, 360, 40);
    }

    //Condition for if the mouse is in the bottom right quadrant.
    if(mouseX > 160 && mouseY > 160){
        background(200);
        fill(252, 119, 3);
        circle(40, 40, 40);
    }

    //Condition for if the mouse is in the bottom left quadrant.
    if(mouseX < 160 && mouseY > 160){
        background(200);
        fill(252, 119, 3);
        circle(360, 40, 40);
    }

    //Condition for if the mouse is in the top right quadrant.
    if(mouseX > 160 && mouseY < 160){
        background(200);
        fill(252, 119, 3);
        circle(40, 360, 40);
    }
    
}