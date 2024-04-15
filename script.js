

function selectChoice(choice) {
  // Update the image in .container-box1
  const playerImg = document.querySelector('.container-box1 img');
  playerImg.src = `images/${choice}.png`;

  // Reset background color for all buttons
  const buttons = document.querySelectorAll('#player-choose button');
  buttons.forEach(button => {
      button.style.backgroundColor = 'transparent';
  });

  // Set background color for the selected button
  const selectedButton = document.querySelector(`#player-choose button[data-choice="${choice}"]`);
  selectedButton.style.backgroundColor = '#5b420c';
}

function getComputerChoice() {
  const choices = [
      { name: 'rock', image: 'images/rock.png' },
      { name: 'paper', image: 'images/paper.png' },
      { name: 'scissor', image: 'images/scissor.png' }
  ];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playGame() {
  // Get player's choice
  const selectedButton = document.querySelector('#player-choose button[style="background-color: rgb(91, 66, 12);"]');
 
  if (!selectedButton) {
      document.getElementById("result").innerText = "YOU MUST CHOOSE FIRST";
      return;
  }

  const playerSelection = selectedButton.dataset.choice;

  // Get computer's choice
  const computerChoice = getComputerChoice();

  // Update the image in .container-box3 with the computer's choice
  const computerImg = document.querySelector('.container-box3 img');
  computerImg.src = computerChoice.image;

  // Determine the winner
  let result = '';
  let playerScore = 0;
  let computerScore = 0;

  if (playerSelection === computerChoice.name) {
      result = "TIE";
  } else if (
      (playerSelection === "rock" && computerChoice.name === "scissor") ||
      (playerSelection === "paper" && computerChoice.name === "rock") ||
      (playerSelection === "scissor" && computerChoice.name === "paper")
  ) {
      result = "YOU WIN";
      playerScore += 100;
  } else {
      result = "YOU LOSE";
      computerScore += 100;
  }

  playerScore += parseInt(document.getElementById('player-score').innerText);
  computerScore += parseInt(document.getElementById('computer-score').innerText);

  document.querySelector('#player-score').innerText = playerScore;
  document.querySelector('#computer-score').innerText = computerScore;

  // Display the result
  const resultElement = document.getElementById("result");
  resultElement.innerText = result;
  resultElement.style.display = "flex"; 

  setTimeout(function() {
    resultElement.style.display = "none";
  }, 2000);
}


