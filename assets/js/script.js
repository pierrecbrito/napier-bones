let matriz = []

const getCelula = (dalaLocation) => document.querySelector(`.celula[location="${dalaLocation}"]`)

let linha = 0

while(linha <= 8) {
    matriz[linha] = []

    let coluna = 0
    while(coluna < 10) {
        matriz[linha][coluna] = getCelula(`${linha}-${coluna}`)//Busca todas as celulas pelo padrão "linha-coluna"
        ++coluna
    }
    linha++
}

const esconderColuna = (coluna) => {
    let linha = 0

    while(linha <= 8) {
        matriz[linha][coluna].classList.add('subido')
        
        linha++
    }

    let quantidadeSubidos = document.querySelectorAll('.subido').length / 9
    let larguraASerDiminuida = 800 - quantidadeSubidos * 80
    setTimeout(function() { document.getElementById('ossos-de-napier').style.width = `${larguraASerDiminuida}px`}, 700)
   
    console.log(quantidadeSubidos, document.getElementById('ossos-de-napier').style.width)
}

const esconderColunasNaoSelecionadas = () => {
    let linha = 0

    let colunaDaVez = 1
    while(colunaDaVez < 10) {
        if(!matriz[linha][colunaDaVez].classList.contains('selecionado')) {
            esconderColuna(colunaDaVez)
        }
        colunaDaVez++;
    }
  
}

const mostrarColuna = (coluna) => {
    let linha = 0

    while(linha <= 8) {
    
        matriz[linha][coluna].classList.remove('subido')
        matriz[linha][coluna].classList.add('descido')
        
        linha++
    }
}

const multiplicar = (multiplicacao) => {
    let operando = multiplicacao.split("x")
    let linhasDeSoma = []

    let algarismos1 = operando[0].split("")
    let algarismos2 = operando[1].split("")
    console.log('algarismos', algarismos1)

    for (let index = 0; index < algarismos1.length; index++) {
       
        let algarismoADestacar = parseInt(algarismos1[index])
        console.log(algarismoADestacar)
        matriz[0][algarismoADestacar].classList.add('selecionado')
        
    }

    for (let index = 0; index < algarismos2.length; index++) {
        let algarismoADestacar = parseInt(algarismos2[index])
        matriz[algarismoADestacar == 0 ? 0 : algarismoADestacar - 1][0].classList.add('selecionado')
    }

    esconderColunasNaoSelecionadas()

    //Lógica da programação
    //Última
    let delay = 1;
    let indexSoma = 0


    for (let index = algarismos1.length; index >= 0; index--) {
        if(index == algarismos1.length ) {//É o primeiro elemento da resposta de trás para frente
            setTimeout(function() { 
                matriz[algarismos2[algarismos2.length - 1] - 1][algarismos1[index-1]].classList.add('destacar-algarismo-inferior');
                console.log(parseInt(matriz[algarismos2[algarismos2.length - 1] - 1][algarismos1[index-1]].getElementsByClassName('algarismo-inferior')[0].textContent))
            }, 1000)
        } else if(index == 0) {//É o último elemento da resposta de trás para frente
            setTimeout(function() { 
                matriz[algarismos2[algarismos2.length - 1] - 1][algarismos1[index]].classList.add('destacar-algarismo-superior');
                console.log(parseInt(matriz[algarismos2[algarismos2.length - 1] - 1][algarismos1[index]].getElementsByClassName('algarismo-superior')[0].textContent))
            }, 2000*delay)
        } else {
            setTimeout(function() {    matriz[algarismos2[algarismos2.length - 1] - 1][algarismos1[index]].classList.add('destacar-algarismo-superior'); }, 2000 * delay)
            setTimeout(function() { console.log(parseInt(matriz[algarismos2[algarismos2.length - 1] - 1][algarismos1[index]].getElementsByClassName('algarismo-superior')[0].textContent) + parseInt(matriz[algarismos2[algarismos2.length - 1] - 1][algarismos1[index-1]].getElementsByClassName('algarismo-inferior')[0].textContent));   matriz[algarismos2[algarismos2.length - 1] - 1][algarismos1[index-1]].classList.add('destacar-algarismo-inferior');}, 2000 * delay)        
        }
        delay++;
    }
}


console.log('matriz', matriz)