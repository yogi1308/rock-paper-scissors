playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; ++i) {
        console.log(getComputerChoice());
        getHumanChoice;
    }
}

function getComputerChoice () {
    let computerChoice =  Math.floor(Math.random() * (3 - 1 + 1) + 1);  //Used this formula to find a random number in the range of 1-3: Math.floor(Math.random() * (max - min + 1) + min); The maximum is inclusive and the minimum is inclusive
    if (computerChoice == 1) {
        return "Rock";
    }
    else if (computerChoice == 2) {
        return "Paper";
    }
    else if (computerChoice == 3) {
        return "Scissors";
    }
    else {
        return "Some error occured";
    }
}

function getHumanChoice () {

}

function playRound(humanChoice , computerChoice) {

}

