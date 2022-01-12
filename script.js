function computerPlay () {
    let hand = Math.floor(Math.random()*3);
    return hand;
}


function playerPlay() {
    let check = true;
    while (check) {
        let hand = prompt('Select your hand (Rock/Paper/Scissors) :');
        console.log(hand);
        hand = hand.toLowerCase();
        if (hand==='rock') {
            check = false;
            return hand = 0;
        }else if (hand==='paper') {
            check = false;
            return hand = 1;
        }else if (hand==='scissors') {
            check = false;
            return hand = 2;
        }else {
            alert('Please Input the Correct Play')
        } 
    }
}

function playRound (x = computerPlay(), y = playerPlay()) {
    let result
    //rock > scissors
    if (x === 0 && y === 2 ){
        return (result = "You Lost ! Rock Beats Scissors!")
    } else if (x === 2 && y === 0) {
        return (result = "You Win ! Rock Beats Scissors !")
    }
    //paper > rock
    if (x === 1 && y === 0) {
        return (result = "You Lost ! Paper Beats Rocks!")
    }else if(x === 1 && y === 0) {
        return (result = "You Win! Paper Beats Rocks!")
    }

    //scissors > paper
    if (x === 2 && y ===1) {
        return (result = "You Lost ! Scissors Beats Paper!");
    }else if(x === 1 && y ===2) {
        return (result = "You Lost ! Scissors Beats Paper!");
    }
    //draw
    if (x === y === 0) {
        return (result("Its a Draw! Both Side Picked Rock!"));
    }else if (x === y === 1) {
        return (result("Its a Draw! Both Side Picked Paper!"));
    }else if(x === y === 2) {
        return (result("Its a Draw! Both Side Picked Scissors!"));
    }
}
console.log(playRound());

