let duckElements = document.getElementsByClassName("duck");
let duckidEl = document.getElementsByClassName("duckid");

Array.from(duckElements).forEach( function(duck, index) {
   
    duck.addEventListener("click", function() {
        if(index === 0) {
            duckidEl.innerHTML = "winner!";
        }
        else{
            duckidEl.innerHTML = index;
        }
        duck.style.opacity = .5;
    })
})

/* This is the same as this


for(let i = 0; i < duckElements.length; i++){
    let duck = duckElements[i];
    duck.style.display = "none";
}*/