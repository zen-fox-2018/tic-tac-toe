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
function TicTacToe() {
    let board = generateTicTacToe()
    let menang = []
    console.log(board.join("\n"))
    board.forEach((arr,idx) => {
        arr.forEach((xo ,index) => {
            if (arr[index+1] === xo && arr[index +2] === xo) {
                menang.push(xo)
            } 
            if (idx+2 < 3) {
                if (board[idx+1][index] === xo && board[idx+2][index] === xo) {
                    menang.push(xo)
                }
            }    
        })
    })
    if (board[0][0] === board[1][1] && board[2][2] === board[1][1])  {
        menang.push(board[1][1])
    } else if (board[0][2] === board[1][1] && board[2][0] === board[1][1]) {
        menang.push(board[1][1])
    }
    console.log(menang)
    if ( menang.length === 0) {
        return `tidak ada yang menang`
    } else {
        return `============ ${menang[0]} menang`
    }
}

console.log(TicTacToe())


