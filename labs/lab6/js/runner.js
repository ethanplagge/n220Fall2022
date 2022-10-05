// ETHAN PLAGGE
// October 5, 2022

let scores = [12, 30, 48]

//loop for iteration, but exclude the highest value by using the length - 1
for(i = 0; i < scores.length - 1; i++){
    var runners = document.createElement("div");
    document.body.appendChild(runners);
    //prints out values
    runners.innerHTML += scores[i] + " ";
}