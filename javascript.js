// create function getComputerChoice that returns rock paper or scissors randomly
function getComputerChoice() {
  const randomOfThree = Math.ceil(Math.random() * 3);
  switch (randomOfThree) {
    case (1):
      return 'rock';
    case (2):
      return 'paper';
    case (3):
      return 'scissors'
  }
}

// create function getHumanChoice based on the user input will return one of the choices: rock, paper, scissors
function getHumanChoice() {
  let humanChoice = null;
  do {
    humanChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();
    if (humanChoice !== 'rock' 
        && humanChoice !== 'paper' 
        && humanChoice !== 'scissors') {
      console.log('Not a valid choice');
    }

  } while (humanChoice !== 'rock' 
            && humanChoice !== 'paper' 
            && humanChoice !== 'scissors')
  
  return humanChoice;
}


// create function playGame that calls playRound 5 times and declares the winner at the end.
function playGame() {
  // create variable humanScore to keep track of the human's wins
  let humanScore = 0;
  // create variable computerScore to keep track of the computer's wins
  let computerScore = 0;

  for (i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    playRound();
    console.log(`Current Score`);
    console.log(`You: ${humanScore} Computer:${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log('You win the Game!');
  } else if (computerScore > humanScore) {
    console.log('Computer wins the Game!');
  } else {
    console.log(`The Game is a tie!`);
  }


  // create function playRound that plays one round of rock paper scissors
  function playRound() {
    //    create variable humanChoice which contains the choice of the human
    //    create variable computerChoice which contains the choice of the computer
    const humanChoice = getHumanChoice().toLowerCase();
    const computerChoice = getComputerChoice().toLowerCase();

    //    compare the choices and the choices should be case-insensitive
    if (humanChoice === computerChoice) {
      console.log(`It's a tie!`);
    } 
    // human win conditions
    else if (humanChoice == 'rock' && computerChoice == 'scissors')  {
      console.log(`You win the round! Rock beats scissors!`)
      humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
      console.log(`You win the round! Paper beats rock!`)
      humanScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
      console.log(`You win the round! Scissors beats paper!`)
      humanScore++;
    }
    // computer win conditions
    else if (computerChoice == 'rock' && humanChoice == 'scissors')  {
      console.log(`Computer wins the round! Rock beats scissors!`)
      computerScore++;
    } else if (computerChoice == 'paper' && humanChoice == 'rock') {
      console.log(`Computer wins the round! Paper beats rock!`)
      computerScore++;
    } else if (computerChoice == 'scissors' && humanChoice == 'paper') {
      console.log(`Computer wins the round! Scissors beats paper!`)
      computerScore++;
    }
  }
}

playGame();