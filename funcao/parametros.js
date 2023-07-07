function funcao(a, b=0, c){
    let total = 0;
    for (argumento of arguments){
        total += argumento
    }
    console.log(total, a, b, c)
}
funcao(1,2,3,4,5)

function pessoa({ nome,sobrenome,idade }){
    console.log(nome,sobrenome,idade)
}
pessoa({nome:'Luiz', sobrenome: 'Zomer', idade:19})

// function conta(operador, acumulador, ...numeros){
//     for (let numero of numeros){
//        if(operador === '+') acumulador += numero
//        if(operador === '-') acumulador -= numero
//        if(operador === '/') acumulador /= numero
//        if(operador === '*') acumulador *= numero
//     }
//     console.log(acumulador)
// }

const conta = function(operador, acumulador, ...numeros){
    for (let numero of numeros){
       if(operador === '+') acumulador += numero
       if(operador === '-') acumulador -= numero
       if(operador === '/') acumulador /= numero
       if(operador === '*') acumulador *= numero
    }
    console.log(acumulador)
}

conta('-',0,20,30,20)