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

  // Calling the inner function
  startGame();
};

// initiate the main function
game();
