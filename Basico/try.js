function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw('X e Y precisam ser numero');
        // throw new Error('X e Y precisam ser numero');
    }

    return x + y
}

try{
    console.log(soma(1, 'a'))
} catch (error){
    console.log(error)
}finally{
    console.log('Vai ser executado de qualquer forma')
}

