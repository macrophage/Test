let gamePattern = [];
let userClickPattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];

//game started track
let game=false;
let lvl = 1;

function startOver(){
    lvl = 1;
    gamePattern = [];
    game = false;
}

function nextSequence(){
    userClickPattern = [];
    $("h1").text("Level "+lvl);
    ++lvl;
        let randomNumber=Math.floor(Math.random()*4); 
        let randomChosenColor=buttonColors[randomNumber];
            var randomAudio = new Audio("sounds/"+randomChosenColor+".mp3");
       
        $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(randomChosenColor);
        gamePattern.push(randomChosenColor);
    
    
}

function playSound(name){
    var song= new Audio("sounds/"+name+".mp3");
    song.play();
}

function animation(name){
    
    $("#"+name).addClass("pressed");
    setTimeout(() => {
        $("#"+name).removeClass("pressed")
    }, 100);
   
}

function checkAnswer(currentLevel){
    if(userClickPattern[currentLevel]===gamePattern[currentLevel]){
      
        if(userClickPattern.length===gamePattern.length){
            setTimeout(function () {
                nextSequence();
              }, 750);
        
            }
        
    }
   
    else {

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver();
      }
}

$(document).keydown(function() {
    if(!game)
    {
        game=true;
        
        nextSequence();
    }
    
  });
$(".btn").click(function (e) { 
   let userChosenColor = e.target.id;
   userClickPattern.push(userChosenColor);
   playSound(userChosenColor);
   animation(userChosenColor);

   checkAnswer(userClickPattern.length-1);   
});



