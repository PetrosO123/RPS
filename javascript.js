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
            return 'Tie'
        }
        if (computerSelection == 'Paper'){
            return 'You Lose! Paper beats Rock'
        }
        if (computerSelection == 'Scissors'){
            return 'You Win! Rock beats Scissors'
        }
    }
    else if (playerSelection == 'Paper'){
        if (computerSelection == 'Rock'){
            return 'You Win! Paper beats Rock'
        }
        if (computerSelection == 'Paper'){
            return 'Tie'
        }
        if (computerSelection == 'Scissors'){
            return 'You Lose! Scissors beats paper'
        }
    }
    else if (playerSelection == 'Scissors'){
        if (computerSelection == 'Rock'){
            return 'You Lose! Rock beats Scissors'
        }
        if (computerSelection == 'Paper'){
            return 'You Win! Scissors beats Paper'
        }
        if (computerSelection == 'Scissors'){
            return 'Tie'
        }
    }
    else{
        alert("Please enter a valid input.")
    }
}

function game(){
    for (let i =0; i<5; i++){
       let choice = userPrompt();
       const choices = ["Rock", "Paper", "Scissors"]
        while (choices.includes(choice)==false){
            alert("Invalid selection! Please make a valid selection: ")
            choice = userPrompt();
        }
        if (choices.includes(choice)){
            console.log(playRound(choice, computerPlay()))
        }
    }
 
}

function userPrompt(){
    let choice = prompt("Please make your selection (Rock, Paper, Scissors): ")
    choice = choice.toLowerCase()
    choice = choice.charAt(0).toUpperCase() + choice.slice(1)
    return choice 
}

a='hello'
console.log(a.charAt(0).toUpperCase() + a.splice(1).toLowerCase());
