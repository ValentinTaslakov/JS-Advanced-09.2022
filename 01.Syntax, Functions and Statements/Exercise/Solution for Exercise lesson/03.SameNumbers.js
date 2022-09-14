function sameOrNot(num){
    let sum = Number(0);
    let str = num.toString();
    let isSame = true;

    for(let i = 0; i < str.length; i++){
        sum += Number(str[i]);
        if(str[0]!=str[i]){
            isSame = false;
        }
    }

    console.log(isSame)
    console.log(sum);
}

sameOrNot(2222222);
sameOrNot(1234);