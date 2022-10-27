// Building necessary variables for HTML elements
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');
let userPick = document.querySelector('#userPick');
let computerPick = document.querySelector('#computerPick');
let result = document.querySelector('#result');
let output = document.querySelector('.output');

// Function to judge the result
const judge = (playerChoice, computerChoice) => {
    if (playerChoice === 'Rock' && computerChoice === 'Paper') {
        return "Computer Wins!";
    } else if (playerChoice === 'Paper' && computerChoice === 'Scissor') {
        return "Computer Wins!";
    } else if (playerChoice === 'Scissor' && computerChoice === 'Rock') {
        return "Computer Wins!";
    } else if (playerChoice === computerChoice) {
        return "It's a Tie!";
    } else {
        return "You Win!"
    }
}

// Storing possible choices inside an array
const choices = ['Rock', 'Paper', 'Scissor'];

// If user selects Rock
rock.addEventListener('click', () => {
    output.style.display = 'block';
    userPick.innerText = "User picked: Rock";
    let randomChoice = Math.floor(Math.random() * choices.length);
    computerHand = choices[randomChoice];
    computerPick.innerText = `Computer picked: ${computerHand}`
    result.innerText = judge('Rock', computerHand);
});

// If user selects Paper
paper.addEventListener('click', () => {
    output.style.display = 'block';
    userPick.innerText = "User picked: Paper";
    let randomChoice = Math.floor(Math.random() * choices.length);
    computerHand = choices[randomChoice];
    computerPick.innerText = `Computer picked: ${computerHand}`
    result.innerText = judge('Paper', computerHand);
});

// If user selects Scissor
scissor.addEventListener('click', () => {
    output.style.display = 'block';
    userPick.innerText = "User picked: Scissor";
    let randomChoice = Math.floor(Math.random() * choices.length);
    computerHand = choices[randomChoice];
    computerPick.innerText = `Computer picked: ${computerHand}`
    result.innerText = judge('Scissor', computerHand);
});