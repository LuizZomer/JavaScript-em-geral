function Pessoa(nome, sobrenome){

    const metodoInterno = () => {
        console.log('Chama')
    }

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(`O ${this.nome} é demais`)
    }
}

const p1 = new Pessoa('Luiz','Zomer');

p1.metodo()
