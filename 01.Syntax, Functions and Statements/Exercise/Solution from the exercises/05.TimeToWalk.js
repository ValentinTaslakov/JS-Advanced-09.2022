function solve(steps, lengthFootprint, speed){

    let distanceToUniversity = steps * lengthFootprint;
    let countOfBreaks = Math.floor(distanceToUniversity / 500);
    let speedInMps = speed/3.6;
    let time = distanceToUniversity/speedInMps;

    let minutes = Math.floor(time/60);
    let seconds = Math.ceil(time - (minutes*60));
    let hours = Math.floor(time / 3600);

    minutes += countOfBreaks;
    hours += Math.floor(minutes/60);
    minutes = minutes % 60;

    let formatHours = hours < 10 ? `0${hours}` : `${hours}`;
    let formatMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let formatSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    console.log(`${formatHours}:${formatMin}:${formatSec}`)
}

solve(9000, 0.60, 5);
solve(2564, 0.70, 5.5);