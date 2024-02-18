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
      return "You Lose! Paper beats Rock"
    }
    if (computerSelection == "Scissors") {
      userScore++
      return "You Win! Rock beats Scissors"
    }
  } else if (playerSelection.toUpperCase() == "SCISSORS") {
    if (computerSelection == "Paper") {
      userScore++
      return "You Win! Scissors beats Paper"
    }
    if (computerSelection == "Rock") {
      compScore++
      return "You Lose! Rock beats Scissors"
    }
  } else if (playerSelection.toUpperCase() == "PAPER") {
    if (computerSelection == "Rock") {
      userScore++
      return "You Win! Paper beats Rock"
    }
    if (computerSelection == "Scissors") {
      compScore++
      return "You Lose! Scissors beats Paper"
    }
  } else return "Invalid"
}

function game() {
  userScoreboard.innerHTML = userScore
  compScoreboard.innerHTML = compScore
  if (userScore == 5 || compScore == 5) {
    alert((userScore == 5 ? "Player" : "Computer") + " is the winner!")
    gameOver = true
  }
}

const actionButtons = document.getElementsByClassName("actionButton")
const results = document.getElementById("results")
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

for (let i = 0; i < actionButtons.length; i++) {
  actionButtons[i].addEventListener("click", handleAction)
  console.log(actionButtons[i])
}
