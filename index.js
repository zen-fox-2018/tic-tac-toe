//your code here
function tic_tac_toe(row,col) {
    let output = []
    let X = 0
    let O = 0
    let XO = 'xo'
    for (let i = 0; i < row; i++) {
        let box = []
        for (let j = 0; j < col; j++) {
            let index = Math.floor(Math.random()*XO.length)
            if((XO[index] == 'x' && X<5) || O>=5 ) {
                box.push(XO[0])
                X+=1
            } else if ((XO[index] == 'o' && O<5) || X>=5) {
                box.push(XO[1])
                O+=1
            } 
            
        }
        output.push(box)
    }

    return output
}

console.log(tic_tac_toe(3,3));
