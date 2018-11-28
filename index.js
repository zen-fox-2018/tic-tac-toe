
function tic_tac_toe(number) {

    let exesOhs = "XO";
    let board = [];
    let counterX = 0;
    let counterO = 0;
    
    for(let i = 0; i < number; i++) {
        board.push([]);
        for(let j = 0; j < number; j++) {
            let randomExesOhs = exesOhs[Math.floor(Math.random()*exesOhs.length)];
            if (randomExesOhs === "X" && counterX < 5) {
                board[i].push(randomExesOhs)
                counterX++
            } else if (randomExesOhs === "O" && counterO < 5) {
                board[i].push(randomExesOhs)
                counterO++
            } else {
                if (counterX === 5) {
                    board[i].push("O")
                } else if (counterO === 5) {
                    board[i].push("X")
                }
            }
        }
    }
    return board
}
console.log(tic_tac_toe(3))


// let coor = [5, 4];
// randomCoor++
// let randomCoor = coor[Math.floor(Math.random()*coor.length)];
// let randomCoorO = coorO[Math.floor(Math.random()*coorO.length)];