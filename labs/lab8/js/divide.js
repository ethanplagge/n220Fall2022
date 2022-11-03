let response = document.getElementById("number");

function divide(){
    let num = Number(response.value);
        if(num % 7 == 0){
            result.innerHTML = response.value + " is divisible by 7!";
        } else{
            result.innerHTML = response.value + " is NOT divisible by 7!";
        }
}

var result = document.createElement("div");
document.body.appendChild(result);