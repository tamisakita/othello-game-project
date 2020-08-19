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
let playerTurn = 'black';


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

function addPieceToBoard() {
  document.querySelectorAll('.square').forEach((square) => {
    if (!square.hasChildNodes()) {
      square.addEventListener('click', () => {
        if (square.hasChildNodes()) return;
        const piece = document.createElement('div');

        if (playerTurn === 'black') {
          square.appendChild(piece);
          piece.setAttribute('class', 'piece color-black');
          playerTurn = 'white';
          checkOpponentPieces();
        } else {
          square.appendChild(piece);
          piece.setAttribute('class', 'piece color-white');
          playerTurn = 'black';
          checkOpponentPieces();
        }
      });
    }
  });
}

addPieceToBoard();

function checkOpponentPieces() {
  const squares = document.querySelectorAll('.square');
  let isPieceTurned = false;
  for (let i = 0; i < squares.length; i += 1) {
    const squareId = squares[i].getAttribute('id');
    let x = +squareId[7];
    let y = +squareId[9];

    const piece = squares[i].querySelector('.piece');
    if (!squares[i].hasChildNodes()) continue;
    const pieceColor = piece.getAttribute('class');

    const vertical1 = `square-${x}-${y - 1}`;
    const vertical2 = `square-${x}-${y + 1}`;

    const verticalSquare1 = document.getElementById(vertical1);
    const verticalSquare2 = document.getElementById(vertical2);

    console.log('square sendo verificada', squares[i]);
    console.log('vertical1', verticalSquare1, 'vertical2', verticalSquare2);

    if (verticalSquare1 && verticalSquare2) {
      let checkIfHavePiece1 = verticalSquare1.children[0];
      let checkIfHavePiece2 = verticalSquare2.children[0];
      if (checkIfHavePiece1 && checkIfHavePiece2) {
        const color1 = checkIfHavePiece1.getAttribute('class');
        const color2 = checkIfHavePiece2.getAttribute('class');
        if (color1 !== pieceColor && color2 !== pieceColor) {
          piece.setAttribute('class', color1);
          isPieceTurned = true;
          break;
        }
      }
    }
  }
  if (isPieceTurned) {
    checkOpponentPieces();
  }
}

// procurar em cada peça se tem em volta delas peças de outra cor
// começar identificando se tem duas peças em volta(horizontal, vertical ou diagonais)

// horizontal x-1, y
// diagonal x-1, y+1/ x+1, y-1
// vertical x, y-1
// square-[7]-[9] = 7 =x 9=y; getElement by id
// if (square 1 && square 2) verficar se esses squares tem piece


// function verificar se posso colocar a peca
// function se nao tiver movimentos o jogo acaba
// function somar pecas e ver quem ganhou