function previousDay(year, month, day){
    let curentDate = new Date(year, month-1 , day);

    let previousDate = new Date(curentDate -1);

    console.log(`${previousDate.getFullYear()}-${previousDate.getMonth()+1}-${previousDate.getDate()}`);
}

previousDay(2016, 10, 1);