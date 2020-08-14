// constantes
// let board = [];

// get the elements

// // Interation: Initial value of the state (the state values can change over time)
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

document.querySelectorAll('.square').forEach((square) => {
  const squarePosition = square.getAttribute('id');
  for (let i = 0; i < squarePosition.length; i++) {
    const onePiece = document.getElementById('piece');
    if (!squarePosition[i] === onePiece) {
      squarePosition.addEventListener('click', function() => {
        
      });
    }
  }
});

// loop no board em todos squares
// para cada square verificar se dentro dele nao existe uma peca(se o square tem um child)
// se nao tiver, colocar um eventlistener (comecar colocar console.log) onclick
// na hora que clicar, verificar de quem é a vez
//
