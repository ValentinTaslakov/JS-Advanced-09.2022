function solve(matrix){
    let count = Number(0);
    let curentRow = [];
    let nextRow = [];
    for(let row = 0; row < matrix.length - 2; row++ ){
        let curentRow = matrix[row];
        let nextRow = matrix[row+1];
        for(let col = 0; col < curentRow.length; col++){
            
            if(curentRow[col]===nextRow[col] 
                || curentRow[col]===curentRow[col+1]){
                count++;
            }   
        }
    }
    let lastRow = matrix[matrix.length-1];
    for(let k = 0; k < lastRow.length; k++){
        if(lastRow[k]===lastRow[k+1]){
            count++;
        }
    }

    console.log(count);
}

function equalNeighbors(matrix) {
    let counter = 0;
  
    for (let row = 0; row < matrix.length - 1; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] == matrix[row + 1][col]) {
          counter++;
        }
        if (matrix[row][col] == matrix[row][col + 1]) {
          counter++;
        }
        if (
          row == matrix.length - 2 &&
          matrix[row + 1][col] == matrix[row + 1][col + 1]
        ) {
          counter++;
        }
      }
    }
    console.log(counter);
  }

console.log(solve(
 [[2, 2, 5, 7, 4],
  [4, 0, 5, 3, 4],
  [2, 5, 5, 4, 2]]
   ));