function Produto(nome,preco,estoque){
    this.nome = nome
    this.preco = preco
    // this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        // value: estoque, //valor da chave
        // writable: false, //pode alterar o valor
        configurable: true, //pode reconfigurar a chave?
        get: function(){
            return estoque
        },
        set:function(valor){
            throw new TypeError('Valor errado') 
            estoque = valor
            // console.log(valor)
        }
    })

    // Object.defineProperties(this,{
    //     nome:{ enumerable: true, //mostra a chave
    //         value: nome, //valor da chave
    //         writable: false, //pode alterar o valor
    //         configurable: false //pode reconfigurar a chave?
    //     },
    //     preco:{enumerable: false, //mostra a chave
    //         value: preco, //valor da chave
    //         writable: false, //pode alterar o valor
    //         configurable: false //pode reconfigurar a chave?
    //     }
    // })
}

const p1 = new Produto('Camiseta',20,3);
p1.estoque = 123
console.log(p1.estoque)
// console.log(Object.keys(p1))