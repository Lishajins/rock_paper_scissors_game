function getComputerChoice(){
    let x= Math.random();
    let cChoice;
    if(x<0.3){
        cChoice="Rock";
    }else if(x>=0.3 && x<0.7){
        cChoice="Paper";
    }else{
        cChoice="Scissors";
    }
    return cChoice;
}

function getHumanChoice(){
    let hChoice=prompt("Enter your choice");
    return hChoice;
}
let humanScore=0;
let computerScore=0;

function playRound(hChoice,cChoice){
    let human=hChoice.toLowerCase();
    let computer=cChoice.toLowerCase();

    if ( human === computer){
        console.log("Its a tie!");
    }
    else{
        if(human === "rock" && computer === "scissors"){
            console.log(`Human wins! ${human} beats ${computer}.`);
            humanScore++;
        }
        else if(human === "paper" && computer === "rock"){
            console.log(`Human wins! ${human} beats ${computer}.`);
            humanScore++;
        }
        else if(human === "scissors" && computer === "paper"){
            console.log(`Human wins! ${human} beats ${computer}.`);
            humanScore++;
        }else{
            console.log(`Computer wins! ${computer} beats ${human}.`);
            computerScore++;
        }
    }
}

function playGame(){
    for(let i=0;i<5;i++){
        let x=getComputerChoice();
        let y=getHumanChoice();

        playRound(y,x);
    }
}

playGame();