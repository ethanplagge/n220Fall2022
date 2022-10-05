// ETHAN PLAGGE
// October 5, 2022


//array of favorite things
let favorites = ["Banana Peels", "Potted plants", "Car rear view mirrors", "Beetles", "Lightbulbs"]


for(i = 0; i < favorites.length; i++){
    //creates a seperate div for each iteration
    var cool = document.createElement("div");
        document.body.appendChild(cool);
    //writes out the sentence
    cool.innerHTML = favorites[i] + ", is one of my favorite things";
}