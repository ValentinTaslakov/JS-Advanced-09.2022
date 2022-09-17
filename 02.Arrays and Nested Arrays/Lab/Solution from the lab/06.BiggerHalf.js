function biggerHalf (arr){
    arr.sort((a,b) => a-b);

    let res = arr.slice(arr.length/2,arr.length);

    return res;
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));