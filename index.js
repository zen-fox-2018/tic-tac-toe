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
  console.log(counterX, counterO);
  return myBoard;
}
console.log(ticTacToe());
