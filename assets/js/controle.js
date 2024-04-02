const linha0 = $(".celula[location^='0']")
const linha1 = $(".celula[location^='1']")
const linha2 = $(".celula[location^='2']")
const linha3 = $(".celula[location^='3']")
const linha4 = $(".celula[location^='4']")
const linha5 = $(".celula[location^='5']")
const linha6 = $(".celula[location^='6']")
const linha7 = $(".celula[location^='7']")
const linha8 = $(".celula[location^='8']")
const linha9 = $(".celula[location^='9']")

const coluna0 = $(".celula[location$='0']")
const coluna1 = $(".celula[location$='1']")
const coluna2 = $(".celula[location$='2']")
const coluna3 = $(".celula[location$='3']")
const coluna4 = $(".celula[location$='4']")
const coluna5 = $(".celula[location$='5']")
const coluna6 = $(".celula[location$='6']")
const coluna7 = $(".celula[location$='7']")
const coluna8 = $(".celula[location$='8']")
const coluna9 = $(".celula[location$='9']")

const linhas = [linha0, linha1, linha2, linha3, linha4, linha5, linha6, linha7, linha8, linha9]
const colunas = [coluna0, coluna1, coluna2, coluna3, coluna4, coluna5, coluna6, coluna7, coluna8, coluna9]

const ossosDeNapier = $('#ossos-de-napier')

window.addEventListener("load", function (event) {
    
});

const apagarTudo = () => {
    $('.linha').remove()

}

const reiniciar = () => {
    apagarTudo()
    
    linhas.forEach(linha => {
        let novaLinha = $(`<div class="linha"></div>`)
        linha.each((index, celulas) => novaLinha.append(celulas))
        $('#corpo-ferramenta').append(novaLinha)
    })
}

const multiplicar = (conta) => {

}