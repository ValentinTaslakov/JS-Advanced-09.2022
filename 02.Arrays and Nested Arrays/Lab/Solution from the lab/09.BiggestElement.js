function biggestNum(matrix) {
    let num = Number(0);

    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > num) {
                num = matrix[i][j];
            }
        }
    }

    return num;
}


function biggestNum2 (matrix){
    let maxNum = matrix[0][0];
    //взимам първия елемент на матрицата за инициализиране на maxNum
    for (const iterator of matrix) {
        //for цикъл за всеки ред от матрицата
        let num = Math.max(...iterator);
        //взетия ред се "раздробява" за да може функцията 
        // да сравни всички числа в масива и да вземе най-голямото 
            if(num > maxNum){
                maxNum = num;
            }
    }
    return maxNum;
}


console.log(biggestNum2(
    [[20, 50, 10],
    [8, 33, 145]]
))