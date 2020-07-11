const game = () => {
  let pScore=0;
  let cScore=0;


  //Start the game
  const startGame = () =>{
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");


    playBtn.addEventListener("click", () =>{
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //Play match
  const playMatch = () =>{
    const options = document.querySelectorAll(".options button")
    const playerHand = document.querySelector(".player-hand")
    const computerHand = document.querySelector(".computer-hand")
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option=>{
      option.addEventListener("click", function(){
        const computerNumber = Math.floor(Math.random()*3);
        const computerChoice = computerOptions[computerNumber];


        //Update images
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
      });
    });
  };

const compareHands = (playerChoice, computerChoice) => {
//Update the text.
const winner =document.querySelector('.winner');
//Checking for a tie
if(playerChoice === computerChoice){
  winner.textContent = 'It is a tie';
  return;
}
//Check for rock
 if(playerChoice === 'rock'){
   if(computerChoice === 'scissors'){
     winner.textContent = 'Player Wins';
     return;
   }else {
     winner.textContent = 'Computer Wins';
     return;
   }
 }
//Check for Paper
if(playerChoice === 'paper'){
  if(computerChoice === 'rock'){
    winner.textContent = 'Player Wins';
    return;
  }else {
    winner.textContent = 'Computer Wins';
    return;
  }
}
//Check for Scissors
if(playerChoice === 'scissors'){
  if(computerChoice === 'paper'){
    winner.textContent = 'Player Wins';
    return;
  }else {
    winner.textContent = 'Computer Wins';
    return;
  }
}

}




  // Calling the inner function
  startGame();
  playMatch();
};

// initiate the main function
game();
