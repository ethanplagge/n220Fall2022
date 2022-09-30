//ETHAN PLAGGE

function setup(){
    createCanvas(800,600);
    background(200);
}

let tv = {
    //tv box attributes
    xBox: 100,
    yBox: 100,
    hBox: 150,
    wBox: 200,
    boxColor: "gray",
    //tv screen attributes
    xScreen: 115,
    yScreen: 115,
    hScreen: 120,
    wScreen: 170,
    //tv antenna
    xStartLine: 200,
    yStartLine: 100,
    xEndLine: 250,
    yEndLine: 25,
    isOn: true
   
}

let flatscreen = {
    //flatscreen attributes
    xBox: 100,
    yBox: 400,
    hBox: 150,
    wBox: 300,
    boxColor: "gray",
    //flatscreen attributes
    xScreen: 115,
    yScreen: 415,
    hScreen: 120,
    wScreen: 270,
    //tv antenna
    xStartLine: 300,
    yStartLine: 400,
    xEndLine: 350,
    yEndLine: 325,
    isOn: false
}

function drawTV(test){
    //tv box  
    fill (test.boxColor);
   rect(test.xBox, test.yBox, test.wBox, test.hBox);
   //tv screen
   if(test.isOn == true){
    fill("blue");
   }
   if(test.isOn == false){
    fill("black");
   }
       rect(test.xScreen, test.yScreen, test.wScreen, test.hScreen);
   //tv antenna
       line(test.xStartLine, test.yStartLine, test.xEndLine, test.yEndLine);

}

function draw(){
    drawTV(tv);
    drawTV(flatscreen);
   
}



  