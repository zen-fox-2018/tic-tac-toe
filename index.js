//your code here
function ticTacToe(x,y){
  let output = [];
  let counterx = 0;
  let countero = 0;
  let xo = 'XO'
  // console.log(Math.round(x*x/2))
  for (let i = 0 ; i<x ; i++){
    let arrDalam = [];

    for (let j = 0 ; j < y ; j++){
      // console.log(Math.random() * 2);
      arrDalam[j] = xo[Math.floor(Math.random() * 2)]
      if (arrDalam[j] === 'X'){
        if (counterx>Math.round(x*x/2)) {
          arrDalam[j] = 'O'
          countero++
        } else {
          counterx++
        }

      } else if (arrDalam[j] === 'O'){
        if (countero>=Math.round(x*x/2)) {
          arrDalam[j] = 'X'
          counterx++
        } else {
          countero++
        }
      }
    }

    output.push(arrDalam)

  }

  return output

}

function winner (arr) {
  let poinx = 0
  let poino = 0

  // CARA hanya untuk 3x3 (kurang dinamis dan masih manual)
  // for (let i = 0 ; i < arr.length ; i ++) {
  //   if (arr[i][0] === 'X' && arr[i][1] === 'X' && arr[i][2] === 'X') {
  //     poinx++
  //   } else if (arr[i][0] === 'O' && arr[i][1] === 'O' && arr[i][2] === 'O') {
  //     poino++
  //   }
  //
  //   if (arr[0][i] === 'X' && arr[1][i] === 'X' && arr[2][i] === 'X') {
  //     poinx++
  //   } else if (arr[0][i] === 'X' && arr[1][i] === 'X' && arr[2][i] === 'X') {
  //     poino++
  //   }
  //
  //   if (i === 0 && arr[i][i] === 'X' && arr[i+1][i+1] === 'X' && arr[i+2][i+2] === 'X') {
  //     poinx++
  //   } if (i === 0 && arr[i][i] === 'O' && arr[i+1][i+1] === 'O' && arr[i+2][i+2] === 'O') {
  //     poino++
  //   }
  //
  //   if (i === 1 && arr[i-1][i+1] === 'X' && arr[i][i] === 'X' && arr[i+1][i-1] === 'X') {
  //     poinx++
  //   } else if (i === 1 && arr[i-1][i+1] === 'O' && arr[i][i] === 'O' && arr[i+1][i-1] === 'O') {
  //     poino++
  //   }
  // }

  // CARA DINAMIS
  let k = arr.length
  var diagonalKiriTemp = arr[0][0] // Deklarasi penyimpanan diagonal dr kiri atas ke kanan bawah
  var diagonalKananTemp = arr[0][k-1] // Deklarasi penyimpanan diagonan kanan atas ke kiri bawah

  for (let i = 0 ; i < arr.length ; i++) {
    let horizonTemp = arr[i][0]
    let verticalTemp = arr[0][i]
    k--

    for (let j = 1 ; j < arr[i].length ; j++) {
      if (horizonTemp !== arr[i][j]) {
        horizonTemp = false
        break;
      }
    }

    for (let j = 1 ; j < arr[i].length ; j++) {
      if (verticalTemp !== arr[j][i]) {
        verticalTemp = false
        break;
      }
    }

    if (diagonalKiriTemp !== arr[i][i]) {
      diagonalKiriTemp = false
    }

    if (diagonalKananTemp !== arr[i][k]){
      diagonalKananTemp = false
    }

    if (horizonTemp) {
      if (horizonTemp === 'X') {
        poinx++
      } else {
        poino++
      }
    }

    if(verticalTemp) {
      if (verticalTemp === 'X') {
        poinx++
      } else {
        poino++
      }
    }
  }

  // CEK APAKAH DIAGONAL SAMA SEMUA
  if (diagonalKananTemp) {
    if (diagonalKananTemp === 'X') {
      poinx++
    } else {
      poino++
    }
  }

  if (diagonalKiriTemp) {
    if (diagonalKiriTemp === 'X') {
      poinx++
    } else {
      poino++
    }
  }

  console.log(arr)
  if (poinx === poino) {
    return `Hasil Seri, dengan score X:${poinx} O:${poino}`
  } else if (poinx > poino){
    return `X MENANG! dengan score X:${poinx} O:${poino}`
  } else if (poino > poinx){
    return `O MENANG! dengan score X:${poinx} O:${poino}`
  }
}

let game1 = ticTacToe(4,4);
console.log(winner(game1))
