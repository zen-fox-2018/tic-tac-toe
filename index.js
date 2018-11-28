//your code here
function tictactoe (){
    let row = []
    let xo = ['X','O']
    let countX = 0
    let countO = 0
    for(let i = 0; i < 3; i++){
        let col = []
        for(let j = 0; j < 3; j++){
            if(countX === 4){
                col.push('O')
            }else if(countO === 4){
                col.push('X')
            }else{
                let k = Math.floor(Math.random()*2)
                if(xo[k] === 'X'){
                    countX++
                    col.push('X')
                }else{
                    countO++
                    col.push('O')
                }
            }
        }
        row.push(col)
    }
    return row
}

console.log(tictactoe())