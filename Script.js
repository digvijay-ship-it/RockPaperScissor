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
function takePlayerChoice() {

}
const buttons = document.querySelectorAll("button");
const playerChoice = buttons.forEach(button => {
    button.addEventListener("click", event => {
        const playerChoice = (event.target.innerText).toLowerCase();
        PlayRockPaperScissor(playerChoice);
    });
});
function PlayRockPaperScissor(playerChoice) {

    const computerChoice = getComputerChoice().toLowerCase();
    const result = (playground(playerChoice, computerChoice));
    document.querySelector("#result").innerText = "this round result "+ result; 
}
