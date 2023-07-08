function Calculadora(){
    this.display = document.querySelector('.display')
   
    this.inicia = () => {
        this.capturaCliques()
        this.capturaEnter()
    }

    this.capturaEnter = () => {
        this.display.addEventListener('keyup',(e)=>{
            if(e.keyCode !== 13) return
            this.realizaConta()
            
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click',(event)=>{
            const el = event.target
            if(el.classList.contains('btn-num')) this.adicionaNum(el)
            if(el.classList.contains('btn-clear')) this.clear(el)
            if(el.classList.contains('btn-del')) this.del(el)
            if(el.classList.contains('btn-eq')) this.realizaConta(el)
        })
    }

    this.clear = ( ) => this.display.value = ''
    

    this.del = (el) => this.display.value = this.display.value.slice(0,-1)
    

    this.adicionaNum = (el) => {
        this.display.value += el.innerText
        this.display.focus()
    }

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value)
            if (!conta){
                alert('Conta invalida')
                return
            }

            this.display.value = conta

        }catch(e){
          alert('Conta invalida')
          return  
        }
    }
    

}

const calculadora = new Calculadora()
calculadora.inicia()