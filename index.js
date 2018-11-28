function generate() {

    const word = `XO`
    let board = []
    let boardTemp = []
    let xCount = 0
    let oCount = 0
    let winner = []

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (xCount === 5) {
                boardTemp.push(`O`)
            } else if (oCount === 5) {
                boardTemp.push(`X`)
            } else if (xCount !== 5 || oCount !== 5) {
                boardTemp.push(generateXO())
            }

        }
        board.push(boardTemp)
        boardTemp = []

    }

    function generateXO() {
        let rand = word[Math.floor(
            Math.random() * word.length
        )]

        if (rand === `X`) {
            xCount++
        } else if (rand === `O`) {
            oCount++
        }
        return rand
    }

    console.log(board.join(`\n`));

    //IF NYA
    if (checkDiagonal() || checkDiagonal2() || checkVertical() || checkHorizontal()) {
        let result = checkVertical()
        return `${winner[0]} yang menang!`

    } else {
        return `Tidak ada yang menang!`
    }

    //CHECK VERTIKAL HORIZONTAL DIAGONAL
    function checkHorizontal(params) {
        let check = false
        for (let i = 0; i < board.length; i++) {

            if (board[i][0] == board[i][1] &&
                board[i][1] == board[i][2]) {
                winner.push(board[i][0])
                return { winner: board[i][0] }
            }

        }
        return check
    }
    function checkVertical(params) {
        let check = false
        for (let i = 0; i < board.length; i++) {

            if (board[0][i] == board[1][i] &&
                board[1][i] == board[2][i]) {
                winner.push(board[0][i])
                return true
            }
        }
        return check
    }

    function checkDiagonal(params) {
        if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
            winner.push(board[0][0])
            return true
        }
        return false
    }

    function checkDiagonal2(params) {
        if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
            winner.push(board[0][2])
            return true
        }
        return false
    }
}
console.log(generate());




