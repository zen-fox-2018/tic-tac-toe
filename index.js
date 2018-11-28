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
                outputDalam.push(' o ')
                countX--
                countO++
            }else if(countO >=5){
                outputDalam.push(' x ')
                countO--
                countX++
            }else{
                outputDalam.push(' '+random+' ')
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
            if(i == 0){
                if(board[i][j] == board[i+1][j] && board[i][j] == board[i+2][j]){
                    if(board[i][j] == ' x '){
                        Xscore++
                    } else{
                        Oscore++
                    }
                }
            }
            if(j == 0){
                if(board[i][j] == board[i][j+1] && board[i][j] == board[i][j+2]){
                    if(board[i][j] == ' x '){
                        Xscore++
                    } else{
                        Oscore++
                    }
                }
            }
            if(i == 1 && j == 1){
                if((board[i][j] == board[i+1][j+1] && board[i][j] == board[i-1][j-1]) || (board[i][j] == board[i+1][j-1] && board[i][j] == board[i-1][j+1]) ){
                    if(board[i][j] == ' x '){
                        Xscore++
                    } else {
                        Oscore++
                    }
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