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


const info= document.createElement("div");
info.style.color="blue";
document.body.appendChild(info);

const scoreCard= document.createElement("div");
scoreCard.style.color="wheat";
document.body.appendChild(scoreCard);

function playRound(hChoice,cChoice){
    let human=hChoice.toLowerCase();
    let computer=cChoice.toLowerCase();

    if ( human === computer){
        console.log("Its a tie!");
    }
    else{
        if(human === "rock" && computer === "scissors"){
            info.textContent=`Human wins! ${human} beats ${computer}.`;
            humanScore++;
        }
        else if(human === "paper" && computer === "rock"){
            info.textContent=`Human wins! ${human} beats ${computer}.`;
            humanScore++;
        }
        else if(human === "scissors" && computer === "paper"){
            info.textContent=`Human wins! ${human} beats ${computer}.`;
            humanScore++;
        }
        else{
            info.textContent=`Computer wins! ${computer} beats ${human}.`;
            computerScore++;
        }
        scoreCard.textContent=`Human : ${humanScore}  Computer : ${computerScore}`;
    }

    if(humanScore===5){
        alert("Human wins!");
        return ;
    }else if(computerScore===5){
        alert("Computer wins");
        return ;
    }
}

const rock= document.querySelector("#bt1");
rock.addEventListener("click", () => {playRound("rock",getComputerChoice())});

const paper=document.querySelector("#bt2");
paper.addEventListener("click", () => {playRound("paper",getComputerChoice())});

const scissors= document.querySelector("#bt3");
scissors.addEventListener("click", () => {playRound("scissors",getComputerChoice())});

const restart=document.querySelector("#restart");
restart.addEventListener("click", () => {
    humanScore=0;
    computerScore=0;
    info.textContent = "Game reset! Make your move.";
    scoreCard.textContent = "Human : 0  Computer : 0";
});
