function getInfo(event){
    let answer = event.target.dataset.answer;
    final.innerHTML = "The answer to the question is: " + answer;
}

var final = document.createElement("div");
document.body.appendChild(final);