let box = document.getElementById("container");

let thoughts = [
"The answer is obvious",
 "I don't care", 
 "...", 
 "I'm trying to take notes",
 "dude I don't even care"
];

//arrow function
let iCollection = thoughts.filter( 
    (brain) =>  brain.toLowerCase().includes("a")
    );

console.log(iCollection);

if(iCollection.length > 0){
    box.innerHTML = "You failed!";
} else{
    box.innerHTML = "You passed!";
}

//Map
    //modifies elements

//Reduce
    //returns a single number

//foreach
    //loops through all the elements

//filter
    //returns a sub-array

let tally = 0;
let passed = true;

for(var i = 0; i < thoughts.length; i++){
    let brain = thoughts[i];
    if(brain.toLowerCase().includes("-")){
        tally += 1;
        passed = false;
        //if you want to end the function after false occurs, use the break statement
        break;
    }
}

if(passed = true){
    box.innerHTML = "You passed!";
} else{
    box.innerHTML = "You failed!";
}

console.log(passed);