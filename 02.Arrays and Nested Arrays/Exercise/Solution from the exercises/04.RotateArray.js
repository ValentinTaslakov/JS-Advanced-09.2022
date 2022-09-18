function solve(arr, rotations){
let res = arr;
    for(let i = 0; i<rotations; i++ ){
        let element = res.pop();
        res.unshift(element);
    }

    return res.join(" ");
}

console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
));