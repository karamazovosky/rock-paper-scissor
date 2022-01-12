function computerPlay () {
    hand = Math.floor(Math.random()*3);
    return hand;
}


function playerPlay() {
    hand = prompt('Select your hand :');
    console.log(hand);
    type = hand.toLowerCase();
    if (hand==='rock') {
        hand = 0;
    }else if (type==='paper') {
        hand = 1;
    }else if (type ==='scissors') {
        hand = 2;
    }else {
        alert('Please Input the Correct Play')
    } 
    return hand;
}

playerPlay()
