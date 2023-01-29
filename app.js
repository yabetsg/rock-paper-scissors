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
function getUserChoice(){

    const userInput = prompt("Type rock, paper, or scissors");
    return userInput;
}
function winOrlose(){

    computerChoice = getComputerChoice().toLowerCase();
    userChoice = getUserChoice().toLowerCase();
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
    for(let i=0;i<5;i++){
        winOrlose();
    }
}      
play();




