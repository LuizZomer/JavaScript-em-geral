// function criaPessoa(nome, sobrenome) {
//     return { nome, sobrenome }
// }

// const p1 = criaPessoa('Luiz','Otavio')

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto
    }
    return falaResto
}

const frase1 = falaFrase('Olá')

console.log(frase1('Luiz'))

function multiplica(n){
    function valor(x){
        return x * n
    }
    return valor
}

const duplica = multiplica(2)

console.log(duplica(3))