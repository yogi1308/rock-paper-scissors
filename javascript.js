playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; ++i) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
    }
}

function getComputerChoice () {
    let randomNumber =  Math.floor(Math.random() * (3 - 1 + 1) + 1);  //Used this formula to find a random number in the range of 1-3: Math.floor(Math.random() * (max - min + 1) + min); The maximum is inclusive and the minimum is inclusive
    if (randomNumber == 1) {
        return "Rock";
    }
    else if (randomNumber == 2) {
        return "Paper";
    }
    else if (randomNumber == 3) {
        return "Scissors";
    }
    else {
        return "Some error occured";
    }
}

function getHumanChoice () {
    return prompt("Rock, Paper, Scissors........SHOOT")
}

function playRound(humanChoice , computerChoice) {

}

