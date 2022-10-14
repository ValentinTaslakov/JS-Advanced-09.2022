function solve(area, vol, input){
    let coordinates = JSON.parse(input);
    let result = [];

    for (const coordinate of coordinates) {
        let areaObj = Math.abs(area.call(coordinate));
        let volumeObj = Math.abs(vol.call(coordinate));
        result.push({
            area: areaObj,
            volume: volumeObj
        });
    }
    return result;
}

let input =`[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    

console.log(solve(area, vol, input));

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function area() {
    return Math.abs(this.x * this.y);
};
