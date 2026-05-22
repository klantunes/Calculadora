console.log("JS conectado");

const valor = document.querySelector(".valor")

const botoes = document.querySelectorAll("button")

const historico = document.querySelector(".historico")

let operador = null
let primeiroValor = null

botoes.forEach(function(botao){

    botao.addEventListener("click", function(){

        if(botao.innerHTML === "⌫"){
            if(valor.innerHTML.length > 1){
                valor.innerHTML = valor.innerHTML.slice(0, -1)
            } else {
                valor.innerHTML = "0"
            }
        } else if(botao.innerHTML === "C"){
            valor.innerHTML = "0"
            historico.innerHTML = ""
        } else if(botao.innerHTML === "+"
            ||
           botao.innerHTML === "-"
            ||
            botao.innerHTML === "x"
            ||
            botao.innerHTML === "÷"
        ){
            if (operador && primeiroValor != null) return
            // store operator and first value
            operador = botao.innerHTML
            primeiroValor = parseFloat(valor.innerHTML)
            historico.innerHTML = `${primeiroValor} ${operador}`
            valor.innerHTML = "0"
        } else if(botao.innerHTML === "="){
            // compute
            const segundoValor = parseFloat(valor.innerHTML)
            let resultado = segundoValor
            if(operador && primeiroValor != null){
                switch(operador){
                    case "+": resultado = primeiroValor + segundoValor; break
                    case "-": resultado = primeiroValor - segundoValor; break
                    case "x": resultado = primeiroValor * segundoValor; break
                    case "÷": resultado = primeiroValor / segundoValor; break
                }
            }
            historico.innerHTML = `${primeiroValor} ${operador} ${segundoValor} = ${resultado}`
            valor.innerHTML = String(resultado)
            // reset
            operador = null
            primeiroValor = null
        } else {
            if(valor.innerHTML === "0"){
                valor.innerHTML = botao.innerHTML
            } else {
                valor.innerHTML += botao.innerHTML
            }
        }
    })
})