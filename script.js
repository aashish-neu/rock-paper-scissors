console.log("Start of the program")

// global area

// Declaring and Initializing human score and computer score

let humanScore = 0;
let computerScore = 0;

// buttons to playround with respective selection of rock, paper or scissors

const rockButton = document.querySelector("#btnRock");
const paperButton = document.querySelector("#btnPaper");
const scissorsButton = document.querySelector("#btnScissors");

// to display result when playing rounds

const resultSection = document.querySelector(".resultSection");
const currentResult = document.querySelector(".currentResult");
// resultSection.textContent = "Let's see who won!!!";
// const output = document.querySelector(".output");
// output.textContent = "needed to be added";

// to playround when button is pressed

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice);
});
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice);
});
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice);
});

// function to return rock, paper or scissors

function getComputerChoice() {
    
    let computerChoice = Math.random() * 3;
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
// changed -- removed for ui change

// function getHumanChoice() {
//     humanChoice = prompt("Choose between Rock, Paper or Scissors");
//     console.log(humanChoice);
//     return humanChoice;
// }


// function to tell if computer or human won the round

function playRound(humanChoice, computerChoice) {
    
    // humanChoice = humanChoice.toLowerCase();
    // computerChoice = computerChoice; changed
    // adding code to get computer choice here instead of outside of function
    // changing console.logs to DOM methods
    computerChoice = getComputerChoice();

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            // console.log(`You drew. ${humanChoice} draws against ${computerChoice}`);
            currentResult.textContent = `You drew. ${humanChoice} draws against ${computerChoice}`;
        }
        else if (computerChoice == "paper") {
            // console.log(`You lost. ${humanChoice} loses against ${computerChoice}`);
            currentResult.textContent = `You lost. ${humanChoice} loses against ${computerChoice}`;
            computerScore += 1;
        }
        else {
            // console.log(`You won. ${humanChoice} wins against ${computerChoice}`);
            currentResult.textContent = `You won. ${humanChoice} wins against ${computerChoice}`;
            humanScore += 1;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            // console.log(`You won with computer. ${humanChoice} wins against ${computerChoice}`);
            currentResult.textContent = `You won. ${humanChoice} wins against ${computerChoice}`;
            humanScore += 1;
        }
        else if (computerChoice == "paper") {
            // console.log(`You drew. ${humanChoice} draws against ${computerChoice}`);
            currentResult.textContent = `You drew. ${humanChoice} draws against ${computerChoice}`;
        }
        else {
            // console.log(`You lost. ${humanChoice} loses against ${computerChoice}`);
            currentResult.textContent = `You lost. ${humanChoice} loses against ${computerChoice}`;
            computerScore += 1;
        }
    }
    else {
        if (computerChoice == "rock") {
            // console.log(`You lost against computer. ${humanChoice} loses against ${computerChoice}`);
            currentResult.textContent = `You lost. ${humanChoice} loses against ${computerChoice}`
            computerScore += 1;
        }
        else if (computerChoice == "paper") {
            // console.log(`You won. ${humanChoice} wins against ${computerChoice}`);
            currentResult.textContent = `You won. ${humanChoice} wins against ${computerChoice}`;
            humanScore += 1;
        }
        else {
            // console.log(`You drew. ${humanChoice} draws against ${computerChoice}`);
            currentResult.textContent = `You drew. ${humanChoice} draws against ${computerChoice}`;
        }
    }
}
