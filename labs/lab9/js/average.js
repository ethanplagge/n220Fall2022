let inputNum = document.getElementById("numLock");


function average(){
    //takes input values and makes array, and makes them numbers
    let test = inputNum.value.split(",").map(Number);
    //value for the total sum
    let sum = 0;
    //final value
    let val = 0;
        //loop to calculate total sum
        for(i = 0; i < test.length; i++){
         sum += test[i];
        }
        //calculate average
        val = sum / test.length;
    result.innerHTML = "Congrats! The average is " + val + "!";
}

var result = document.createElement("div");
document.body.appendChild(result);

