function roadRadar(speed, area) {

    let limit = Number(0);

    switch (area) {
        case 'motorway': limit = 130; break;
        case 'interstate': limit = 90; break;
        case 'city': limit = 50; break;
        case 'residential': limit = 20; break;

    }

    if(!(speed > limit)){
        console.log(`Driving ${speed} km/h in a ${limit} zone`)

        return;
    }

    let overLimit = speed - limit;
    let status = '';

    if(overLimit <=20){
        status = 'speeding';
    }else if(overLimit <= 40){
        status = 'excessive speeding';
    }else{
        status = 'reckless driving';
    }



    console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${limit} - ${status}`);
}

roadRadar(40, 'city');

roadRadar(21, 'residential');

roadRadar(120, 'interstate');