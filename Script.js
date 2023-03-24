function getRandomNumber(){
    return Math.floor(Math.random()*3);   
}
function getComputerChoice(){
    let randomNumberForComputer = getRandomNumber();
    return randomNumberForComputer ===0? "Rock":randomNumberForComputer ===1? "paper":randomNumberForComputer ===2? "Scissor":false;
}

const plyerChoice = "Rock";
const computerChoice = getComputerChoice();

