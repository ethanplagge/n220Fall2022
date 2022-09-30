let words = ["Indiana", "University", "Purdue", "University", "Indianapolis"];

for(i = 0; i < words.length; i++){   
    console.log(words[i].toUpperCase() + "! Yeah!");
}



for(i = 1; i <= 10; i++){
    console.log(i);
}

let num1 = 0;
let num2 = 1;
let sum = num1 + num2;


for(i = 0; i < 20; i++){
    console.log(num1);
    sum = num1 + num2
    num1 = num2;
    num2 = sum;
}

for(i = 0; i <= words.length; i++){   
    console.log(words[words.length - i]);
}
