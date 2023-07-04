function zero(data){
    return data > 10 ? data : `0${data}`
}


const data = new Date()
let diaSemana = data.getDay()
let dia = zero(data.getDate())
let mes = data.getMonth()
let ano = data.getFullYear()
let hora = zero(data.getHours())
let minuto = zero(data.getMinutes())



switch (diaSemana){
    case 0:
        diaSemana = 'Domingo'
        break
    case 1:
        diaSemana = 'Segunda-Feira'
        break
    case 2:
        diaSemana = 'Terça-Feira'
        break
    case 3:
        diaSemana = 'Quarta-Feira'
        break
    case 4:
        diaSemana = 'Quinta-Feira'
        break
    case 5:
        diaSemana = 'Sexta-Feira'
        break
    case 6:
        diaSemana = 'Sábado'
}

switch (mes){
    case 0:
        mes = 'Janeiro'
        break
    case 1:
        mes = 'fevereiro'
        break
    case 2:
        mes = 'Março'
        break
    case 3:
        mes = 'Abril'
        break
    case 4:
        mes = 'Maio'
        break
    case 5:
        mes = 'Junho'
        break
    case 6:
        mes = 'Julho'
        break
    case 7:
        mes = 'Agosto'
        break
    case 8:
        mes = 'Setembro'
        break
    case 9:
        mes = 'Outubro'
        break
    case 10:
        mes = 'Novembro'
        break
    case 11:
        mes = 'Dezembro'
        break
}

let texto = document.querySelector('#texto')
texto.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano} <br>${hora}:${minuto} `

