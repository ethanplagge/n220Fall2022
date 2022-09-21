//demonstration of an object
let dude = {
    name: "Ethan",
    age: 48,
    hungry: true,
    fashionSense: 1,
    isCool: function() {
        console.log( this.name + " is cool")
    }
}

dude.age++;
dude.fashionSense = 10;

function setup(){
    createCanvas(800,600);
}