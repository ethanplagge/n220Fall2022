// ETHAN PLAGGE
// October 5, 2022

var loop = document.createElement("div");
document.body.appendChild(loop);

//loop that creates the iteration
for(i = 1; i <= 25; i++){

    //in case i is divisible by 3 and 5
    if(i % 3 == 0 && i % 5 == 0){
        loop.innerHTML += " beepbop, ";
    }
    //in case i is divisible by 3
    else if(i % 3 == 0){
        loop.innerHTML += " beep, ";
    }
    //in case i is divisible by 5
    else if(i % 5 == 0){
        loop.innerHTML += " bop,";
    } 
    //other cases
    else{
        loop.innerHTML += " " + i + ",";
    }
   
}