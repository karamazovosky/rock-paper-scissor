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
    //rock > scissors
    if (x === 0 && y === 2){
        console.log("You Lost ! Rock Beats Scissors!");
        return result = 0;
    } else if (x === 2 && y === 0) {
        console.log("You Win ! Rock Beats Scissors!");
        return result = 1;
    }
    //paper > rock
    if (x === 1 && y === 0) {
        console.log("You Lost ! Paper Beats Rocks!");
        return result = 0;
    }else if(x === 0 && y === 1) {
        console.log("You Win ! Paper Beats Rocks!");
        return result = 1;
    }
    //scissors > paper
    if (x === 2 && y ===1) {
        console.log("You Lost ! Scissors Beats Paper!");
        return result = 0;
    }else if(x === 1 && y ===2) {
        console.log("You Win ! Scissors Beats Paper!");
        return result = 1;
    }
    //draw
    if (x === y && x === 0) {
        console.log("Its a Draw! Both Side Picked Rock!");
        return result = 2;
    }else if (x === y && x === 1) {
        console.log("Its a Draw! Both Side Picked Paper!");
        return result = 2;
    }else if(x === y && x === 2) {
        console.log("Its a Draw! Both Side Picked Scissors!");
        return result = 2;
    }
}

function game() {
    let winlose = [];
    for (let i = 0; i<5; i++) {
        let score = playRound();
        let status;
        if (score === 0) {
            status = "Lost";
        }else if (score === 1) {
            status = "Win";
        }else if (score === 2) {
            status = "Draw"
        }
        winlose.push(status);
    }
    for (let j = 0; j<5; j++) {
        console.log(winlose[j]);
    }
}
game()