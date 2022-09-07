// ETHAN PLAGGE
// September 7, 2022

    function setup(){
        createCanvas(400,300);

    }

    function draw(){
        
        if(mouseX < 200){
            background(28, 19, 97);
            fill(152, 144, 209);
            stroke("white");
            circle(mouseX, mouseY, 40);
        }

        else{
            background(79, 13, 26);
            fill(181, 53, 78);
            stroke("white");
            circle(mouseX, mouseY, 40);    
        }
    }