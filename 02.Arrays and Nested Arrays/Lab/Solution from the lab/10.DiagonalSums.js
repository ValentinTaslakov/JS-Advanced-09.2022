function diagonalSum (matrix){
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    let startPoint = 0;
    let endPoint = matrix.length-1;

    for (const iterator of matrix) {
        firstDiagonalSum += iterator[startPoint];
        startPoint ++;

        secondDiagonalSum += iterator[endPoint];
        endPoint --;
    }
    console.log(firstDiagonalSum + " "+ secondDiagonalSum)
}


diagonalSum(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]   
   )