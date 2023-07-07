function getTimeFromSeconds(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br', {
        hour12:false,
        timeZone: 'GMT'
    })
}


const relogio = document.querySelector('#relogio');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');
let segundos = 0;
let timer;

function startClock(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    },1000)
}


iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(timer);
    startClock()
})

pausar.addEventListener('click', function(evento){
    clearInterval(timer);
    relogio.classList.add('pausado')
})

zerar.addEventListener('click', function(evento){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    relogio.classList.remove('pausado')
    segundos = 0;
});