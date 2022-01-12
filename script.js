function computerPlay (type) {
    x = Math.floor(Math.random()*3);
    if (x === 0) {
        type = 'Rock';
    }else if(x===1){
        type ='Paper';
    }else {
        type ='Scissor';
    }
    return(type);
}

console.log(computerPlay());