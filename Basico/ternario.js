const pontuacao = 999;

const nivelUsuario = pontuacao >= 100 ? 'Usuario VIP' : 'Usuario normal';

const corUsuario = 'Pink'
const corPadrao = corUsuario || 'Preta'

console.log(nivelUsuario)