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

const esconderColuna = (coluna, quantidaDeColunas) => {
    let linha = 0

    while(linha <= 8) {
        matriz[linha][coluna].classList.add('subido')

        setTimeout(function() {
            matriz[linha][coluna].remove()
        }, 1500)

        linha++
    }

   recalcularLargurarDaFerramenta(quantidaDeColunas)
   
}

const recalcularLargurarDaFerramenta = (quantidadeDeColunas) => {
    //let quantidadeSubidos = document.querySelectorAll('.subido').length / 9
    let larguraASerDiminuida = quantidadeDeColunas * 80
    setTimeout(function() { document.getElementById('ossos-de-napier').style.width = `${larguraASerDiminuida}px`}, 400)
}

const esconderLinha = (linha) => {
    let coluna = 0
    while(coluna <= 9) {
        matriz[linha][coluna].classList.add('arrastado')
        setTimeout(function() {
            matriz[linha][coluna].remove()
        }, 1500)
        coluna++
    }
   
}


const esconderColunasNaoSelecionadas = (quantidadeDeColunas) => {
    let linha = 0

    let colunaDaVez = 1
    while(colunaDaVez < 10) {
        if(!matriz[linha][colunaDaVez].classList.contains('selecionado')) {
            esconderColuna(colunaDaVez, quantidadeDeColunas)
        }
        colunaDaVez++;
    }
  
}

const esconderLinhasNaoSelecionadas = (algarismos) => {
    let linhaDaVez = 1

    while(linhaDaVez < 9) {
        if(!algarismos.includes(`${linhaDaVez+1}`)) {
            esconderLinha(linhaDaVez)
        }
        linhaDaVez++;
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

    //Colocando linahs e coluna em sequência
    porAsColunasEmSequencia(algarismos1)
    porAsLinhasEmSequencia(algarismos2)
    recalcularLargurarDaFerramenta(algarismos1.length + 1)

    //Destaca colunas no cabeçalho
    for (let index = 0; index < algarismos1.length; index++) {
       
        let algarismoADestacar = parseInt(algarismos1[index])
        console.log(algarismoADestacar)
        matriz[0][algarismoADestacar].classList.add('selecionado')
        
    }

    //Destaca linhas na lateral
    for (let index = 0; index < algarismos2.length; index++) {
        let algarismoADestacar = parseInt(algarismos2[index])
        matriz[algarismoADestacar == 0 ? 0 : algarismoADestacar - 1][0].classList.add('selecionado')
    }

    //Animações de esconder
    esconderColunasNaoSelecionadas(algarismos1.length + 1)
    setTimeout(function() {
        esconderLinhasNaoSelecionadas(algarismos2)
    }, 2000)
   

    //Lógica da programação
    //Última
    let delay = 1
    let indexSoma = 1


        //É o primeiro elemento da resposta de trás para frente
        setTimeout(function() { 
            matriz[algarismos2[algarismos2.length  - 1] - 1][algarismos1[algarismos1.length-1]].classList.add('destacar-algarismo-inferior');
            //console.log(parseInt(matriz[algarismos2[algarismos2.length - 1] - 1][algarismos1[index-1]].getElementsByClassName('algarismo-inferior')[0].textContent))
        }, 3000)

        let diagonaisASeremDestacadas = algarismos1.length + algarismos2.length;
        let diagonaisDaDireita = algarismos1.length;
        let diagonaisDaEsquerda = algarismos2.length - 1;
        
        let quantidadeDeCelularesMenores = 0;
        
        for (let index2 = diagonaisDaDireita - 1; index2 > 0; index2--) { //Destacando diagonais da direita
            setTimeout(function() {   matriz[algarismos2[algarismos2.length - 1] - 1][algarismos1[index2-1]].classList.add('destacar-algarismo-inferior');}, 3000 * ++delay) 
            setTimeout(function() {    matriz[algarismos2[algarismos2.length - 1] - 1][algarismos1[index2]].classList.add('destacar-algarismo-superior'); }, 3000 * delay)

            let linhaIndex = 2;
            let colunaIndex = 0;
            for (let index3 = 0; index3 < (quantidadeDeCelularesMenores * 2 + 1); index3++) {//Destaca o restante da diagonal
                if(index3 % 2 == 0 ) {

                        setTimeout(function() {   matriz[algarismos2[algarismos2.length - linhaIndex++] - 1][algarismos1[index2+colunaIndex++]].classList.add('destacar-algarismo-inferior'); }, 3000 * delay)
                    
                } else {
                    
                        setTimeout(function() {   matriz[algarismos2[algarismos2.length - linhaIndex + 1] - 1][algarismos1[index2+colunaIndex]].classList.add('destacar-algarismo-superior'); }, 3000 * delay)
                    
                }
                    
            }
            ++quantidadeDeCelularesMenores;
        }

        quantidadeDeCelularesMenores = algarismos2.length
        //setTimeout(function() {   matriz[algarismos2[algarismos2.length - 1] - 1][algarismos1[0]].classList.add('destacar-algarismo-superior');}, 3000 * ++delay) 
        ++delay;

        for (let index2 = diagonaisDaEsquerda; index2 > 0; index2--) { //Destacando diagonais da esquerda
            //setTimeout(function() {   matriz[algarismos2[algarismos2.length - 1] - 2][algarismos1[0]].classList.add('destacar-algarismo-superior');}, 3000 * delay) 
            let linhaIndex = 1;
            let colunaIndex = 0;
            for (let index3 = 0; index3 < ((quantidadeDeCelularesMenores * 2 + 1)); index3++) {//Destaca o restante da diagonal
                if(index3 % 2 == 0 ) {
                   
                        setTimeout(function() { console.log("Olha aqui", matriz[algarismos2[index2 - linhaIndex] - 1][algarismos1[colunaIndex] ]);   matriz[algarismos2[index2 - linhaIndex] - 1][algarismos1[colunaIndex] ].classList.add('destacar-algarismo-inferior'); }, 3000 * delay)
                    
                   
                } else {
                    
                        setTimeout(function() {   matriz[algarismos2[index2 - linhaIndex++ + 1] - 1][algarismos1[colunaIndex++]].classList.add('destacar-algarismo-superior'); }, 3000 * delay)
                    
                    
                }
            }

            ++delay;
            --quantidadeDeCelularesMenores;
        }
        
        //É o último elemento da resposta de trás para frente
        setTimeout(function() { 
            matriz[algarismos2[0] - 1][algarismos1[0]].classList.add('destacar-algarismo-superior');

        }, 3000*delay)

    
}

const verificarAlgarismosIguais = (algarismos) => {
    let temItensDuplicados = false

    for (let index = 0; index < algarismos.length; index++) {
        for (let index2 = 0; index2 < algarismos.length; index2++) {
            
        } 
    }

}


/**
 *  A questão da divisão em da tabeça em lado direito e esquerdo é ótimo para uma forma quadrada, mas e para um retângulo? Fica difícil
 * 
 */