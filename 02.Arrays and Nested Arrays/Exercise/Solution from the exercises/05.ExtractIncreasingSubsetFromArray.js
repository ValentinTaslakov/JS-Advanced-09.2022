function solve(arr){
    let res = [];
    let bigNum = 0;

    for (let el of arr) {
        if(el >= bigNum){
            bigNum = el;
            res.push(bigNum);
        }
    }
    return res;
}

console.log(solve(
    [20, 
        3, 
        2, 
        15,
        6, 
        1]
    ));