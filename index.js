//your code here
function tictactoe (row,col) {
    var output = []
    var countX = 0
    var countO = 0
    for(let i=0; i < row; i++){
        let outputDalam=[]
        for(let j=0; j < col;j++){
            let random = randomXO()
            if(random =='x'){
                countX++
            }else if(random == 'o'){
                countO++
            }
            if(countX >=5){
                outputDalam.push('o')
                countX--
                countO++
            }else if(countO >=5){
                outputDalam.push('x')
                countO--
                countX++
            }else{
                outputDalam.push(random)
            }
        }
        //console.log(countX,countO)
        output.push(outputDalam)
    }
    return output
}
function randomXO(){
    var randomXOString= 'xo'
    var random = ~~(Math.random()*2)
    return randomXOString[random]
}
function checkWin(board){
    var Oscore=0
    var Xscore=0
    console.log(board)
    for(let i=0; i < board.length; i++){
        for(let j=0; j < board[i].length; j++){
            if(board[i+1] && board[i+2]){
                if(board[i][j] == 'x' && board[i+1][j] == 'x' && board[i+2][j]== 'x'){
                    Xscore++
                }
                if(board[i][j] == 'o' && board[i+1][j] == 'o' && board[i+2][j]== 'o'){
                    Oscore++
                }
            }
            if(board[j+1] && board[j+2]){
                if(board[i][j] == 'x' && board[i][j+1] == 'x' && board[i][j+2] == 'x'){
                    Xscore++
                }
                if(board[i][j] == 'o' && board[i][j+1] == 'o' && board[i][j+2] == 'o'){
                    Oscore++
                }
            }
            if(i == 1 && j == 1){
                if(board[i-1][j-1] == 'x' && board[i+1][j+1] == 'x' && board[i][j] == 'x' ){
                    Xscore++
                }
                if(board[i-1][j-1] == 'o' && board[i+1][j+1] == 'o' && board[i][j] == 'o' ){
                    Oscore++
                }
                if(board[i-1][j+1] == 'x' && board[i+1][j-1] == 'x' && board[i][j] == 'x'){
                    Xscore++
                }
                if(board[i-1][j+1] == 'o' && board[i+1][j-1] == 'o' && board[i][j] == 'o'){
                    Oscore++
                }
            }
        }
    }
    console.log(Xscore,Oscore)
    if(Xscore > Oscore)
        return "X Wins"
    else if(Oscore > Xscore)
        return "O Wins"
    else
        return "Seri"
   
}

//console.log(tictactoe(3,3))
console.log(checkWin(tictactoe(3,3)))