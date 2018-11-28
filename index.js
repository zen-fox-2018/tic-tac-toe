const size = 3;

function tictactoe() {
  //your code here
  let gameBoard = [];
  let pattern = 'XO';
  let counterX = 5;
  let counterO = 5;

  for (let i = 0; i < size; i++) {
    gameBoard[i] = [];
    for (let j = 0; j < size; j++) {
      const randomPattern = Math.round(Math.random());
      debugger;
      if (pattern[randomPattern] === 'X' && counterX > 0) {
        gameBoard[i].push(pattern[randomPattern])
        counterX--
      } else if (pattern[randomPattern] === 'O' && counterO > 0) {
        gameBoard[i].push(pattern[randomPattern])
        counterO--
      } else {
        if (counterX === 0) {
          gameBoard[i].push('O')
        } else {
          gameBoard[i].push('X')
        }
      }
      debugger
    }
  }

  return gameBoard
}

console.log(tictactoe(size));