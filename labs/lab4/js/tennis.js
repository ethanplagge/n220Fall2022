// ETHAN PLAGGE
// September 20, 2022

let left = {
    x: 100,
    y: 100,
    width: 100,
    height: 300,
    color: "#8a1d19"

}

let right = {
    x: 300,
    y: 100,
    width: 100,
    height: 150,
    color: "#755bba"
}

function setup(){
    createCanvas(500, 500);
    background(200);
}

function draw(){
    background(200);
    fill(left.color)
    rect(left.x, left.y, left.width, left.height);
    fill(right.color)

    rect(right.x, right.y, right.width, right.height);

    if(keyIsDown(UP_ARROW)){
        left.y--;
        right.y++;
    }

    if(keyIsDown(DOWN_ARROW)){
        left.y++;
        right.y--;
    }

    if(keyIsDown(LEFT_ARROW)){
        left.x++;
        right.x--;
    }

    if(keyIsDown(RIGHT_ARROW)){
        left.x--;
        right.x++;
    }
}