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
let playerWinCount = 0;
let computerWinCount = 0;
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", event => {
        const pC = (event.target.innerText).toLowerCase();
        const winner = PlayRockPaperScissor(pC);
        if (winner === "player") {
            playerWinCount++;
            document.querySelector("#playerScore").innerText = `${playerWinCount}`;
        }
        else if (winner === "computer") {
            computerWinCount++;
            document.querySelector("#computerScore").innerText = `${computerWinCount}`;
        }
    });
});
function PlayRockPaperScissor(playerChoice) {

    const computerChoice = getComputerChoice().toLowerCase();
    const result = (playground(playerChoice, computerChoice));
    document.querySelector("#result").innerText = result;
    return result;
}
