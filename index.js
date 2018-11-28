//your code here
function tictactoe (){
    let row = []
    let xo = ['X','O']
    let countX = 5
    for(let i = 0; i<3; i++){
        let col = []
        for(let j = 0; j<3; j++){
            let k = Math.floor(Math.random()*2)
            if(countX > 0){
                col.push(xo[k])
                if(xo[k] === 'X'){
                    countX--
                }
            }else{
                col.push('O')
            } 
        }
        row.push(col)
    }
    return row
}

console.log(tictactoe())