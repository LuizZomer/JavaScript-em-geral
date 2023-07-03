function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}

const pessoa1 = criaPessoa('Luiz','Zomer',19)

console.log(pessoa1.nome)