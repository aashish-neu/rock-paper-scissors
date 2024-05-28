console.log("Start of the program")

// Declaring and Initializing human score and computer score

let humanScore = 0;
let computerScore = 0;

// to display and update current human score and current computer score

const displayHumanScore = document.querySelector(".current-human-score");
const displayComputerScore = document.querySelector(".current-computer-score");

displayHumanScore.innerText = "Not Won Yet. Better luck next time!!!";
displayComputerScore.innerText = "Not Won Yet. Computer not as smart as you!!!";

// buttons to playround with respective selection of rock, paper or scissors

const rockButton = document.querySelector("#btnRock");
const paperButton = document.querySelector("#btnPaper");
const scissorsButton = document.querySelector("#btnScissors");

// to display result when playing rounds

const resultSection = document.querySelector(".resultSection");
const currentResult = document.querySelector(".currentResult");

currentResult.innerText = "Finding Results........";

// to display final outcome after 5 rounds

const finalOutcomeConatiner = document.querySelector(".final-outcome-container");


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

// function to tell if computer or human won the round

function playRound(humanChoice, computerChoice) {

    // adding code to get computer choice here instead of outside of function
    // changing console.logs to DOM methods
    computerChoice = getComputerChoice();


    // to find out winner after player or cpu gets 5 wins

    if (computerScore < 5 && humanScore < 5) {

        if (humanChoice == "rock") {
            if (computerChoice == "rock") {
                // console.log(`You drew. ${humanChoice} draws against ${computerChoice}`);
                currentResult.textContent = `You drew. ${humanChoice} draws against ${computerChoice}`;
            }
            else if (computerChoice == "paper") {
                // console.log(`You lost. ${humanChoice} loses against ${computerChoice}`);
                currentResult.textContent = `You lost. ${humanChoice} loses against ${computerChoice}`;
                computerScore += 1;
                // to display running score
                displayComputerScore.innerText = `Computer Score : ${computerScore}`;
            }
            else {
                // console.log(`You won. ${humanChoice} wins against ${computerChoice}`);
                currentResult.textContent = `You won. ${humanChoice} wins against ${computerChoice}`;
                humanScore += 1;
                // update
                displayHumanScore.innerText = ` Human Score : ${humanScore}`;
            }
        }
        else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                // console.log(`You won with computer. ${humanChoice} wins against ${computerChoice}`);
                currentResult.textContent = `You won. ${humanChoice} wins against ${computerChoice}`;
                humanScore += 1;
                // update
                displayHumanScore.innerText = ` Human Score : ${humanScore}`;
                
            }
            else if (computerChoice == "paper") {
                // console.log(`You drew. ${humanChoice} draws against ${computerChoice}`);
                currentResult.textContent = `You drew. ${humanChoice} draws against ${computerChoice}`;
            }
            else {
                // console.log(`You lost. ${humanChoice} loses against ${computerChoice}`);
                currentResult.textContent = `You lost. ${humanChoice} loses against ${computerChoice}`;
                computerScore += 1;
                // update
                displayComputerScore.innerText = `Computer Score : ${computerScore}`;
            }
        }
        else {
            if (computerChoice == "rock") {
                // console.log(`You lost against computer. ${humanChoice} loses against ${computerChoice}`);
                currentResult.textContent = `You lost. ${humanChoice} loses against ${computerChoice}`
                computerScore += 1;
                // update
                displayComputerScore.innerText = `Computer Score : ${computerScore}`;
            }
            else if (computerChoice == "paper") {
                // console.log(`You won. ${humanChoice} wins against ${computerChoice}`);
                currentResult.textContent = `You won. ${humanChoice} wins against ${computerChoice}`;
                humanScore += 1;
                // update
                displayHumanScore.innerText = ` Human Score : ${humanScore}`;
            }
            else {
                // console.log(`You drew. ${humanChoice} draws against ${computerChoice}`);
                currentResult.textContent = `You drew. ${humanChoice} draws against ${computerChoice}`;
            }
        }
    } 
    else if (humanScore === 5) {
        const finalOutcomeHeader = document.createElement("h3");
        finalOutcomeHeader.classList.add = "header3";
        finalOutcomeHeader.innerText = "Here is the final result :";
        finalOutcomeConatiner.appendChild(finalOutcomeHeader);

        const finalOutcome = document.createElement("p");
        finalOutcome.innerText = "Congratulations. You won against the computer!!!";
        finalOutcomeConatiner.appendChild(finalOutcome);

        // to make button unresponsive
        rockButton.innerText = "Please Don't Press Me Again";
        paperButton.innerText = "Please Don't Press Me Again";
        scissorsButton.innerText = "Please Don't Press Me Again";
        rockButton.setAttribute("disabled", "true");
        paperButton.setAttribute("disabled", "true");
        scissorsButton.setAttribute("disabled", "true");
    } 

    else if (computerScore === 5) {
        const finalOutcomeHeader = document.createElement("h3");
        finalOutcomeHeader.classList.add = "header3";
        finalOutcomeHeader.innerText = "Here is the final result :";
        finalOutcomeConatiner.appendChild(finalOutcomeHeader);

        const finalOutcome = document.createElement("p");
        finalOutcome.innerText = "Computer go brrrrrrrr. Better luck next time!!!";
        finalOutcomeHeader.appendChild(finalOutcome);

        // to make button unresponsive
        rockButton.innerText = "Please Don't Press Me Again";
        paperButton.innerText = "Please Don't Press Me Again";
        scissorsButton.innerText = "Please Don't Press Me Again";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.setAttribute("disabled", "true");
    } 
    else {
        finalOutcome.innerText = "Error Error";
    }   
}
