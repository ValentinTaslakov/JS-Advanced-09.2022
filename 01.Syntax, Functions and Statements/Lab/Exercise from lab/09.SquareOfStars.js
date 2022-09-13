function solve(count = 5){
    
    //let num = Number(count);
    let square = '';

    for(let i = 0; i < count ; i++){

        square += ('* '.repeat(count));
        square += '\n';
    }
    return square;
}

console.log(solve(10));