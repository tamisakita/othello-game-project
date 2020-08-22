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
          checkHorizontal(square);
          if (gameOver()) checkTheWinner();
        } else {
          square.appendChild(piece);
          piece.setAttribute('class', 'piece color-white');
          playerTurn = 'black';
          checkVertical(square);
          checkHorizontal(square);
          if (gameOver()) checkTheWinner();
        }
      });
    }
  });
}

addPieceToBoard();

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
      const squareId3 = +nextPieces[r].parentNode.getAttribute('id')[9];

      for (let h = y; h < squareId3; h += 1) {
        const turnPieceSquareId = `square-${x}-${h}`;
        const turnPieceSquare = document.getElementById(turnPieceSquareId);
        turnPieceSquare.children[0].setAttribute('class', clickPieceColor);
      }
    }
  }

  for (let f = previousPieces.length - 1; f > 0; f -= 1) {
    const colorPiece = previousPieces[f].getAttribute('class');

    if (colorPiece === clickPieceColor) {
      const squareId3 = +previousPieces[f].parentNode.getAttribute('id')[9];

      for (let z = squareId3; z < y; z += 1) {
        const turnPieceSquareId = `square-${x}-${z}`;
        const turnPieceSquare = document.getElementById(turnPieceSquareId);
        turnPieceSquare.children[0].setAttribute('class', clickPieceColor);
      }
    }
  }
}

function checkHorizontal(square) {
  const squareId = square.getAttribute('id');
  let y = +squareId[9];
  let x = +squareId[7];

  let leftPieces = [];
  let rightPieces = [];

  const clickPiece = square.children[0];
  const clickPieceColor = clickPiece.getAttribute('class');

  for (let i = x + 1; i <= 8; i += 1) {
    const squareId2 = `square-${i}-${y}`;
    const leftSquare = document.getElementById(squareId2);
    const piece = leftSquare.children[0];

    if (piece) {
      leftPieces.push(piece);
    } else {
      break;
    }
  }

  for (let a = x - 1; a > 0; a -= 1) {
    const squareId2 = `square-${a}-${y}`;
    const rightSquare = document.getElementById(squareId2);
    const piece = rightSquare.children[0];

    if (piece) {
      rightPieces.push(piece);
    } else {
      break;
    }
  }

  for (let b = leftPieces.length - 1; b > 0; b -= 1) {
    const colorPiece = leftPieces[b].getAttribute('class');

    if (colorPiece === clickPieceColor) {
      const squareId3 = +leftPieces[b].parentNode.getAttribute('id')[7];

      for (let c = x; c < squareId3; c += 1) {
        const turnPieceSquareId = `square-${c}-${y}`;
        const turnPieceSquare = document.getElementById(turnPieceSquareId);
        turnPieceSquare.children[0].setAttribute('class', clickPieceColor);
      }
    }
  }

  for (let c = rightPieces.length - 1; c > 0; c -= 1) {
    const colorPiece = rightPieces[c].getAttribute('class');

    if (colorPiece === clickPieceColor) {
      const squareId3 = +rightPieces[c].parentNode.getAttribute('id')[7];

      for (let d = squareId3; d < x; d += 1) {
        const turnPieceSquareId = `square-${d}-${y}`;
        const turnPieceSquare = document.getElementById(turnPieceSquareId);
        turnPieceSquare.children[0].setAttribute('class', clickPieceColor);
      }
    }
  }
}

// function checkDiagonal1(square) {
//   const squareId = square.getAttribute('id');
//   let y = +squareId[9];
//   let x = +squareId[7];

//   let leftTopPieces = [];
//   let rightTopPieces = [];
//   let leftBottomPieces = [];
//   let rightBottomPieces = [];

//   const clickPiece = square.children[0];
//   const clickPieceColor = clickPiece.getAttribute('class');

//   for (let a = x - 1; a > 0; a -= 1) {
//     for (let b = y - 1; b <= 8; b += 1) {
//       const squareId2 = `square-${a}-${b}`;
//       const leftTopSquare = document.getElementById(squareId2);
//       const piece = leftTopSquare.children[0];

//       if (piece) {
//         leftTopPieces.push(piece);
//       } else {
//         break;
//       }
//     }
//   }

//   for (let c = leftTopPieces.length - 1; c > 0; c -= 1) {
//     const colorPiece = leftTopPieces[c].getAttribute('class');

//     if (colorPiece === clickPieceColor) {
//       const squareId3 = +leftTopPieces[c].parentNode.getAttribute('id')[7];
//       const squareId4 = +leftTopPieces[c].parentNode.getAttribute('id')[9];

//       for (let d = squareId3; d < x; d += 1) {
//         for (let e = squareId4; e < y; e += 1) {
//           const turnPieceSquareId = `square-${d}-${e}`;
//           const turnPieceSquare = document.getElementById(turnPieceSquareId);
//           turnPieceSquare.children[0].setAttribute('class', clickPieceColor);
//         }
//       }
//     }
//   }
// }

function gameOver() {
  const squares = document.querySelectorAll('.square');
  let isGameOver = true;

  for (let i = 0; i < squares.length; i += 1) {
    if (!squares[i].children[0]) {
      isGameOver = false;
      break;
    }
  }
  return isGameOver;
}

function checkTheWinner() {
  const pieceBlack = document.querySelectorAll('.color-black');
  const pieceWhite = document.querySelectorAll('.color-white');

  if (pieceBlack.length > pieceWhite.length) {
    document.body.innerHTML = "";
    let newTag = document.createElement('h1');
    let text = document.createTextNode('Black is the winner!');
    newTag.appendChild(text);
    let newTagText = document.getElementById('h1');
    document.body.insertBefore(newTag, newTagText);
    let div = document.createElement('div');
    div.classList.add('button-style');
    div.innerHTML = 'Start Again!';
    div.addEventListener('click', () => {
      window.location.reload();
    });
    document.body.appendChild(div);
  } else {
    document.body.innerHTML = "";
    let newTag = document.createElement('h1');
    let text = document.createTextNode('White is the winner!');
    newTag.appendChild(text);
    let newTagText = document.getElementById('h1');
    document.body.insertBefore(newTag, newTagText);
    let div = document.createElement('div');
    div.classList.add('button-style');
    div.innerHTML = 'Start Again!';
    div.addEventListener('click', () => {
      window.location.reload();
    });
    document.body.appendChild(div);
  }
  if (pieceBlack.length === pieceWhite.length) {
    document.body.innerHTML = "";
    let newTag = document.createElement('h1');
    let text = document.createTextNode('It`s a tie!');
    newTag.appendChild(text);
    let newTagText = document.getElementById('h1');
    document.body.insertBefore(newTag, newTagText);
    let div = document.createElement('div');
    div.classList.add('button-style');
    div.innerHTML = 'Start Again!';
    div.addEventListener('click', () => {
      window.location.reload();
    });
    document.body.appendChild(div);
  }
}
