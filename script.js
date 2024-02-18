function getComputerChoice() {
  let i = Math.random()
  if (i < 0.33) return "Rock"
  if (i > 0.66) return "Paper"
  else return "Scissors"
}

let userScore = 0,
  compScore = 0,
  gameOver = false

const userScoreboard = document.getElementById("userScore")
const compScoreboard = document.getElementById("compScore")

function rockPaperScissors(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() == computerSelection.toUpperCase())
    return "Tie!"
  else if (playerSelection.toUpperCase() == "ROCK") {
    if (computerSelection == "Paper") {
      compScore++
      return "Rock beaten by Paper..."
    }
    if (computerSelection == "Scissors") {
      userScore++
      return "Rock beats Scissors!"
    }
  } else if (playerSelection.toUpperCase() == "SCISSORS") {
    if (computerSelection == "Paper") {
      userScore++
      return "Scissors beats Paper!"
    }
    if (computerSelection == "Rock") {
      compScore++
      return "Scissors beaten by Rock..."
    }
  } else if (playerSelection.toUpperCase() == "PAPER") {
    if (computerSelection == "Rock") {
      userScore++
      return "Paper beats Rock!"
    }
    if (computerSelection == "Scissors") {
      compScore++
      return "Paper beaten by Scissors..."
    }
  } else return "Invalid"
}

function game() {
  userScoreboard.innerHTML = userScore
  compScoreboard.innerHTML = compScore
  if (userScore == 5 || compScore == 5) {
    let endMessage
    if (userScore == 5) {
      endMessage = document.createElement("div")
      endMessage.id = "victory"
      endMessage.textContent = "YOU WIN!"
    } else {
      endMessage = document.createElement("div")
      endMessage.id = "loss"
      endMessage.textContent = "YOU LOSE..."
    }
    results.insertBefore(endMessage, results.firstChild)
    gameOver = true
  }
}

const actionButtons = document.getElementsByClassName("actionButton")
const retryButton = document.getElementById("retry")
const results = document.getElementById("moveHistory")
console.log(actionButtons)

const handleAction = (event) => {
  if (gameOver) return
  const linebreak = document.createElement("br")
  results.append(
    rockPaperScissors(
      event.target.closest("button").innerText,
      getComputerChoice()
    )
  )
  results.appendChild(linebreak)
  game()
}

const handleRetry = (event) => {
  userScore = 0
  compScore = 0
  results.innerHTML = ""
  gameOver = false
  game()
}

retryButton.addEventListener("click", handleRetry)

for (let i = 0; i < actionButtons.length; i++) {
  actionButtons[i].addEventListener("click", handleAction)
  console.log(actionButtons[i])
}
