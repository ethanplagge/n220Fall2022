//application vars
let dvWheel = document.getElementById("wheel");
let colors = [ "#f9ff40", "#ffcc40", "#ff821c", "#ff591c", "#d11b1b", "#940f5a",  "#611069", "#4d0e9e", "#1430e3", "#14d9e3", "#05a80a", "#b4fa3c" ];
let test = document.getElementById("harmonyDisplay next")
let val = "";
let compliment = "";

//setup
colors.forEach( function(color, i) {
  let rot = (i / colors.length) * 360;
  
  let newSelection = document.createElement("div");
  newSelection.style.backgroundColor = color;
  newSelection.style.transform = `rotate(${rot}deg) translate(8em)`;
  newSelection.dataset.color = color;
  //newSelection.innerHTML = color;
  newSelection.classList.add("option");
  wheel.appendChild(newSelection);
  newSelection.addEventListener("click", function(){
    val = colors[i];
    compliment = colors[i + 6];
  })
  //add event listener to newSelection +5

    
})

//functions
document.getElementById("complementary").addEventListener("click", function(){
   test.innerHTML = "You selected " + val + ", your complimentary color is " + compliment;  
})
//make handler for clicking on new selection
