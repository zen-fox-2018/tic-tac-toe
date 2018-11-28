function ticTacToe() {
    const size = 3
    const xo = 'XO'

    let countX = 0
    let countO = 0
    let result = []

    for (let i = 0; i < size; i++) {
        let temp = []
        for (let j = 0; j < size; j++) {
            temp[j] = xo[Math.floor(Math.random() * xo.length)]
            if (countX === 5) {
                temp[j] = 'O'
            }
            if (countO === 5) {
                temp[j] = 'X'
            }
            if (temp[j] === 'X') {
                countX++
            } else {
                countO++
            }
        }
        result.push(temp)
    }
    return result
}

console.log(ticTacToe());
