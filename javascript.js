playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    console.log("Round of 5!!! Begins Now!!!")
    for (let i = 0; i < 5; ++i) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        let result = playRound(humanChoice, computerChoice);
        if (result == "Tie!!") {
            console.log(result);
        }
        else if (result == "You Lose!") {
            console.log(result + " " + humanChoice + " loses to " + computerChoice);
            ++computerScore;
        }

        else if (result == "You Win!") {
            console.log(result + " " + humanChoice + " beats " + computerChoice);
            ++humanScore;
        }

        else if (result == "Invalid! Try Again!") {
            console.log(result);
            --i;
        }
    }
    console.log("Your Score: " + humanScore + "\nComputer Score: " + computerScore);
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
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    if ((humanChoice == "ROCK") || (humanChoice == "PAPER") || (humanChoice == "SCISSORS")) {
        if (humanChoice == computerChoice) {
            return "Tie!!";
        }

        else if (((humanChoice == "ROCK") && (computerChoice == "SCISSORS")) || 
        ((humanChoice == "PAPER") && (computerChoice == "ROCK")) || 
        ((humanChoice == "SCISSORS") && (computerChoice == "PAPER"))) {
            return "You Win!";
        }

        else {
            return "You Lose!";
        }
    }
    
    else {
        return "Invalid! Try Again!"
    }
}

