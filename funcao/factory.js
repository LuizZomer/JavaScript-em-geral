function criaPessoa(nome, sobrenome,altura, peso) {
    return {
        nome,
        sobrenome, 

        fala(assunto='nada'){
            return `${this.nome} está ${assunto} `
        },

        peso,
        altura,

        get imc(){
            return (this.peso / (this.altura ** 2)).toFixed(2)
        },

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(nomeInteiro) {
            nomeInteiro = nomeInteiro.split(' ')
            this.nome = nomeInteiro.shift()
            this.sobrenome = nomeInteiro.join(' ')
        }

    }
}

p1 = criaPessoa('Luiz', 'Zomer',1.70,65)
p1.nomeCompleto= 'Joana Oliveira'

console.log(p1.nomeCompleto)
console.log(p1.imc)