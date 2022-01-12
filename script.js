function computerPlay () {
    let hand = Math.floor(Math.random()*3);
    return hand;
}


function playerPlay() {
    let check = true;
    while (check) {
        let hand = prompt('Select your hand (Rock/Paper/Scissors) :');
        hand = hand.toLowerCase();
        if (hand==='rock') {
            return hand = 0;
        }else if (hand==='paper') {
            return hand = 1;
        }else if (hand==='scissors') {
            return hand = 2;
        }else {
            alert('Please Input the Correct Play')
        } 
    }
}

function playRound (x = computerPlay(), y = playerPlay()) {
    let result;
    console.log(x);
    console.log(y);
    //rock > scissors
    if (x === 0 && y === 2){
        alert("You Lost ! Rock Beats Scissors!");
        return result = 0;
    } else if (x === 2 && y === 0) {
        alert("You Win ! Rock Beats Scissors!");
        return result = 1;
    }
    //paper > rock
    if (x === 1 && y === 0) {
        alert("You Lost ! Paper Beats Rocks!");
        return result = 0;
    }else if(x === 0 && y === 1) {
        alert("You Win ! Paper Beats Rocks!");
        return result = 1;
    }
    //scissors > paper
    if (x === 2 && y ===1) {
        alert("You Lost ! Scissors Beats Paper!");
        return result = 0;
    }else if(x === 1 && y ===2) {
        alert("You Win ! Scissors Beats Paper!");
        return result = 1;
    }
    //draw
    if (x === y && x === 0) {
        alert("Its a Draw! Both Side Picked Rock!");
        return result = 2;
    }else if (x === y && x === 1) {
        alert("Its a Draw! Both Side Picked Paper!");
        return result = 2;
    }else if(x === y && x === 2) {
        alert("Its a Draw! Both Side Picked Scissors!");
        return result = 2;
    }
}

function game() {
    let gameCounter = true ;
    let computerScore = 0;
    let playerScore = 0;
    let drawScore = 0;
    while(gameCounter) {
        let plays = playRound();
        if (plays === 0) {
            computerScore++;
        }else if (plays === 1) {
            playerScore++;
        }else if (plays === 2 ){
            drawScore++
        }
        if(computerScore === 5 || playerScore === 5) {
            gameCounter = false;
        }
    }
   if (playerScore === 5) {
       alert("You Win! Score: " + playerScore+ " Win - " + drawScore + " Draws - " + computerScore + " Lost");
   }else {
       alert("You Lost! Score: " + playerScore+ " Win - " + drawScore + " Draws - " + computerScore + " Lost");
   }
}
game()