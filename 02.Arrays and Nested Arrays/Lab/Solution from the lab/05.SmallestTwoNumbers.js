function twoSmallestNumbers(arr) {

    arr.sort((a, b) => a - b);

    const res = arr.slice(0,2);

    console.log(res.join(" "));

}

twoSmallestNumbers([30, 15, 50, 5]);