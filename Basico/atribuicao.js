// const numeros = [1, 2, 3]

// const [a, b, c] = numeros;

// console.log(a, b, c);

//Array

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let [primeiro,segundo, ...resto] = numeros;

// console.log(resto) 

// const lista = [[1,2,3],[4,5,6],[7,8,9]]
// const [,[,,seis]] = lista;

// console.log(seis)

//Objeto

const pessoa = {
    nome:'Luiz',
    sobrenome:'Zomer',
    idade:19,
    endereco:{
        rua:'Avenida centenario',
        numero:658
    }
};

// const { nome:teste, sobrenome, tamanho= 'Não existe',endereco:{numero} } = pessoa
 
// console.log(teste, sobrenome, tamanho,numero)

const {nome, ...resto } = pessoa;

console.log(nome,resto)