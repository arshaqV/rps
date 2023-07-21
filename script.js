function getComputerChoice() {
    let i = Math.random();
    if(i<0.33)
    return "Rock"
    if(i>0.66)
    return "Paper"
    else
    return "Scissors"
}

function rockPaperScissors(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase()== computerSelection.toUpperCase())
    return "Tie!"

    else if(playerSelection.toUpperCase() == "ROCK")
    {
        if(computerSelection == "Paper")
        {
            return "You Lose! Paper beats Rock"
        }
        if(computerSelection == "Scissors")
        {
            return "You Win! Rock beats Scissors"
        }
    }
    else if(playerSelection.toUpperCase() == "SCISSORS")
    {
        if(computerSelection == "Paper")
        {
            return "You Win! Scissors beats Paper"
        }
        if(computerSelection == "Rock")
        {
            return "You Lose! Rock beats Scissors"
        }
    }
    else if(playerSelection.toUpperCase() == "PAPER")
    {
        if(computerSelection == "Rock")
        {
            return "You Win! Paper beats Rock"
        }
        if(computerSelection == "Scissors")
        {
            return "You Lose! Scissors beats Paper"
        }
    }
    else return "Invalid"
}
function game() {
    for(let i = 0;i < 5; i++){
let x = prompt("Enter your choice!")
console.log(rockPaperScissors(x, getComputerChoice()))
}}
console.log("Hello");
game();