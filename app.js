const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const displayResult = document.querySelector('.result-text');
const computerScoreClass = document.querySelector('.computer');
const userScoreClass = document.querySelector('.user');
var computerScore = 0;
var userScore = 0;
function getComputerChoice() {

    let randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}


async function getUsersChoice() {
    let userChoice = '';
    let promise = new Promise((resolve, reject) => {
        rock.addEventListener('click', () => {
            rock.classList.add('playing');
            paper.classList.remove('playing');
            scissors.classList.remove('playing');
            userChoice = "rock";
            resolve(userChoice);
        });
        paper.addEventListener('click', () => {
            rock.classList.remove('playing');
            paper.classList.add('playing');
            scissors.classList.remove('playing');
            userChoice = "paper";
            resolve(userChoice);
        });
        scissors.addEventListener('click', () => {
            rock.classList.remove('playing');
            paper.classList.remove('playing');
            scissors.classList.add('playing');
            userChoice = "scissors";
            resolve(userChoice);
        });
    });

    let result = await promise;
    return result;
}
function decide(computerChoice, userChoice) {
    if (computerChoice === "rock" && userChoice === "scissors" || computerChoice === "paper" && userChoice === "rock" || computerChoice === "scissors" && userChoice === "paper") {
        displayResult.textContent = "Computer Wins!";
        computerScore++;
        return;
    } else if (userChoice === "rock" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "paper") {
        displayResult.textContent = "You win!";
        userScore++;
        return;

    } else if (userChoice === computerChoice || computerChoice == userChoice) {
        displayResult.textContent = "Its a tie!";
        return;
    } else {
        displayResult.textContent = "ERROR";
        return;
    }
}

async function play() {
    while (computerScore < 5 && userScore < 5) {
        let userChoice = await getUsersChoice();
        let computerChoice = getComputerChoice().toLowerCase();
        decide(computerChoice, userChoice);
        computerScoreClass.textContent = "Computer Score: " + computerScore;
        userScoreClass.textContent = "Your Score: " + userScore;
    }


}

play();


