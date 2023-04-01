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

function PlayRockPaperScissor() {
    const playerChoice = prompt("Enter one if'Rock','Paper' and 'Scissor'", "Rock").toLowerCase();
    const computerChoice = getComputerChoice().toLowerCase();
    console.log(playground(playerChoice, computerChoice));
}
function main() {
    // for(let i=0;i<5;i++){
    PlayRockPaperScissor();
    // }
}
main();
