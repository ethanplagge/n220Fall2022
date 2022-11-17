let playButtons = document.getElementsByClassName("play");
//let music = document.getElementById("etc");
//let timeoutId;

for(i = 0; i < playButtons.length; i++){
    playButtons[i].addEventListener("click", function() {
        let startTime = Number (event.target.dataset.start);
        //music.currentTime = startTime;
        //music.play();
        //clearTimeout(timeoutId);
        //timeoutId = setTimeout(function(){
            //music.pause();
        //}, 2000);
    })
}