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
    document.getElementById("Winner").innerHTML = "";
    document.getElementById("playerScore").innerHTML = "Player score: 0";
    document.getElementById("computerScore").innerHTML = "Computer score: 0";
    alert("Game reset! Start a new game.");
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
        else  {
            computerWinCount++;
            document.querySelector("#computerScore").innerText = `Computer score: ${computerWinCount}`;
        }
        if (playerWinCount === 5) {
            alert("Player has won the game!");
            resetGame();
            return;
        }
        if (computerWinCount === 5) {
            alert("computer has won the game!");
            resetGame();
            return;
        }
    });
});
function PlayRockPaperScissor(playerChoice) {

    const computerChoice = getComputerChoice();
    const result = (playground(playerChoice, computerChoice));
    document.querySelector("#result").innerText = result;
    return result;
}
