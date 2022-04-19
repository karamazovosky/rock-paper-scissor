function computerPlay () {
    let hand = Math.floor(Math.random()*3);
    return hand;
}

//only used on first iteration ------------------------
// function playerPlay() {
//     let check = true;
//     while (check) {
//         let hand = prompt('Select your hand (Rock/Paper/Scissors) :');
//         hand = hand.toLowerCase();
//         if (hand==='rock') {
//             return hand = 0;
//         }else if (hand==='paper') {
//             return hand = 1;
//         }else if (hand==='scissors') {
//             return hand = 2;
//         }else {
//             alert('Please Input the Correct Play')
//         } 
//     }
// }


function playRound (y = playerPlay(), x = computerPlay()) {
    let result;
    console.log(y);
    console.log(x);
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
//set div and button visibility
document.getElementById("hands").style.visibility = "hidden";
document.getElementById("button").style.visibility = "visible";

//function to hide button
function hidebutton() {
    var x = document.getElementById("button")
    if(x.style.visibility === "visible") {
        x.style.visibility = "hidden";
    }else {
        x.style.visibility = "visible";
    }
}

// function to show div / start game
document.getElementById("button").addEventListener("click", showchoice)
function showchoice() {
    var x = document.getElementById("hands");
    if(x.style.visibility === "hidden") {
        x.style.visibility = "visible";
    }else {
        x.style.visibility = "hidden";
    }
    hidebutton();
    document.getElementById("stage").style.display= "block";
}



//function to be executed when eventlistener triggered
function playRock() {
    let x = playRound(0);
    nextRound(x);
}
function playPaper() {
    let x = playRound(1);
    nextRound(x);
}
function playScissors() {
    let x = playRound(2);
    nextRound(x);
}

//function for eventlistener 
let rockClick = document.getElementById("rock").addEventListener("click", playRock);
let paperClick = document.getElementById("paper").addEventListener("click", playPaper);
let scissorsClick = document.getElementById("scissors").addEventListener("click", playScissors);


let playerScore = 0
let computerScore = 0
let drawScore = 0
//function temp for next round - the game itself
function nextRound(value) {
    if(value === 0) {
        computerScore +=1
        displayscoreC.textContent = computerScore;
        displayscoreR.textContent = computerScore+playerScore+drawScore;
        checkScore();
    }else if(value === 1) {
        playerScore +=1
        displayscoreP.textContent = playerScore;
        displayscoreR.textContent = computerScore+playerScore+drawScore;
        checkScore();
    }else if(value === 2) {
        drawScore +=1
        displayscoreR.textContent = computerScore+playerScore+drawScore;
        checkScore();
    }

}

//function to play best of 3 game and to show score
function checkScore() {
    if(computerScore == 5|| playerScore == 5) {
        if(computerScore ==5) {
            alert("Computer Wins !, Try Again!")
        }else {
            alert("You Win! Congratulations!")
        }
        document.getElementById("hands").style.visibility = "hidden";
        document.getElementById("button").style.visibility = "visible";
        playerScore = 0
        computerScore = 0
        drawScore = 0
        document.getElementById("stage").style.display= "none";
    }return
}

let displayscoreP = document.getElementById("bigscoreyou");
let displayscoreC = document.getElementById("bigscorecomp");
let displayscoreR = document.querySelector('p.gamenumber');