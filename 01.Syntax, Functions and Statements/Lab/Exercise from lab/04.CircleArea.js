
function area(arr){

    let result;

    let arrType = typeof(arr);

    if( arrType === 'number'){
        result = Math.pow(arr,2) * Math.PI;
        console.log(result.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${arrType}.`)
    }
}

area(5)