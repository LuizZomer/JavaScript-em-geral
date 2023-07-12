const numeros = [4,1,56,7,64,3,11];

const pares = numeros.filter((valor) => valor % 2 === 0 ).map((valor) => valor * 2).reduce((acumulador, valor) => acumulador += valor)





console.log(pares)