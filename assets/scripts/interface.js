document.addEventListener('DOMContentLoaded', () => {

    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    const square = event.target;
    const postion = square.id;

    if (handleMove(postion)) {
        setTimeout(() => {
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