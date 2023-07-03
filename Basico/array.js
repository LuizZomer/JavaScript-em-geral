const alunos = ['luiz','maria','jean'];

console.log(alunos[0])

alunos[0] = 'Daniel'
alunos[3] = 'Pépé'

alunos.push('Luiz') //add no fim

alunos.unshift('Luisa')

nome = alunos.pop() //remove do final

alunos.shift() //remove do começo

console.log(alunos)
console.log(alunos.length)
console.log(nome)
console.log(alunos.slice(-3)) 