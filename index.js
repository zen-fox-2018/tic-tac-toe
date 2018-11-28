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

console.log(tictac())