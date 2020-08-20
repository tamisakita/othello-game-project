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
          checkVertical(square);
        } else {
          square.appendChild(piece);
          piece.setAttribute('class', 'piece color-white');
          playerTurn = 'black';
          checkVertical(square);
        }
      });
    }
  });
}

addPieceToBoard();

function checkOpponentPieces() {

}

function checkVertical(square) {
  const squareId = square.getAttribute('id');
  let y = +squareId[9];
  let x = +squareId[7];

  let previousPieces = [];
  let nextPieces = [];

  const clickPiece = square.children[0];
  const clickPieceColor = clickPiece.getAttribute('class');

  for (let k = y + 1; k <= 8; k += 1) {
    const squareId2 = `square-${x}-${k}`;
    const nextSquare = document.getElementById(squareId2);
    const piece = nextSquare.children[0];

    if (piece) {
      nextPieces.push(piece);
    } else {
      break;
    }
  }
  for (let p = y - 1; p > 0; p -= 1) {
    const squareId2 = `square-${x}-${p}`;
    const previousSquare = document.getElementById(squareId2);
    const piece = previousSquare.children[0];

    if (piece) {
      previousPieces.push(piece);
    } else {
      break;
    }
  }

  for (let r = nextPieces.length - 1; r > 0; r -= 1) {
    const colorPiece = nextPieces[r].getAttribute('class');
    if (colorPiece === clickPieceColor) {
      const piecesFlipped = nextPieces[r].getAttribute('class', clickPieceColor);

      console.log(piecesFlipped);
        // transformar todos os pieces na cor do color clickPieceColor
    }
  }

  for (let f = previousPieces.length - 1; f > 0; f -= 1) {
    const colorPiece = previousPieces[f].getAttribute('class');

    if (colorPiece === clickPieceColor) {
      clickPiece.setAttribute('class', colorPiece);
      console.log('sao iguais previous');
    }
  }
}

// const squares = document.querySelectorAll('.square');
// let isPieceTurned = false;
// for (let i = 0; i < squares.length; i += 1) {
//   const squareId = squares[i].getAttribute('id');
//   let x = +squareId[7];
//   let y = +squareId[9];

//   const piece = squares[i].querySelector('.piece');
//   if (!squares[i].hasChildNodes()) continue;
//   const pieceColor = piece.getAttribute('class');

//   const vertical1 = `square-${x}-${y - 1}`;
//   const vertical2 = `square-${x}-${y + 1}`;

//   const verticalSquare1 = document.getElementById(vertical1);
//   const verticalSquare2 = document.getElementById(vertical2);

//   console.log('square sendo verificada', squares[i]);
//   console.log('vertical1', verticalSquare1, 'vertical2', verticalSquare2);

//   if (verticalSquare1 && verticalSquare2) {
//     let checkIfHavePiece1 = verticalSquare1.children[0];
//     let checkIfHavePiece2 = verticalSquare2.children[0];
//     if (checkIfHavePiece1 && checkIfHavePiece2) {
//       const color1 = checkIfHavePiece1.getAttribute('class');
//       const color2 = checkIfHavePiece2.getAttribute('class');
//       if (color1 !== pieceColor && color2 !== pieceColor) {
//         piece.setAttribute('class', color1);
//         isPieceTurned = true;
//         break;
//       }
//     }
//   }
// }
// if (isPieceTurned) {
//   checkOpponentPieces();
// }

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

// const rows = document.querySelectorAll('.row');
//   for (let i = 0; i < rows.length; i += 1) {
//     const squares = rows[i].querySelectorAll('.square');
//     console.log(squares);

//     for (let j = 0; j < squares.length; j += 1) {
//       const squareId = squares[j].getAttribute('id');
//       console.log(squareId);

//       let x = +squareId[7];
//       let y = +squareId[9];

//       const piece = squares[j].querySelector('.piece');
//       if (!squares[j].hasChildNodes()) continue;
//       const pieceColor = piece.getAttribute('class');

//       const vertical = ;
//     }
//   }

// function checkVertical(square) {
//   const squareId = square.getAttribute('id');
//   let y = +squareId[9];
//   let x = +squareId[7];

//   let previousPieces = [];
//   let nextPieces = [];

//   const clickPiece = square.children[0];
//   const clickPieceColor = clickPiece.getAttribute('class');

//   for (let k = y + 1; k <= 8; k += 1) {
//     const squareId2 = `square-${x}-${k}`;
//     const nextSquare = document.getElementById(squareId2);
//     const piece = nextSquare.children[0];

//     if (piece) {
//       nextPieces.push(piece);
//     } else {
//       break;
//     }
//   }
//   for (let p = y - 1; p > 0; p -= 1) {
//     const squareId2 = `square-${x}-${p}`;
//     const previousSquare = document.getElementById(squareId2);
//   }

//   for (let r = nextPieces.length - 1; r >= 0; r -= 1) {
//     const colorPiece = nextPieces[r].getAttribute('class');
//     if (colorPiece === clickPieceColor) {
//       console.log('sao iguais');
//     }
//   }
// }