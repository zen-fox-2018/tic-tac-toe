//your code here
function ticTacToe(x,y){
  let output = [];
  let counterx = 0;
  let countero = 0;
  let xo = 'XO'

  for (let i = 0 ; i<x ; i++){
    let arrDalam = [];

    for (let j = 0 ; j < y ; j++){
      // console.log(Math.random() * 2);
      arrDalam[j] = xo[Math.floor(Math.random() * 2)]
      if (arrDalam[j] === 'X'){
        if (counterx>=5) {
          arrDalam[j] = 'O'
          countero++
        } else
        counterx++
      } else if (arrDalam[j] === 'O'){
        if (countero>=5) {
          arrDalam[j] = 'X'
          counterx++
        } else
        countero++
      }
    }

    output.push(arrDalam)

  }

  return output

}


console.log(ticTacToe(3,3));
