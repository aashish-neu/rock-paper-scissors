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

humanScore = 0;
computerScore = 0;

// function to tell if computer or human won the round

function playRound(humanChoice, computerChoice) {
    
    humanSelection = humanChoice.toLowerCase();
    computerChoice = computerChoice;

    if (humanSelection == "rock") {
        if (computerChoice == "rock") {
            console.log(`You drew with computer. ${humanSelection} ties with ${computerChoice}`);
        }
        else if (computerChoice == "paper") {
            console.log(`You lost. ${humanSelection} loses against ${computerChoice}`);
        }
        else {
            console.log(`You won. ${humanSelection} wins against ${computerChoice}`);
        }
    }
    else if (humanSelection == "paper") {
        if (computerChoice == "rock") {
            console.log(`You won with computer. ${humanSelection} wins against ${computerChoice}`);
        }
        else if (computerChoice == "paper") {
            console.log(`You drew. ${humanSelection} draws against ${computerChoice}`);
        }
        else {
            console.log(`You lost. ${humanSelection} loses against ${computerChoice}`);
        }
    }
    else {
        if (computerChoice == "rock") {
            console.log(`You lost against computer. ${humanSelection} loses against ${computerChoice}`);
        }
        else if (computerChoice == "paper") {
            console.log(`You won. ${humanSelection} wins against ${computerChoice}`);
        }
        else {
            console.log(`You drew. ${humanSelection} draws against ${computerChoice}`);
        }
    }
}

playRound(getHumanChoice(), getComputerChoice());