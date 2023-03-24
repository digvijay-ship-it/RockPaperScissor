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
    if(playerChoice==="Rock"&&computerChoice!=="Rock"){
        if(computerChoice==="Scissor"){
            console.log("Player Wins");
        }
        else{
            console.log("Computer Wins");
        }
    }
    else if(playerChoice==="Paper"&&computerChoice!=="Paper"){
        if(computerChoice==="Rock"){
            console.log("Player Wins");
        }
        else{
            console.log("Computer Wins");
        }
    }
    else if(playerChoice==="Scissor"&&computerChoice!=="Scissor"){
        if(computerChoice==="Paper"){
            console.log("Player Wins");
        }
        else{
            console.log("Computer Wins");
        }
    }
    else{
        console.log("Its A draw!");
    }
}
const playerChoice = "Paper";
const computerChoice = getComputerChoice();
playground(playerChoice,computerChoice)
