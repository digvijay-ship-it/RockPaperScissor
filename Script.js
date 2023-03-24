function getRandomNumber(){
    return Math.floor(Math.random()*3);   
}
function getComputerChoice(){
    let randomNumberForComputer = getRandomNumber();
    return randomNumberForComputer ===0? "Rock":randomNumberForComputer ===1? "Paper":randomNumberForComputer ===2? "Scissor":false;
}
function playground(playerChoice,computerChoice){
    console.log("player "+playerChoice)
    console.log("Computer "+computerChoice)
    if(playerChoice==="rock"&&computerChoice!=="rock"){
        if(computerChoice==="scissor"){
            console.log("Player Wins");
        }
        else{
            console.log("Computer Wins");
        }
    }
    else if(playerChoice==="paper"&&computerChoice!=="paper"){
        if(computerChoice==="rock"){
            console.log("Player Wins");
        }
        else{
            console.log("Computer Wins");
        }
    }
    else if(playerChoice==="scissor"&&computerChoice!=="scissor"){
        if(computerChoice==="paper"){
            console.log("Player Wins");
        }
        else{
            console.log("Computer Wins");
        }
    }
    else if(playerChoice===computerChoice){
        console.log("Its A draw!");
    }
}

const playerChoice = prompt("Enter one if'Rock','Paper' and 'Scissor'","Rock").toLocaleLowerCase();
const computerChoice = getComputerChoice().toLocaleLowerCase();
playground(playerChoice,computerChoice)
