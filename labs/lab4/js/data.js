// ETHAN PLAGGE
// September 20, 2022

function setup(){
    createCanvas(500, 500);
    background(200);
}

let smiley = {
    radius: 100,
    eyeRadius: 20,
    xbody: 225,
    ybody: 225,
    xLeft: 205,
    yEyes: 215,
    xRight: 245,
    fillColor: "yellow",
    eyeColor: "black",

    //smile attributes
    xSmile: 226,
    ySmile: 235,
    wSmile: 65,
    hSmile: 50,
    startSmile: 0

}

function draw(){
    //main body
    strokeWeight(1);
    fill(smiley.fillColor);
    circle(smiley.xbody, smiley.ybody, smiley.radius);

    //left eye
    fill(smiley.eyeColor);
    circle(smiley.xLeft, smiley.yEyes, smiley.eyeRadius);

    //right eye
    circle(smiley.xRight, smiley.yEyes, smiley.eyeRadius);

    //smile
    noFill();
    strokeWeight(2);
    arc(smiley.xSmile, smiley.ySmile, smiley.wSmile, smiley.hSmile, smiley.startSmile, PI);
}