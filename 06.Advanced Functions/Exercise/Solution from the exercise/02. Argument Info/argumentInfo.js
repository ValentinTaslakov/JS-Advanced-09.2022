function argumentInfo(...arg){
    let countResult = {};
//създавам празен обект който ще ползвам като 
//асоциативен масив и в него ще пазя броя на всеки тип
    for (const argument of arg) {
        //извадих типа на всеки аргумент в отделна променлива
        let type = typeof argument;
        //проверявам дали има поле с този тип
        if(!countResult[type]){
            countResult[type] = 0;
        //ако няма го създавам и му давам първоначална стойност
        }
        // и после увеличавамтази стойност
        countResult[type]++;
        // и принтирам всеки тип със стойноста му
        console.log(`${type}: ${argument}`);
    }
//сортирам обекта като първо взимам всички ентрита за да получа 
//масив от масиви,като във всеки вътрешен масив първо е името на 
//полето а 2-ро е неговата стойност.
//сортирам ги и ги принтирам във изисквания формат
    const sorted = Object.entries(countResult)
    .sort(([, v1], [, v2]) => v2 - v1)
    .forEach(el => console.log(`${el[0]} = ${el[1]}`)); 

    //Ако използвам това ще получа сортиран обект
    //const sorted = Object.entries(ages)
    //.sort(([, v1], [, v2]) => v1 - v2)
    //1-во е в какво ще reduce,после е всеки един масив 
    //.reduce((obj, [k, v]) => ({
    //  ...obj,
    //слагаме ключа като поле а валуето като стойност на полето
    //  [k]: v
    //}), {})
    //и накрая със {} посочваме че искаме масив
}

argumentInfo('cat'
, 42
, 35
, function () { console.log('Hello world!'); });