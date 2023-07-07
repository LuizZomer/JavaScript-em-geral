function mostrarHora(){
    let data = new Date();

    return data.toLocaleString('pt-br',{
        hour12: false
    });
}



const timer = setInterval(function () {
    console.log(mostrarHora())
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 3010);

setTimeout(function () {
    console.log('Olá mundo!')
}, 5000)
