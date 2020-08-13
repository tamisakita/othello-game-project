// constantes
// let board = [];

// get the elements
const board = document.querySelector('.game-board');
const square = document.querySelectorAll('.square');
const piece = document.querySelector('.piece');
const colorBlack = document.querySelector('.color-black');
const colorWhite = document.querySelector('.color-white');

// Interation: Initial value of the state (the state values can change over time)
let initialGame = {
  player1Black: true,
  player2White: true,
  player1First: true,
  startPieces: [
    {
      piecePlayer: piece,
      position: [4, 4],
      color: colorWhite,
    },
    {
      piecePlayer: piece,
      position: [4, 5],
      color: colorBlack,
    },
    {
      piecePlayer: piece,
      position: [5, 4],
      color: colorBlack,
    },
    {
      piecePlayer: piece,
      position: [5, 4],
      color: colorWhite,
    },
  ],
};


// Interation: set each square (what is the position)
// function startBoard() {
//   document.querySelectorAll('#square-').forEach(() => {
//     if (initialGame.startPieces) {
//       return 
//     }
//   });
// }

startBoard();

// Iteration: function to add pieces in the board
// function addPieces(row, col, pieceColor) {
//   const square = eachSquareElement(row, col);
//   const piece = document.createElement('div');
//   piece.classList.add('piece');
//   piece.classList.add(pieceColor);
//   square.appendChild(piece);
// }

// Iteration: set the color of the pieces

// Iteration: check the squares that can receive the pieces

// Iteration: set the visibility of the initial pieces in the board

// Iteration: set the movement of player 1/2

// Iteration: flip the pieces when needed

// Iteration: check if you can no longer add pieces

// Iteration: check the number of pieces of each player to finish the game

// Iteration: Sum the pieces to check the winner or if its tie
