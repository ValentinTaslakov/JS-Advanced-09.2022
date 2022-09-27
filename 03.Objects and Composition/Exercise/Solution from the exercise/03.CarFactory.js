function carFactory(obj) {

    let engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    };

    let result = {
        model: undefined,
        engine: {},
        carriage: {
            type: undefined,
            color: undefined,
        },
        wheels: []
    };

    result['model'] = obj['model'];
    result.carriage['type'] = obj['carriage'];
    result.carriage['color'] = obj['color'];

    if (obj.power <= engines.small.power) {
        result['engine'] = Object.assign({}, engines.small);
    } else if (obj.power <= engines.normal.power) {
        result['engine'] = Object.assign({}, engines.normal);
    } else {
        result['engine'] = Object.assign({}, engines.monster);
    }

    let size = obj.wheelsize % 2 === 0 ? obj.wheelsize - 1 : obj.wheelsize;
    result.wheels = new Array(4).fill(size);

    // console.table(result);
    return result;

}



console.log(carFactory(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));

console.log("-----------------");

console.log(carFactory(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));