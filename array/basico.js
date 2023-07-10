const nomes = ['Eduardo','Maria','Joana']
const novo = [...nomes]
const maisUm = nomes.slice(0,2)

novo.pop()
nomes.push('José')
novo.unshift('Pépe')

console.log(nomes)
console.log(novo)
console.log(maisUm)