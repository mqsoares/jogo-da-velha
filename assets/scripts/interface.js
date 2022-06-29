const ofTime1 = document.querySelector(".ofTime1");
const ofTime2 = document.querySelector(".ofTime2");

document.addEventListener('DOMContentLoaded', () => {

    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

    if(playerTime == 0){
        ofTime2.style.color = "#2f3640"
    }

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
            alert(`### Jogador ${playerTime + 1} Venceu!
Quem vence, inicia jogando na próxima. ;-)
            
            Novo Jogo - Continuar Jogando
            F5 - Resetar Placar`);
              
        }, 10);
    };
    updateSquare(postion);

}

function updateSquare(postion) {

    const square = document.getElementById(postion.toString());
    const symbol = board[postion];
    square.innerHTML = `<div class='${symbol}'></div>`

   

    if(playerTime == 0){
        ofTime1.style.color = "#00a8ff"
        ofTime2.style.color = "#2f3640"
    }else {
        ofTime1.style.color = "#2f3640"
        ofTime2.style.color = "#00a8ff"
    }
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