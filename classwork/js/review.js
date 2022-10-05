let myDiv = document.getElementById("myDiv");
let countdown = 10;


function doThing(){
    countdown -= 1;
    myDiv.innerHTML = countdown;

    if(countdown < 1){
        myDiv.innerHTML = "liftoff";
    }
}

