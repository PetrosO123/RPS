computerCounter=0;
playerCounter = 0;
tiesCounter = 0;
function computerPlay(){
    x = Math.floor(Math.random()*3)
    if (x==0){
        return 'Rock';
    }
    if (x==1){
        return 'Paper';
    }
    if (x==2){
        return 'Scissors';
    }

}


function playRound(playerSelection, computerSelection){
    if (playerSelection == 'Rock'){
        if (computerSelection == 'Rock'){
            //console.log('Tie');
            document.getElementById("postedResults").textContent = 'Tie';
            tiesCounter++;
            return 'Tie';
        }
        if (computerSelection == 'Paper'){
            //console.log('You Lose! Paper beats Rock');
            document.getElementById("postedResults").textContent = 'You Lose! Paper beats Rock';
            computerCounter++;
            return 'You Lose! Paper beats Rock';
        }
        if (computerSelection == 'Scissors'){
            //console.log('You Win! Rock beats Scissors');
            document.getElementById("postedResults").textContent = 'You Win! Rock beats Scissors';
            playerCounter++;
            return 'You Win! Rock beats Scissors';
        }
    }
    else if (playerSelection == 'Paper'){
        if (computerSelection == 'Rock'){
            //console.log('You Win! Paper beats Rock');
            document.getElementById("postedResults").textContent = 'You Win! Paper beats Rock';
            playerCounter++;
            return 'You Win! Paper beats Rock';
        }
        if (computerSelection == 'Paper'){
            //console.log('Tie');
            document.getElementById("postedResults").textContent = 'Tie';
            tiesCounter++;
            return 'Tie';
        }
        if (computerSelection == 'Scissors'){
            //console.log('You Lose! Scissors beats paper');
            document.getElementById("postedResults").textContent = 'You Lose! Scissors beats paper';
            computerCounter++;
            return 'You Lose! Scissors beats paper';
        }
    }
    else if (playerSelection == 'Scissors'){
        if (computerSelection == 'Rock'){
            //console.log('You Lose! Rock beats Scissors');
            document.getElementById("postedResults").textContent = 'You Lose! Rock beats Scissors';
            computerCounter++;
            return 'You Lose! Rock beats Scissors';
        }
        if (computerSelection == 'Paper'){
            //console.log('You Win! Scissors beats Paper');
            document.getElementById("postedResults").textContent = 'You Win! Scissors beats Paper';
            playerCounter++;
            return 'You Win! Scissors beats Paper';
        }
        if (computerSelection == 'Scissors'){
            //console.log('Tie');
            document.getElementById("postedResults").textContent = 'Tie';
            tiesCounter++;
            return 'Tie';
        }
    }
    else{
        alert("Please enter a valid input.");
    }
}

function game(){
    let choice = userPrompt();
    const choices = ["Rock", "Paper", "Scissors"]
    while (choices.includes(choice)==false){
        alert("Invalid selection! Please make a valid selection: ")
        choice = userPrompt();
    }
    if (choices.includes(choice)){
        console.log(playRound(choice, computerPlay()));
    }
 
}

function userPrompt(){
    let choice = prompt("Please make your selection (Rock, Paper, Scissors): ")
    choice = choice.toLowerCase();
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);
    return choice;
}



// a='hello'
// console.log(a.charAt(0).toUpperCase() + a.splice(1).toLowerCase());

var btn1 = document.getElementById('1');
var btn2 = document.getElementById('2');
var btn3 = document.getElementById('3');

createScore();
btn1.addEventListener("click", function(){
    playRound('Rock', computerPlay());
    addScore();
});
btn2.addEventListener("click", function(){
    playRound('Paper', computerPlay());
    addScore();
});
btn3.addEventListener("click", function(){
    playRound('Scissors', computerPlay());
    addScore();
});

function createScore(){
    var playerWins = document.getElementById('playerWins');
    var computerWins = document.getElementById('computerWins');
    var ties = document.getElementById('ties');
    playerWins.appendChild(document.createTextNode(playerCounter));
    computerWins.appendChild(document.createTextNode(computerCounter));
    ties.appendChild(document.createTextNode(tiesCounter));
}

function addScore(){
    // //accessing scoreboard element under 'results id
    // var scoreboard = document.getElementById('scoreboard');
    // //creating list element under ordered list
    // var entry = document.createElement('li');
    // //accessing value of 'postedResults' variable;
    // var score = document.getElementById("postedResults").textContent;
    // //appending score to list element
    // entry.appendChild(document.createTextNode(score));
    // //appending list element ('entry') to ordered list (ol)
    // scoreboard.appendChild(entry);
   document.getElementById('playerWins').textContent = "Player Wins: "+ playerCounter;
   document.getElementById('computerWins').textContent = "Computer Wins: " + computerCounter;
   document.getElementById('ties').textContent = "Ties: " + tiesCounter;
    
}