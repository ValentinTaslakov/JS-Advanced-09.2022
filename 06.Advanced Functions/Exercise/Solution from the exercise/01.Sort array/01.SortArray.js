function solve(arr,str){

    switch(str){
        case("asc"): arr.sort((a,b) => a-b); break;
        case("desc"): arr.sort((a,b) => b-a); break;
    }

    return arr;
}


console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));