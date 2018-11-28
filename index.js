function tic_tac_toe() {
    let hasil = []
    let counterX = 0
    let counterO = 0
    for (let i = 0; i < 3; i++) {
        let hasilDalam = []
        for (let j = 0; j < 3; j++) {
            let angka = Math.floor(Math.random() * (2 - 1 + 1) + 1)
            if (angka === 2) {
                counterX++
                if (counterX <= 5) {
                    hasilDalam.push(' O ')
                }
                else {
                    hasilDalam.push(' X ')
                }
            }
            else {
                counterO++
                if (counterO <= 5) {
                    hasilDalam.push(' X ')
                }
                else {
                    hasilDalam.push(' O ')
                }
            }
        }
        hasil.push(hasilDalam)
    }
    
    return hasil
}

console.log(tic_tac_toe())
