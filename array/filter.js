const numeros = [4,1,56,7,64,3,11];

// function callbackFilter(valor,indice,array){
//     if (valor > 10){
//        return true  
//     } else {
//         return false
//     }
// }

// function callbackFilter(valor,indice,array){
//     return valor > 10
// }

const numerosFiltrado = numeros.filter( valor => valor > 10)

console.log(numerosFiltrado)

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

const NomeLetra = pessoas.filter(valor=> valor.nome.length > 5)

const pessoa50 = pessoas.filter(valor => valor.idade > 50)

const nomeA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'))  

console.log(NomeLetra)
console.log()
console.log(pessoa50)
console.log()
console.log(nomeA)