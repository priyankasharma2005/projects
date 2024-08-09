var playerRed = "R";
var playerYellow = "Y";
var currPlayer = playerRed;
var gameOver = false;
var board;
var currColumns;
var rows = 6;
var columns = 7;

window.onload = function () {
    setGame();
}

function setGame() {
    board = [];
    currColumns = [5, 5, 5, 5, 5, 5, 5];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            row.push('');
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile"); // Fixed class name here
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}

function setPiece() {
    if (gameOver) {
        return;
    }

    let coords = this.id.split("-");
    let r = currColumns[parseInt(coords[1])];
    if (r < 0) {
        return;
    }

    board[r][parseInt(coords[1])] = currPlayer;
    let tile = document.getElementById(r.toString() + "-" + coords[1]);
    if (currPlayer == playerRed) {
        tile.classList.add("red-piece");
        currPlayer = playerYellow;
    } else {
        tile.classList.add("yellow-piece"); // Fixed typo here
        currPlayer = playerRed;
    }
    currColumns[parseInt(coords[1])]--; // Fixed decrementing the row index

    checkWinner();
}

function checkWinner() {
    // Check horizontal
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] !== '' &&
                board[r][c] == board[r][c + 1] &&
                board[r][c + 1] == board[r][c + 2] &&
                board[r][c + 2] == board[r][c + 3]) {
                setWinner(r, c);
                return;
            }
        }
    }

    // Check vertical
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            if (board[r][c] !== '' &&
                board[r][c] == board[r + 1][c] &&
                board[r + 1][c] == board[r + 2][c] &&
                board[r + 2][c] == board[r + 3][c]) {
                setWinner(r, c);
                return;
            }
        }
    }

    // Check diagonal (top-left to bottom-right)
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] !== '' &&
                board[r][c] == board[r + 1][c + 1] &&
                board[r + 1][c + 1] == board[r + 2][c + 2] &&
                board[r + 2][c + 2] == board[r + 3][c + 3]) {
                setWinner(r, c);
                return;
            }
        }
    }

    
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] !== '' &&
                board[r][c] == board[r - 1][c + 1] &&
                board[r - 1][c + 1] == board[r - 2][c + 2] &&
                board[r - 2][c + 2] == board[r - 3][c + 3]) {
                setWinner(r, c);
                return;
            }
        }
    }
}

function setWinner(r, c) {
    let winner = document.getElementById("winner");
    if (board[r][c] == playerRed) {
        winner.innerText = "Red Wins";
    } else {
        winner.innerText = "Yellow Wins";
    }

    gameOver = true;
}
