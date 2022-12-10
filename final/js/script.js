let container = document.getElementById("container");
let playing = true;



//checks on click to see if square selected is a mine, and checks surrounding spaces
function checkUp(board, selection, index){
    //value that stores the number of neighboring mines
    let tally = 0;
    
    //checks space to the right
        if(board[selection][index + 1] == 1){
            tally++;
        }
    //checks space to the left
        if(board[selection][index - 1] == 1){
            tally++;
        }
    //checks space to the bottom
    //to ensure that the selection stays within the bounds of the array, parameters of 0 and 12 need to be met
    if(selection != 12){
        if(board[selection + 1][index] == 1){
            tally++;
        }
    }
    //checks space to the top
    if(selection != 0){
        if(board[selection - 1][index] == 1){
            tally++;
        }
    }
    //checks the space in the upper left
    if(selection != 0){
        if(board[selection - 1][index - 1] == 1){
            tally++;
        }
    }
    //checks the space in the upper right
    if(selection != 0){
        if(board[selection - 1][index + 1] == 1){
            tally++;
        }
    }
    //checks the space in the bottom left
    if(selection != 12){
        if(board[selection + 1][index - 1] == 1){
            tally++;
        }
    }
    //checks the space in the bottom right
    if(selection != 12){
        if(board[selection + 1][index + 1] == 1){
            tally++;
        }
    }
    if(tally == 0){
        return "";
    }

    //returns the number of mines adjacent to the space
  return tally;
}


//function if a mine is clicked, and a game Over Screen
function gameOver(){
    //creates div to reveal to the player they have lost the game
    let endGame = document.createElement("div");
        document.body.appendChild(endGame);
        endGame.innerHTML = "Oh rats, it looks like you hit a mine!";

    //creates a button that refreshes the page, which restarts the game
    let refresher = document.createElement("button");
        document.body.appendChild(refresher);
        refresher.innerHTML = "Click to try again!";
        refresher.addEventListener("click", function (){
            window.location.reload();
        })
    
    //changing this value ensures that the player CANNOT keep clicking squares after the game is lost
    playing = false;

}

//the game board (can be changed to make unique boards)
let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    
    
]


//randomly assigns values to spaces to become mines (17% is the average amount for Minesweeper)
board.forEach(
    (row, selection) => {
        //this goes through each row and element, and assigns it a value of 0 or 1 (1 being a mine)
        board[selection].forEach((element, index) => {
            if(Math.random() < 0.17){
                board[selection][index] = 1;
            }
             
        })
    }
)

//creates the squares for the board
board.forEach(
    //creates the horizontal rows for the board
    (row, selection) => {
        let horizontal = document.createElement("div");
        //these rows are given the class name of "row"
        horizontal.setAttribute('class', 'row');
        container.appendChild(horizontal);

        //creates the spaces inside of the rows
        board[selection].forEach(
            (element, index) => {
                let space = document.createElement("div");
                //these spaces are given the class name of "element"
                space.setAttribute('class', 'element');
                //assigns a custom value of a space being unopened
                space.setAttribute('data-opened', "unopened");
                //assigns a custom value of a space being unflagged
                space.setAttribute('data-flagged', 'unflagged');
                horizontal.appendChild(space);


                //CLICK FUNCTION
                space.addEventListener("click", function(){
                    //protocol if a mine is selected
                    if(element == 1 && playing == true){
                    space.style.backgroundColor = "red";
                    gameOver();
                    } 
                    //protocol if an empty space is selected
                    else{
                        //ensures that you have not lost the game already
                        if(playing){
                            space.style.backgroundColor = "white";
                            //runs through the checking function, and updates the HTML
                            space.innerHTML = checkUp(board, selection, index);
                            //changes the custom data set to opened
                            space.dataset.opened = "opened"; 
                        }}
                })

                //FLAGGING FUNCTION
                //only occurs when user right clicks a space
                space.addEventListener('contextmenu', (ev) => {
                    //prevents the options tab from opening on the browser
                    ev.preventDefault();

                    //this only allows unopened squares to be flagged
                    if(space.dataset.opened == "unopened" && playing == true){

                        //this allows unopened squares to be flagged and unflagged
                        if(space.dataset.flagged == "unflagged"){
                            space.style.backgroundColor = "green";
                            space.dataset.flagged = "flagged";
                        } else{
                            space.style.backgroundColor = "gray";
                            space.dataset.flagged = "unflagged";
                        }
                    }
                })
            }
        )
    }
)










