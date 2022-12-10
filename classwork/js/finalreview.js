let items = document.getElementsByClassName("test");
for(let i = 0; i < items.length; i++){
    let huh = items[i];
    huh.addEventListener('click', doThing());
}

function doThing(event){
    console.log(event.target);
}
