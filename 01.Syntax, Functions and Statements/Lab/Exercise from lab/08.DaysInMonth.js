function solve(m , y){
    return new Date(y, m, 0).getDate();
}

console.log(solve(1, 2012));

console.log(solve(2, 2021));