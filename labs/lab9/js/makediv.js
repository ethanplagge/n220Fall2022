
//array values
let props = [
//color, height, width
[ "#ff0000", "100px", "300px" ],

[ "#ffff00", "200px", "200px" ],

[ "#ff0000", "300px", "100px" ],
   
   ];

function create(){
    //loop that creates the amount of divs equal to the arrays
    for(i = 0; i < props.length; i++){
        let test = document.createElement("div");
        document.body.appendChild(test);

        //decides properties of the divs
        test.style.backgroundColor = props[i][0];
        test.style.height = props[i][1];
        test.style.width = props[i][2];
    }
    
}