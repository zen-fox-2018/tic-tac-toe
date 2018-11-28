//your code here
function ticTacToe (){
  var xo = ['X', 'O'];
  var result = [];
  var indexX = 0;
  var indexO = 0;
  var isi ='';
  for (var i = 0; i < 3; i++) {
    var isiResult = [];
    for (var j = 0; j < 3; j++) {
      if (indexX <5 && indexO <5 ) {
        isi = xo[Math.round(Math.random())];
        if (isi == 'X'){
          indexX++;
        }
        else {
          indexO++;
        }
      }
      else if (indexX === 4) {
        isi = 'O';
        indexO++;
      }
      else {
        isi = 'X';
        indexX;
      }
      isiResult.push(isi);
    }
    result.push(isiResult);
  }
  // console.log('X',indexX,'O',indexO);
  return result;
}

console.log(ticTacToe());
