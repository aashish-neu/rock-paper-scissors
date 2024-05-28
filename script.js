console.log("Start of the program")

// function to return rock, paper or scissors

function getComputerChoice() {
    
    computerChoice = Math.random() * 3;
    if (computerChoice >= 0 && computerChoice < 1) {
        return "rock";
    }
    else if (computerChoice >= 1 && computerChoice < 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
// function to get human choice

function getHumanChoice() {
    humanChoice = prompt("Choose between Rock, Paper or Scissors");
    console.log(humanChoice);
    return humanChoice;
}
// Declaring and Initializing human score and computer score

let humanScore = 0;
let computerScore = 0;

// function to tell if computer or human won the round

function playRound(humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice;

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log(`You drew. ${humanChoice} draws against ${computerChoice}`);
        }
        else if (computerChoice == "paper") {
            console.log(`You lost. ${humanChoice} loses against ${computerChoice}`);
            computerScore += 1;
        }
        else {
            console.log(`You won. ${humanChoice} wins against ${computerChoice}`);
            humanScore += 1;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log(`You won with computer. ${humanChoice} wins against ${computerChoice}`);
            humanScore += 1;
        }
        else if (computerChoice == "paper") {
            console.log(`You drew. ${humanChoice} draws against ${computerChoice}`);
        }
        else {
            console.log(`You lost. ${humanChoice} loses against ${computerChoice}`);
            computerScore += 1;
        }
    }
    else {
        if (computerChoice == "rock") {
            console.log(`You lost against computer. ${humanChoice} loses against ${computerChoice}`);
            computerScore += 1;
        }
        else if (computerChoice == "paper") {
            console.log(`You won. ${humanChoice} wins against ${computerChoice}`);
            humanScore += 1;
        }
        else {
            console.log(`You drew. ${humanChoice} draws against ${computerChoice}`);
        }
    }
}

// function to play the game for 5 rounds, 1. start loop 5 times with play round function

// to make ui for rps and user plays by pressing buttons

// function playGame() {
//     for (let i = 0; i < 5; i ++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();

//         playRound(humanSelection, computerSelection);
//         console.log(`The Current Scores are : Your Score [${humanScore}] ||||| Computer Score [${computerScore}]`);
//     }
// }

// global area

// buttons to playround with respective selection of rock, paper or scissors

const rockButton = document.querySelector("#btnRock");
const paperButton = document.querySelector("#btnPaper");
const scissorsButton = document.querySelector("#btnScissors");


