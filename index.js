function nestedArr(input) {
  var result = [];
  var xo = 'XO';
  var counterX = 0;
  var counterO = 0;

  for (var i = 0; i < input; i++) {
    var arr = [];
    for (var j = 0; j < input; j++) {
      var randomIndex = (Math.floor(Math.random() * xo.length));
      // console.log(randomIndex);
      if ((randomIndex === 0 && counterX < 5) || counterO >= 5) {
        counterX++;
        arr.push(xo[0]);
      } else if ((randomIndex === 1 && counterO < 5) || counterX >= 5) {
        counterO++;
        arr.push(xo[1]);
      }
    }
    result.push(arr);
  }
  return result;
}

console.log(nestedArr(3));
