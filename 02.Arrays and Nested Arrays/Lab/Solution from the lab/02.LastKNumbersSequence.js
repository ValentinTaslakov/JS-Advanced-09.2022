function lastNumbers(n, k){

    let res = [1];

    for(let i=1; i < n; i++){
        let lastNumbers = res.slice(-k);// -к връща назада толкова 
                                        // позиции колкото е стойноста на к
        let sum = 0;

        for (const num of lastNumbers) {
            sum += num;
        }
        res.push(sum);
    }
    return res;
}

console.log(lastNumbers(6, 3));
