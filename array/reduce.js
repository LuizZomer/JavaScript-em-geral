const numeros = [1, 2, 3, 4, 5, 6]

const total = numeros.reduce((acumulador, valor , indice, array) => {
    acumulador += valor 
    return acumulador
}, 0) 

// Modos não recomendado de uso

// const pares = numeros.reduce((acumulador, valor , indice, array) => {
//     if(valor % 2 === 0){
//        acumulador.push(valor)
//     }
//     return acumulador
// }, []) 

// const pares = numeros.reduce((acumulador, valor , indice, array) => {
//     acumulador.push(valor * 2)
//     return acumulador
// }, []) 

const pessoas = [
    {nome:'Luiz',idade:19},
    {nome:'maria',idade:20},
    {nome:'wallace',idade:18},
    {nome:'Leticia',idade:51},
    {nome:'José',idade:43},
    {nome:'Pépe',idade:32},
    {nome:'Eduardo',idade:23},
    {nome:'Rosana',idade:19},
];

const maisVelha = pessoas.reduce((acumulador,pessoa)=>{
    if(acumulador.idade > pessoa.idade) return acumulador
    return pessoa 
})


console.log(maisVelha)
