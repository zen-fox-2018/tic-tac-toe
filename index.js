//your code here
function ticTacToe() {
  let xo = 'XO'
  let finalBoard = []
  let countX = 1
  let countO = 1
  let karakter;
  
  for (let i = 0; i < 3; i++) {
    let boardTmp = []
    for (let j = 0; j < 3; j++) {
      karakter = xo[Math.floor(Math.random() * xo.length)]
      if (karakter === 'X') {
        countX++
        if (countX === 4) {
          boardTmp.push('O')  
        } 
        else {
          boardTmp.push(karakter)
        }  
      }
      else {
        countO++
        if (countO === 4) {
          boardTmp.push('X')  
        }
        else {
          boardTmp.push(karakter)
        }
      }
      karakter = ''
    }
    finalBoard.push(boardTmp)  
  }
  console.log(finalBoard);
  return theWinner(finalBoard)
}

function theWinner(board) {
  let countX = 0
  let countO = 0

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      //horizontal
      if (j === 0) {
        if (board[i][j] === board[i][j + 1] && board[i][j] === board[i][j + 2]) {
          if (board[i][j] === 'X') {
            countX++  
          }
          else {
            countO++
          }
        }   
      }
      //vertikal
      if (i === 0) {
        if (board[i][j] === board[i + 1][j] && board[i][j] === board[i + 2][j]) {
          if (board[i][j] === 'X') {
            countX++  
          }
          else {
            countO++
          }
        }  
      }  
      //diagonal bawah kanan
      if (i === 0 && j === 0) {
        if (board[i][j] === board[i + 1][j + 1] && board[i][j] === board[i + 2][j + 2]) {
          if (board[i][j] === 'X') {
            countX++  
          }
          else {
            countO++
          }
        }  
      }
      //diagonal atas kanan
      if (i === 2 && j === 0) {
        if (board[i][j] === board[i - 1][j + 1] && board[i][j] === board[i - 2][j + 2]) {
          if (board[i][j] === 'X') {
            countX++  
          }
          else {
            countO++
          }
        }  
      }
    }
  }
  var hasil = 'Score X ' + countX + ' Score O ' + countO
  console.log(hasil);
  return (countX > countO) ? 'X Won The Game!' : (countX === countO) ? 'DRAW' : 'O Won The Game'
}

// var tic_tac_toe = [
//     ['X', 'X', 'O'],
//     ['O', 'X', 'O'],
//     ['O', 'O', 'X']
// ]
console.log(ticTacToe())