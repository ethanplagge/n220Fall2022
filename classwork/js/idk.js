let cardDiv = document.getElementById("card");
let totalDiv = document.getElementById("total");
let playing = true;
let total = 0;
let CPUtotal = 0;


let cards = [
    {value: 2, name: "2"},
    {value: 3, name: "3", image: ":)" },
    {value: 4, name: "4"},
    {value: 5, name: "5"},
    {value: 6, name: "6"},
    {value: 7, name: "7"},
    {value: 8, name: "8"},
    {value: 9, name: "9"},
    {value: 10, name: "10"},
    {value: 10, name: "J"},
    {value: 10, name: "Q"},
    {value: 10, name: "K"},
    {value: 10, name: "A"},
 ]


/*function shuffle(deckToShuffle){
    let newDeck = [];
    
    for(i = 0; i < cards.length; i++){
        let element = deckToShuffle.splice(i, 1);
        console.log(cards);
    }

    return newDeck;
}*/

//draws card from the deck
function draw(){
    if(playing){
        //player
        let card = cards.pop();

    //displays card to user

    cardDiv.innerHTML = card.name;
    //updates total
    total += card.value;

    //CPU
    card = cards.pop();
    CPUtotal += card.value;
    totalDiv.innerHTML = "You: " + total + ", CPU: " + CPUtotal;


    //checks for loss
    check();
    }
    


}


function check(){
    if(total > 21){
        //games over
        //tell the user its game over
        totalDiv.innerHTML = total + " - is too high, game over!"
        //don't allow more input
        playing = false;
    }
}

function gameOver(){

}