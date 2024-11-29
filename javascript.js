let humanScore = 0;
let computerScore = 0;
let humanChoice = ""
let computerChoice = ""

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const options = document.querySelector("#options")

options.addEventListener('click', handleClick)

const humanScoreDisplay = document.createElement("div")
const computerScoreDisplay = document.createElement("div")

function handleClick(event) {
    const results = document.createElement("div")
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
    scoreDisplay(results.textContent)
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


function scoreDisplay(results) {    
    if (results == "Tie!!") {
        humanScoreDisplay.textContent = "Your Score: " + humanScore
        computerScoreDisplay.textContent = "Computer Score: " + computerScore
        options.appendChild(humanScoreDisplay)
        options.appendChild(computerScoreDisplay)
    }

    else if (results == "You Win!") {
        ++humanScore
        humanScoreDisplay.textContent = "Your Score: " + humanScore
        computerScoreDisplay.textContent = "Computer Score: " + computerScore
        options.appendChild(humanScoreDisplay)
        options.appendChild(computerScoreDisplay)        
    }

    else {
        ++computerScore
        humanScoreDisplay.textContent = "Your Score: " + humanScore
        computerScoreDisplay.textContent = "Computer Score: " + computerScore
        options.appendChild(humanScoreDisplay)
        options.appendChild(computerScoreDisplay)         
    }

    if (humanScore == 5) {
        const gameOver = document.createElement("div")
        gameOver.textContent = "Game Over! You Win!"
        options.appendChild(gameOver)
        const finalScore = document.createElement("div")
        finalScore.textContent = "Final Score\nYour Score: " +  + humanScore + "\nComputer Score: " + computerScore
    }
}