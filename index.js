//your code here
function ticTacToe () {
    var xAndO = ['x', 'o'];
    var result = [];
    var counterX = 0;
    var counterO = 0;
    for (let i = 0; i < 3; i++) {
        var temp = [];
        for (let j = 0; j < 3; j++) {
            let index = Math.round (Math.random() * (1) + 0);
            if (xAndO[index] == 'x') {
                counterX++;
                if (counterX <= 5) {
                    temp.push(xAndO[index]);
                }
            } else {
                counterO++
                if (counterO <= 5) {
                    temp.push(xAndO[index]);
                }
            }
        }
        result.push(temp)
    }
    return result
}
console.log(ticTacToe())
