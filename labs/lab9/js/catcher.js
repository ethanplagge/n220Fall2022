let words = document.getElementById("submission");


function checkUp(){
    //splits input into seperate words
    let test = words.value.split(" ");
    //creates tally to show number of times word shows up
    let tally = 0;
    for(i = 0; i < test.length; i++){
        //scrubs through all the words to see if it is a targeted word
        if(test[i] == "water" || test[i] == "tires" || test[i] == "clear"){
            
            tally++;
            result.innerHTML = "A bad word was in your sentence " + tally + " times.";
        } 
    
    }
}

var result = document.createElement("div");
document.body.appendChild(result);