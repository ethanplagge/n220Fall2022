
// ETHAN PLAGGE
// August 27, 2022

function setup(){
    var amogus_yellow = "#b7cc2b";


    //setup for the background
    createCanvas(800,400);
    background("#1f1252");

    //backpack foundation, which will be a rectangle
    strokeWeight (3);
    fill(amogus_yellow);
    rect (450, 190, 40, 80);

    //left leg, which will be a rectangle with rounded edges
    rect(385, 240, 30, 80, 0, 0, 10, 10);

    //right leg, which will be a rectangle with rounded edges
     rect(420, 240, 30, 80, 0, 0, 10, 10);

    //backpack rounded edge
    arc(485, 230, 50, 80, PI + HALF_PI, HALF_PI, OPEN);
    

    //body rectangle, which will be a rectangle

    rect (376, 175, 88, 110, 0, 0, 10, 10);

    //top circle, the cap of the head, which will be a semi-circle
     arc(421, 180, 85, 80, PI, 0, OPEN);
     

    //visor, the glass of the among us character, and will be an ellipse
    fill("#3291a8");
    ellipse (390, 200, 80, 50);

    //visor glint, detail in the visor, will be an ellipse
    noStroke();
    fill("#d1f6ff");
    ellipse (380, 190, 30, 14);
    


    
}