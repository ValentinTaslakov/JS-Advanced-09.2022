function townToJson(arr){
    let result = [];

    for(let i = 1; i < arr.length ; i++ ){
       let str = arr[i].split("|");
       str.pop();
       str.shift();
       let Town = str[0].trim();
       let Latitude = parseFloat(str[1]).toFixed(2);
       let Longitude = parseFloat(str[2]).toFixed(2);
       
       Latitude = Number(Latitude);
       Longitude = Number(Longitude);

       result.push({Town, Latitude, Longitude})
    }

    return JSON.stringify(result);

}

console.log(townToJson(
[
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]

))