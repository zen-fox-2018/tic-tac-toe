//your code here
function generateTicTacToe() {
    const xo = ['X','O']
    let x = 0
    let o = 0
    let board = []
    for (let i = 0 ; i < 3 ; i++) {
        let temp = []
        for (let j = 0 ; j < 3 ; j++) {
            let Random = Math.floor(Math.random()*xo.length)
            if (xo[Random] === "X" && x === 5 ){
                temp.push("O")
            } else if (xo[Random] === "O" && o === 5) {
                temp.push("X")  
            } else if (xo[Random] === "X" && x < 6) {
                temp.push(xo[Random])
                x++
            } else if (xo[Random] === "O" && x < 6) {
                temp.push(xo[Random])
                o++
            }
        }
        board.push(temp)
    }
    return board
}

console.log(generateTicTacToe())
