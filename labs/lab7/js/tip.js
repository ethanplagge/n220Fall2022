//pull full total from the html

let amount = document.getElementById("change");

//create a new div that reveals the tip
var test = document.createElement("div");
document.body.appendChild(test);


function calculate(){
    //establish tip value
    let tip = Number(amount.value);
    //formula to calculate the tip for 20%, I feel that this seems pretty generous
    test.innerHTML = "Total: $" + amount.value + ", Tip: $" + tip * 0.2;
}