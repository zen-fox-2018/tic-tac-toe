//your code here
function tictac(row, col) {
    let temp = []
    let alfabet = 'XO'
    let counterO = 0
    let counterX = 0
    for(let i = 0; i < row; i++) {
        let inner = []
        for(let i = 0; i < col; i++) {
            let random = Math.floor(Math.random() * alfabet.length)
            if (alfabet[random] === 'X' && counterX === 5) {
                inner.push('O')
            } else if (alfabet[random] === 'O' && counterO === 5) {
                inner.push('X')
            } else if(alfabet[random] === 'X' && counterX < 5) {
                inner.push('X')
                counterX++
            } else if (alfabet[random] === 'O' && counterO < 5) {
                inner.push('O')
                counterO++
            }
        }
        temp.push(inner)
    }
    return temp
}

console.log(tictac(3, 3))
console.log(tictac(3, 3))
console.log(tictac(3, 3))
console.log(tictac(3, 3))
console.log(tictac(3, 3))
console.log(tictac(3, 3))