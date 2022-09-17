function sumFirsAndLast (arr){
    let firstNum = Number(arr.shift());
    let lastNum = Number(arr.pop());

    return firstNum + lastNum;
}

console.log(sumFirsAndLast(['5', '10']));