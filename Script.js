function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}
function getComputerChoice() {
    let randomNumberForComputer = getRandomNumber();
    return randomNumberForComputer === 0 ? "rock" : randomNumberForComputer === 1 ? "paper" : randomNumberForComputer === 2 ? "scissor" : false;
}
function playground(playerChoice, computerChoice) {
     
    if (playerChoice === computerChoice) {
        return "Its A draw!";
    }
    else {
        if (playerChoice === "rock") {
            if (computerChoice === "scissor") {
                return "player";
            }
            else {
                return "computer";
            }
        }
        else if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                return "player";
            }
            else {
                return "computer";
            }
        }
        else if (playerChoice === "scissor") {
            if (computerChoice === "paper") {
                return "player";
            }
            else {
                return "computer";
            }
        }
    }
}
function resetGame() {
    playerWinCount = 0;
    computerWinCount = 0;
}
function declareWinner(winner) {
    //create element
    const contestWinner = document.createElement("h1");
    contestWinner.innerText = "Winner of this contest is " + winner;
    //insert it as #contestWinner div's child
    document.querySelector("#Winner").appendChild(contestWinner);
}
let playerWinCount = 0;
let computerWinCount = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", event => {
        const playerChoice = (event.target.innerText).toLowerCase();
        const winner = PlayRockPaperScissor(playerChoice);

        if (winner === "player") {
            playerWinCount++;
            document.querySelector("#playerScore").innerText = `Player score: ${playerWinCount}`;
        }
        else if (winner === "computer") {
            computerWinCount++;
            document.querySelector("#computerScore").innerText = `Computer score: ${computerWinCount}`;
        }
        if (playerWinCount === 5) {
            declareWinner("player");
            resetGame();
        }
        if (computerWinCount === 5) {
            declareWinner("computer");
            resetGame();
        }
    });
});
function PlayRockPaperScissor(playerChoice) {

    const computerChoice = getComputerChoice();
    const result = (playground(playerChoice, computerChoice));
    document.querySelector("#result").innerText = result;
    return result;
}
