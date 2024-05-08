console.log("Start of the program")

// function to return rock, paper or scissors

function getComputerChoice() {
    
    computerChoice = Math.random() * 3;
    if (computerChoice >= 0 && computerChoice < 1) {
        return "Rock" + String(computerChoice);
    }
    else if (computerChoice >= 1 && computerChoice < 2) {
        return "Paper" + String(computerChoice);
    }

    else {
        return "Scissors" + String(computerChoice)
    }
}

for (let i = 0; i < 15; i ++) {
    console.log(getComputerChoice());
}
