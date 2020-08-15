const initialGame = {
  player1Black: true,
  player2White: true,
  player1First: true,
  startPieces: [
    {
      positionId: 'square-4-4',
      color: 'white',
    },
    {
      positionId: 'square-4-5',
      color: 'black',
    },
    {
      positionId: 'square-5-4',
      color: 'black',
    },
    {
      positionId: 'square-5-5',
      color: 'white',
    },
  ],
};

document.querySelectorAll('.square').forEach((square) => {
  const squarePosition = square.getAttribute('id');
  for (let i = 0; i < initialGame.startPieces.length; i++) {
    if (initialGame.startPieces[i].positionId === squarePosition) {
      const newPiece = document.createElement('div');
      newPiece.setAttribute('class', `piece color-${initialGame.startPieces[i].color}`);
      square.appendChild(newPiece);
    }
  }
});

function myTurn() {
  if (initialGame.player1First === initialGame.player1Black) {
    return true;
  } if (initialGame.player1First === initialGame.player2White) {
    return false;
  }
}

function addPieceToBoard() {
  document.querySelectorAll('.square').forEach((square) => {
    if (!square.hasChildNodes()) {
      square.addEventListener('click', () => {
        const piece = document.createElement('div');
        if (initialGame.player1Black) {
          piece.setAttribute('class', 'piece color-black');
          square.appendChild(piece);
        } else if (initialGame.player2White) {
          piece.setAttribute('class', 'piece piece-white');
          square.appendChild(piece);
        }
      });
    }
  });
}

addPieceToBoard();

// function addPieceToBoard() {
//   document.querySelectorAll('.square').forEach((square) => {
//     if (!square.hasChildNodes()) {
//       square.addEventListener('click', () => {
//         const piece = document.createElement('div');
//         piece.setAttribute('class', 'piece');
//         square.appendChild(piece);
//       });
//     }
//   });
// }

// addPieceToBoard();


// loop no board em todos squares
// para cada square verificar se dentro dele nao existe uma peca(se o square tem um child)
// se nao tiver, colocar um eventlistener (comecar colocar console.log) onclick
// na hora que clicar, verificar de quem é a vez