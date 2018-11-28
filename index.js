function tictactoe() {
  let xo = "XO"
  let array = []
  let countX = 0
  let countO = 0

  for (let i = 0; i < 3; i++) {
    let innerArray = []
    for (let j = 0; j < 3; j++) {
      let xoPush = xo[Math.floor(Math.random() * xo.length)]
      if (countX === 5) {
        innerArray.push("O")
      }
      else if (countO === 5) {
        innerArray.push("X")
      }
      else {
        if (xoPush === "X") {
          countX++
        }
        else {
          countO++
        }
        innerArray.push(xoPush)
      }
    }
    array.push(innerArray)
  }
  return array;
}

var array = tictactoe()

function winnerCheck(array) {
  let winner = ""
  //horizontal
  for (let i = 0; i < array.length; i++) {
    let winnerTempHorizontal = array[i][0]
    for (let j = 1; j < array[i].length; j++) {
      if (array[i][j] === winnerTempHorizontal) {
        winner = winnerTempHorizontal
      }
      else {
        winner = ""
        break
      }
    }
    if (winner != "") {
      return winner
    }
  }

  //vertical
  for (let i = 0; i < array.length; i++) {
    let winnerTempVertical = array[0][i]
    for (let j = 0; j < array[i].length; j++) {
      if (array[j][i] === winnerTempVertical) {
        winner = winnerTempVertical
      }
      else {
        winner = ""
        break
      }
    }
    if (winner != "") {
      return winner
    }
  }

  //Diagonal gradien negatif
  let winnerTempDiagonal = array[1][1]
  if (array[0][0] === winnerTempDiagonal && array[2][2] === winnerTempDiagonal) {
    return winnerTempDiagonal
  }
  else if (array[0][2] === winnerTempDiagonal && array[2][0] === winnerTempDiagonal) {
    return winnerTempDiagonal
  }
  return "tidak ada"
}

console.log(array);
console.log(`yang menang adalah ${winnerCheck(array)}`);
