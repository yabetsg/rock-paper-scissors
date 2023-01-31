const rock = document.querySelector('.rock');
const paper =  document.querySelector('.paper');
const scissors =  document.querySelector('.scissors');
const displayResult = document.querySelector('div');

function getComputerChoice(){
    
    let randomNum = Math.floor(Math.random()*3)+1;
    switch(randomNum){
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

function getUsersChoice(){
    let userChoice = '';
     rock.addEventListener('click',() =>{
       userChoice = "rock";
       console.log(userChoice);
   });
   paper.addEventListener('click',() =>{
       userChoice = "paper";
       console.log(userChoice);
   });
   scissors.addEventListener('click',() =>{
        userChoice = "scissors";
        console.log(userChoice);
   });
   return userChoice;
}
 
function winOrlose(){
    
    let computerChoice = getComputerChoice().toLowerCase();
    console.log('output:' + computerChoice)
    let userChoice = getUsersChoice();
    if(computerChoice === "rock" && userChoice==="scissors" || computerChoice === "paper"&& userChoice === "rock"|| computerChoice === "scissors" && userChoice === "paper"){
            console.log("Computer Wins!");
            return;
    }else if(userChoice === "rock" && computerChoice==="scissors" || userChoice === "paper"&& computerChoice === "rock"|| userChoice === "scissors" && computerChoice === "paper"){
            console.log("You win!");
            return;
  
    }else if(userChoice === computerChoice || computerChoice == userChoice){
        console.log("its a tie");
        return;
    }else{
        console.log("Please enter the right input");
    }
}

function play(){
        winOrlose(); 
}      


play();