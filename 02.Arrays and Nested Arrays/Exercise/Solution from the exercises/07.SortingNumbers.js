function solve(arr){

    let sortArr = arr.sort((a,b) => a-b);
    let res  = [];

    for (let i = 0; i <= arr.length+2; i++) {
        let small = sortArr.shift();
        let big = sortArr.pop();
        res.push(small);
        res.push(big);
        
    }

    return res;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));