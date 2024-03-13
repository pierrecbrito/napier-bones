let matriz = []

const celula = (dalaLocation) => document.querySelector(`.celula[location="${dalaLocation}"]`)

let cabecalho = [
    celula("0-0"), 
    celula("0-1"), 
    celula("0-2"), 
    celula("0-3"), 
    celula("0-4"), 
    celula("0-5"), 
    celula("0-6"), 
    celula("0-7"), 
    celula("0-8")
]

let linha2 = [
    celula("1-0"), 
    celula("1-1"), 
    celula("1-2"), 
    celula("1-3"), 
    celula("1-4"), 
    celula("1-5"), 
    celula("1-6"), 
    celula("1-7"), 
    celula("1-8"),
    celula("1-9")
]

let linha3 = [
    celula("2-0"), 
    celula("2-1"), 
    celula("2-2"), 
    celula("2-3"), 
    celula("2-4"), 
    celula("2-5"), 
    celula("2-6"), 
    celula("2-7"), 
    celula("2-8"),
    celula("2-9")
]




console.log("Cabeçalho", cabecalho)
console.log("Linha 2", linha2)
console.log("Linha 3", linha3)