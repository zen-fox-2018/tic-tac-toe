function random() {
  let kamus = 'XO'
  return kamus.charAt(Math.floor(Math.random()* kamus.length))
}

// console.log(random())

function tictac() {
  let counto = 0
  let countx = 0 
  let result = []
  
  for (let i = 0; i < 3; i++) {
    let temp = []
    let j = 0
    while (j < 3) {
      let tampung = random()
      if (counto == 5 ) {
        temp.push('X')
        j++
      } else if(countx == 5) {
        temp.push('O')
        j++
      } else if (counto !== 5 && tampung === 'O') {
        temp.push(tampung)
        counto++
        j++
      } else if (countx !== 5 && tampung == 'X') {
        temp.push(tampung)
        countx++
        j++
      }
    }    
    result.push(temp)
  }
  return result
}
// console.log(i())

function cekMenang(board) {
  let win = []
  let counto = 0
  let countx = 0 

  board.forEach((arr, i) => {
    arr.forEach((char , j) => {
        if (arr[j+1] == char && arr[j+2] == char ){
          win.push(char)
        } 
        if (board[i+1] !== undefined && board[i+2] !== undefined) {
          if (board[i+1][j] == char && board[i+2][j] == char ) {
            win.push(char)
          }
        }
    })
  })
  if ((board[1][1] == board[0][0] && board[1][1] == board[2][2]) || (board[1][1] == board[0][2] && board[1][1] == board[2][0]) ) {
    win.push(board[1][1])
  }

  win.forEach(x => {
    if(x == 'O' ) {
      counto++
    } else {
      countx++
    }
  })
  // console.log(win)
  if (counto > countx) {
    return `pemenang adalah o`
  } else if (countx > counto) {
    return `pemenang adalah x`
  } else if (counto == countx && counto !== 0) {
    return `Seri`
  } else {
    return `tidak ad yg menang`
  }

}

 
let board = tictac()
console.log(board.join(' \n'))
console.log(cekMenang(board))