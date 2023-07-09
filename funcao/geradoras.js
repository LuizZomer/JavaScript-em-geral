function* geradora1(){
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = geradora1();

// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next().value)

for (let valor of g1){
    console.log(valor)
}

function* geradora2(){
    let i = 0;

    while(true){
        yield i
        i++
    }
}

const g2 = geradora2();

for (let i of g2){
    if(i > 3) break
    console.log(i)
}

console.log()

function* geradora3(){
    yield 0
    yield 1
    yield 2
}

function* geradora4(){
    yield* geradora3()
    yield 3
    yield 4
}

const g4 = geradora4()

for(let i of g4){
    console.log(i)
}

function* geradora5(){
    yield function(){
        console.log('Vim do 1')
    }

    yield function(){
        console.log('Vim do 2')
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value
func1()
func2()