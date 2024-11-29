let humanScore = 0;
let computerScore = 0;
let humanChoice = ""
let computerChoice = ""

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
let options = document.querySelector("#options")

while ((humanScore != 5) || (computerScore != 5)) {
    const score = document.createElement("div");
    score.classList.add("score")
    options.appendChild(score)
    let humanScoreDisplay = document.createElement("div")
    humanScoreDisplay.classList.add("humanScoreDisplay")
    humanScoreDisplay.textContent = "Your Score" + humanScore
    score.appendChild(humanScoreDisplay)
    let computerScoreDisplay = document.createElement("div")
    computerScoreDisplay.classList.add("computerScoreDisplay")
    computerScoreDisplay.textContent = "Your Score" + computerScore
    score.appendChild(computerScoreDisplay)
    options.addEventListener('click', handleClick)
    ++humanScore
    computerScore
}

function handleClick(event) {
    const results = document.createElement("div")
    results.classList.add("results")
    let target = event.target
    switch(target.id) {
        case 'rock':
            humanChoice = "Rock"
            computerChoice = getComputerChoice()
            results.textContent = playRound(humanChoice)
            break;

        case 'paper':
            humanChoice = "Paper"
            computerChoice = getComputerChoice()
            results.textContent = playRound(humanChoice)
            break;

        case 'scissors':
            humanChoice = "Scissors"
            computerChoice = getComputerChoice()
            results.textContent = playRound(humanChoice)
            break;
    }
    options.appendChild(results)
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


function playRound(humanChoice) {
    if (humanChoice == computerChoice) {
        return "Tie!!";
    }

    else if (((humanChoice == "Rock") && (computerChoice == "Scissors")) || 
    ((humanChoice == "Paper") && (computerChoice == "Rock")) || 
    ((humanChoice == "Scissors") && (computerChoice == "Paper"))) {
        return "You Win!";
    }

    else {
        return "You Lose!";
    }
}


function score(result) {
    if (result == "You Win!")
        return ++humanScore
    else if (result == "You Lose!")
        return ++computerScore
    else {
        return
    }
}