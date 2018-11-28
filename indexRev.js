//your code here
function ticTacToe () {
  const size = 3;
  const value = 'XO';
  let myBoard = [];
  let counterX = 0;
  let counterO = 0;
  for (let i = 0; i < size; i++) {
    let newColumn = [];
    for (let j = 0; j < size; j++) {
      let valColumn = value[Math.floor(Math.random() * value.length)];
      if (counterX === 5) {
        valColumn = 'O';
      }
      if (counterO === 5) {
        valColumn = 'X';
      }
      newColumn.push(valColumn);
      if (valColumn === 'X') {
        counterX++;
      } else {
        counterO++;
      }
    }
    myBoard.push(newColumn);
  }
  console.log(myBoard);
  let result = getScore(myBoard);
  return `X menang : ${result.X} kali | O menang ${result.O} kali`;
}

function getScore (maps) {
  let objScore = new Object();
  objScore.X = 0;
  objScore.O = 0;

  for (let i = 0; i < maps.length; i++) {
    if(checkWin(maps[i])) {
      objScore[maps[i][0]]++;
    }
    let vertical = [];
    for (let j = 0; j < maps.length; j++) {
      vertical.push(maps[j][i]);
      let diagonal = []
      for (var k = 0; k < maps.length; k++) {
        if (i === 0 && j === 0 ){
          diagonal.push(maps[i+k][j+k]);
        } else if (i === 0 && j === maps.length - 1) {
          diagonal.push(maps[i+k][j-k]);
        }
      }

      if(diagonal.length){
        if(checkWin(diagonal)){
          objScore[diagonal[0]]++;
        }
      }
    }
    if(checkWin(vertical)){
      objScore[vertical[0]]++;
    }

  }
  return objScore;
}

function checkWin (arr) {
  let isWin = arr.every(e => {
    return e === arr[0];
  });
  return isWin;
}
// console.log(getScore(maps));
console.log(ticTacToe());
