// const pessoa = {
//     'nome':'Luiz',
//     'idade':19
// };

// console.log(pessoa['nome']);
// console.log(pessoa.nome);
// delete pessoa.nome;

// for (let i in pessoa){
//     console.log(i)
// }

// function criaPessoa(nome, sobrenome){
//     return{
//         nome,sobrenome,
//         get nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Luiz','Otavio');
// console.log(p1.nomeCompleto)

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);
}

const p1 = new Pessoa('Luiz','Miranda');