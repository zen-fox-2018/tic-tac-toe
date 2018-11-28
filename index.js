
function tic_tac_toe(num){
    let key = []
    var randomize = ['X','O']
    var countX = 1
    var countO = 1
    
    for(let i = 0; i < num; i ++){
        let holder = []
        for( let j =0; j < num; j ++){
                let cek = randomize[Math.floor(Math.random()*2)]
                
                if(cek === 'X' && countX < 5){
                    countX += 1
                    holder.push(cek)
                }
                else if(cek === 'O' && countO < 5) {
                    countO += 1                  
                    holder.push(cek)
                }else {
                    if(countO == 5){
                        holder.push('X')
                    }else if(countX == 5){
                        holder.push('O')
                    }
                }
        } 
        key.push(holder)
   }
    return key
}
console.log(tic_tac_toe(3))