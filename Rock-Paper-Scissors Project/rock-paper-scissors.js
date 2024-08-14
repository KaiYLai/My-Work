// Load previously saved score from Local Storage
let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    loss: 0,
    tie: 0
  };
// Shows score on startup of page
updateScoreHTML();

// Resets scores to 0 and page back to default
function resetScore () {
    score.win = 0;
    score.loss = 0;
    score.tie = 0;
    localStorage.removeItem('score');
    updateScoreHTML();
    updateScoreInfo();
}

function showResetConfirmation() {
    document.querySelector('.js-resetConfirmation')
      .innerHTML = `
        Are you sure you want to reset the score?
        <button class="js-reset-yes resetConfirm-button"> Yes </button>
        <button class="js-reset-no resetConfirm-button"> No </button>
      `;
    
    document.querySelector('.js-reset-yes').addEventListener('click', () => {
        resetScore();
        hideResetConfirmation();
      });
    
    document.querySelector('.js-reset-no').addEventListener('click', () => {
        hideResetConfirmation();
      });
  }
  
  function hideResetConfirmation() {
    document.querySelector('.js-resetConfirmation').innerHTML = '';
  }

let isAutoPlay = false;
let intervalId;
// The game is Automatically played every Second
function autoPlay () {
    // Checks if autoPlay is off
    if (!isAutoPlay) {
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove()
            playGame(playerMove);
        }, 1000);
        isAutoPlay = true;
        document.querySelector('.js-autoplayButton').innerHTML = 'Stop Auto Play';
    } else { // else stop autoPlay
        clearInterval(intervalId);
        isAutoPlay = false;
        document.querySelector('.js-autoplayButton').innerHTML = 'Auto Play';
        updateScoreInfo();
    }
}

document.querySelector('.js-rockButton').addEventListener('click', () => {
    playGame('Rock');
});

document.querySelector('.js-paperButton').addEventListener('click', () => {
    playGame('Paper');
});

document.querySelector('.js-scissorButton').addEventListener('click', () => {
    playGame('Scissors');
});

document.querySelector('.js-resetButton').addEventListener('click', () => {
    showResetConfirmation();
});

document.querySelector('.js-autoplayButton').addEventListener('click', () => {
    autoPlay();
});

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('Rock');
    } else if (event.key === 'p') {
        playGame('Paper');
    } else if (event.key === 's') {
        playGame('Scissors');
    }
});

function playGame(playerChoice) {
    const computerMove = pickComputerMove()
    // Give result an empty string
    let result = '';
    /* 
       'playerChoice' is used to check which button is pressed
       'pickComputerMove' function is then called to select the computer move
       Return to the if and else if statments corresponding to'playerChoice' to check and give result
    */
    // If player chose scissors button
    if (playerChoice === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You Lose';
        } else if (computerMove === 'Paper') {
            result = 'You Win';
        } else if (computerMove === 'Scissors') {
            result = 'It was a Tie';
        }
    // If player chose paper button
    } else if (playerChoice === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You Win';
        } else if (computerMove === 'Paper') {
            result = 'It was a Tie';
        } else if (computerMove === 'Scissors') {
            result = 'You Lose';
        }
    // If player chose rock button
    } else if (playerChoice === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'It was a Tie';
        } else if (computerMove === 'Paper') {
            result = 'You Lose';
        } else if (computerMove === 'Scissors') {
            result = 'You Win';
        }
    }

    // Updating the Score by incrementing value by 1
    if (result === 'You Win') {
        score.win += 1;
    } else if (result === "You Lose") {
        score.loss += 1;
    } else if (result === "It was a Tie") {
        score.tie += 1;
    }

    // Saves score to local storage
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreHTML();
    document.querySelector('.display-result').innerHTML = result;
    document.querySelector('.display-move').innerHTML = 
    `You Selected <img class="move-icon" src="Images/${playerChoice}-emoji.png"> Computer Selected <img class="move-icon" src="Images/${computerMove}-emoji.png">`;
}

// Updates Score to HTML, Reuseable Code
function updateScoreHTML() {
    document.querySelector('.display-score').innerHTML = 
    `Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`;
}
function updateScoreInfo() {
    document.querySelector('.display-move').innerHTML = "";
    document.querySelector('.display-result').innerHTML = "";
}

function pickComputerMove() {
    const randomNumber = Math.random();
    // Give computerMove an empty string
    let computerMove = '';
    
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }
    
    // Returns the value out of a function
    return computerMove;
}