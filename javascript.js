// create function getComputerChoice that returns rock paper or scissors randomly
const ROCK = './images/rock.png'
const PAPER = './images/paper.png'
const SCISSORS = './images/scissors.png'

async function getComputerChoice() {
  const computersChoice = document.querySelector('.computers-choice');

  for (let i = 0; i < 10; i++) {
      const randomOfThree = Math.ceil(Math.random() * 3);
      switch (randomOfThree) {
        case (1):
          computersChoice.src=ROCK
          break;
        case (2):
          computersChoice.src=PAPER
          break;
        case (3):
          computersChoice.src=SCISSORS
          break;
      }
    await new Promise(resolve => setTimeout(resolve, 25));
  }

  const randomOfThree = Math.ceil(Math.random() * 3);
  switch (randomOfThree) {
    case (1):
      computersChoice.src=ROCK
      return 'rock';
    case (2):
      computersChoice.src=PAPER
      return 'paper';
    case (3):
      computersChoice.src=SCISSORS
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

// create function playRound that plays one round of rock paper scissors
async function playRound(humanChoice) {
  //    create variable humanChoice which contains the choice of the human
  //    create variable computerChoice which contains the choice of the computer
  humanChoice = humanChoice.toLowerCase();
  const humanScoreSelector = document.querySelector('.players-score')
  const computerScoreSelector = document.querySelector('.computers-score')
  let humanScore = Number(humanScoreSelector.textContent);
  let computerScore = Number(computerScoreSelector.textContent);

  if (humanScore >= 5 || computerScore >= 5) return;

  const computerChoice = await getComputerChoice();
  


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

  humanScoreSelector.textContent = humanScore;
  computerScoreSelector.textContent = computerScore;
  if (humanScore >= 5) {
    console.log('Player Wins!');
    const resultsContainer = document.querySelector('.results');
    resultsContainer.textContent = 'You Win!';
    resultsContainer.style.margin = '98px 0px';

    document.querySelector('.computers-choice-container').remove();

  } else if (computerScore >= 5) {
    console.log('Computer Wins!')
    const resultsContainer = document.querySelector('.results');
    resultsContainer.textContent = 'You Lose!';
    resultsContainer.style.margin = '98px 0px';

    document.querySelector('.computers-choice-container').remove();
  }

}

const players_choices = document.querySelectorAll('button');
players_choices.forEach(btn => {
  btn.addEventListener('click', () => {
    playRound(btn.value)
  })
})