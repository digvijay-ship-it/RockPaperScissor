function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}
function getComputerChoice() {
    let randomNumberForComputer = getRandomNumber();
    return randomNumberForComputer === 0 ? "Rock" : randomNumberForComputer === 1 ? "Paper" : randomNumberForComputer === 2 ? "Scissor" : false;
}
function playground(playerChoice, computerChoice) {

    if (playerChoice === "rock" && computerChoice !== "rock") {
        if (computerChoice === "scissor") {
            return "player";
        }
        else {
            return "computer";
        }
    }
    else if (playerChoice === "paper" && computerChoice !== "paper") {
        if (computerChoice === "rock") {
            return "player";
        }
        else {
            return "computer";
        }
    }
    else if (playerChoice === "scissor" && computerChoice !== "scissor") {
        if (computerChoice === "paper") {
            return "player";
        }
        else {
            return "computer";
        }
    }
    else if (playerChoice === computerChoice) {
        return "Its A draw!";
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
        const pC = (event.target.innerText).toLowerCase();
        const winner = PlayRockPaperScissor(pC);

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

    const computerChoice = getComputerChoice().toLowerCase();
    const result = (playground(playerChoice, computerChoice));
    document.querySelector("#result").innerText = result;
    return result;
}
