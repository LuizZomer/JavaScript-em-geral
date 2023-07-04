function escopo(){
    document.getElementById("imc-calculo").addEventListener("submit", function(event) {
        event.preventDefault();
        // Resto do código de tratamento do formulário
      });
      
    
    const botao = document.querySelector('#botao')
    const resultado = document.querySelector('#resultado')
    botao.addEventListener('click',calcular)

    function calcular(){
        let peso = document.querySelector('#peso').value
        let altura = document.querySelector('#altura').value
        
        const imc = peso/altura**2
        if(imc < 18.5){
            resultado.innerHTML = `Seu imc é ${imc},Abaixo do peso`
        }else if(imc >= 18.5 && imc <= 24.9){
            resultado.innerHTML = `Seu imc é ${imc},Peso normal`
        }else if(imc >= 25 && imc <= 29.9){
            resultado.innerHTML = `Seu imc é ${imc},Sobrepeso`
        }else if(imc >= 30 && imc <= 34.9){
            resultado.innerHTML = `Seu imc é ${imc},Obesidade grau 1`
        }else if(imc >= 35 && imc <= 39.9){
            resultado.innerHTML = `Seu imc é ${imc},Obesidade grau 2`
        }else if(imc >= 40){
            resultado.innerHTML = `Seu imc é ${imc},Obesidade grau 3`
        }
    
    }
    
}
escopo()