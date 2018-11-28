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

console.log(tictactoe(3,3))