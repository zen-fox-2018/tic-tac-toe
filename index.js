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
  return console.log(array);
}

tictactoe()
