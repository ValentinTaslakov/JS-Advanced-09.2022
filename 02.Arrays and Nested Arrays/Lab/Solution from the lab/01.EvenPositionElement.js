function evenPosition(arr){

    let res = '';

    for(let i = 0; i < arr.length; i+=2){
        res+=arr[i]+" ";
    }
    return res.trim();
}

function evenPosition2 (arr){
    let res = [];

    for(let i = 0; i < arr.length; i+=2){
        res.push(arr[i]);
    }

    console.log(res.join(" "));
}

evenPosition2(['20', '30', '40', '50', '60']);

console.log('------------------------------');

evenPosition2(['5', '10']);