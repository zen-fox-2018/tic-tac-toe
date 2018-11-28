//your code here

function TicTacToe(n) {
    let arrOX = [" O ", " X "]
    let counterX = 0
    let counterO = 0
    let arrOutput = []

    for (let i = 0; i < n; i++) {
        let arrRow = []

        for (let j = 0; j < n; j++) {
            if (counterO === 4) {
                arrRow.push(arrOX[1])
            }
            else if (counterX === 4) {
                arrRow.push(arrOX[0])
            } else {
                arrRow.push(arrOX[Math.floor(Math.random() * 2)])

                if (arrRow[j] === arrOX[0]) {
                    counterO++
                } else {
                    counterX++
                }
            }
        }
        arrOutput.push(arrRow)
    }

    return arrOutput
}


function Winner(n) {
    let arr = TicTacToe(n)
    let counterX = 0
    let counterO = 0

    for (let i = 0; i < arr.length; i++) {
        let isHorizontal = true
        let isVertical = true
        let isDiagonalRight = true
        let isDiagonalLeft = true

        for(let j = 0; j < arr[i].length; j++){
            //mendatar
            if(arr[i][0] !== arr[i][j]){
                isHorizontal = false
            }
            
            //menurun
            if(arr[0][i] !== arr[j][i]){
                isVertical = false
            }

            //diagonal kanan
            if(i==j && arr[i][j] == arr[0][0]){
                isDiagonalRight = false
            }

            //diagonal kiri
            if(i==arr.length-j-1 && arr[i][j] == arr[0][arr.length-1]){
                isDiagonalLeft = false
            }

        }

        if(isHorizontal && arr[i][0] == ' X '){
            counterX ++
        }
        else if(isHorizontal && arr[i][0] == ' O '){
            counterO ++
        }

        if(isVertical&& arr[0][i] == ' X '){
            counterX ++
        }
        else if(isVertical && arr[0][i] == ' O '){
            counterO ++
        }

        if(isDiagonalRight && arr[0][0] == ' X '){
            counterX ++
        }
        else if(isDiagonalRight && arr[0][0] == ' O '){
            counterO ++
        }

        if(isDiagonalLeft && arr[0][arr.length-1] == ' X '){
            counterX ++
        }
        else if(isDiagonalLeft && arr[0][arr.length-1] == ' O '){
            counterO ++
        }
    }
    
    // console.log(counterO, counterX)
    if(counterO === 0 && counterX === 0){
        console.log(arr)
        return "no one won"
    }
    else if (counterX > counterO){
        console.log(arr)
        return "X won"
    }
    else if(counterO > counterX){
        console.log(arr)
        return "O won"
    }   
    else{
        console.log(arr)
        return "draw"
    }
}

console.log(Winner(3))