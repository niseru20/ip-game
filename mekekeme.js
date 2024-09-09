const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.choice');
const userChoiceSpan = document.querySelector('#user-choice span');
const computerChoiceSpan = document.querySelector('#computer-choice span');
const resultMessage = document.querySelector('#result-message span');

// Function to get a random choice for the computer
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    }
    return "You lose!";
}

// Function to handle the game logic
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    
    userChoiceSpan.textContent = userChoice;
    computerChoiceSpan.textContent = computerChoice;

    const result = determineWinner(userChoice, computerChoice);
    resultMessage.textContent = result;
}

// Add event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        playGame(userChoice);
    });
});
