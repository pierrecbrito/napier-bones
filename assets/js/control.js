document.querySelector('#btn-calcular').addEventListener('click', function(e) {
    let operador1 = document.querySelector('#op1-alg-1').value + document.querySelector('#op1-alg-2').value + document.querySelector('#op1-alg-3').value
    let operador2 = document.querySelector('#op2-alg-1').value
    multiplicar(operador1 + "x" + operador2)
    console.log(operador1)
})

const porAsColunasEmSequencia = (algarismos) => {
    let colunasDeInteresse = []//Colunas na sequencia digitada do operando

    for (let index = 0; index < 9; index++) {//Linhas
        if(index == 0) {
            let linha = document.getElementById("cabecalho-ferramenta").getElementsByClassName('linha')

            for (let index2 = 0; index2 < algarismos.length; index2++) {//Colunas
                //let celula = document.createElement("div")
                //celula.classList.add('celula')
                linha[0].append(matriz[index][algarismos[index2]])
                console.log('coluna',matriz[index][algarismos[index2]])
                //.append(celula)
            } 
        } else {
            let linha = document.querySelector(`#corpo-ferramenta .linha:nth-child(${index})`)
            
            for (let index2 = 0; index2 < algarismos.length; index2++) {//Colunas
                linha.append(matriz[index][algarismos[index2]])
            } 
        }
       
        
        
    }
   
}

/*
A ideia é pôr inicialemnte as colunas em ordem para depois pôr as linhas.
*/

const porAsLinhasEmSequencia = (algarismos) => {
    let linhasDeInteresse = []//Colunas na sequencia digitada do operando

    let linhasQueFicaram = document.querySelectorAll(`#corpo-ferramenta .linha`)

    for (let index = 0; index < linhasQueFicaram.length; index++) {//Remove linhas para depois aparecerem ordenadas
         linhasQueFicaram[index].remove()
    }

    for (let index = 0; index < algarismos.length; index++) {//Linhas
        linhasQueFicaram.forEach(linha => {
            if(linha.querySelector(`.celula:nth-child(1)`).textContent == algarismos[index]) {
                document.querySelector(`#corpo-ferramenta`).append(linha)
            }
        })
    }
   
}