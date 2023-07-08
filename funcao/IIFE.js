(function(){
    function falaNome(nome){
        function completo(sobrenome){
            return nome + ' ' + sobrenome
        }
        return completo
    }
    const pessoa1 = falaNome('Luiz')
    console.log(pessoa1('Zomer'))
})();

const nome = 'Outra coisa'