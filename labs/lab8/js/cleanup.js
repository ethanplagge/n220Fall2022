let response = document.getElementById("word");


function clean(){
    let wordle = response.value.split('');
    let val = "";
    for(i = 0; i < wordle.length; i++){
        if(wordle[i] == '#'){
         wordle[i] = "";
        }
        val += wordle[i];
    }
    final.innerHTML = val;
}

var final = document.createElement("div");
document.body.appendChild(final);
