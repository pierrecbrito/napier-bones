let matriz = []

const celula = (dalaLocation) => document.querySelector(`.celula[location="${dalaLocation}"]`)



let linha = 0

while(linha <= 8) {
    matriz[linha] = []

    let coluna = 0
    while(coluna < 10) {
        matriz[linha][coluna] = celula(`${linha}-${coluna}`)//Busca todas as celulas pelo padrão "linha-coluna"
        ++coluna
    }
    linha++
}

console.log('matriz', matriz)