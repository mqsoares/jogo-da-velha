document.addEventListener('DOMContentLoaded', () => {

    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    const square = event.target;
    const postion = square.id;
    const displayP1 = document.querySelector(".displayP1")
    const displayP2 = document.querySelector(".displayP2")

    if (handleMove(postion)) {
        setTimeout(() => {
            if(playerTime === 0) {
                p1Score += 1;
                displayP1.textContent = p1Score;
            } else {
                p2Score += 1;
                displayP2.textContent = p2Score;
            }
            alert(` Player ${playerTime + 1} Venceu!`);
              
        }, 10);
    };
    updateSquare(postion);

}

function updateSquare(postion) {

    const square = document.getElementById(postion.toString());
    const symbol = board[postion];
    square.innerHTML = `<div class='${symbol}'></div>`

}

function updateSquares() {

    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let postion = square.id;
        let symbol = board[postion];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })

}

const reset = document.querySelector("#restart")
reset.addEventListener('click', () => {
    
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.innerHTML = ``;        
    })

    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = playerTime;
    gameOver = false; 
    
})