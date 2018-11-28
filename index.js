function generate() {

    const word = `XO`
    let board = []
    let boardTemp = []
    let xCount = 0
    let oCount = 0

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
    return board
}
console.log(generate());




