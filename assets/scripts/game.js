let board = ['', '', '', '', '', '', '', '', ''];
const symbols = ['o', 'x'];
let playerTime = 0;
let gameOver = false;
let p1Score = 0;
let p2Score = 0;

const winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function handleMove(position) {

    if (gameOver) {
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if (gameOver == false) {
            playerTime = (playerTime == 0) ? 1 : 0;
        }
    }
    return gameOver;
    
}

function isWin() {

    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        const pos1 = seq[0];
        const pos2 = seq[1];
        const pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {

            return true;
        }
    }
    return false;

}