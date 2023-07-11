const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const numerosDobrados = numeros.map(valor => valor * 2)

console.log(numerosDobrados)

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

const apenasNome = pessoas.map(valor => valor.nome)
const semNome = pessoas.map(valor => { 
    // delete valor.nome
    // return valor
    return {idade:valor.idade}
})

const id = pessoas.map((valor,indice) => {
    const copiaObj = {...valor}
    copiaObj.id = indice + 1
    return copiaObj
})

console.log(pessoas)
console.log(apenasNome)
console.log(semNome)
console.log(id)