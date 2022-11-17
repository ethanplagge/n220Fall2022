let test = document.getElementsByClassName("square");

function itsClicked(event){
    let cooler = event.target.dataset.color;
    event.target.style.backgroundColor = cooler;
}

