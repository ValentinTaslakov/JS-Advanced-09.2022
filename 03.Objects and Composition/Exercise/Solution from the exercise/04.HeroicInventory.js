function heroicInventory(input) {
    let result = [];
    // итерираме входнита данни (масива) за да вземем всеки един герой (стринг)
    // по отделно
    for (const iterator of input) {
        let [name, level, items] = iterator.split(' / ');
        //сплитваме за да вземем данните на героя, всяко поле поотделно
        // като стринг в масив
        level = Number(level);
        // сетваме левела като число
        items = items ? items.split(', ') : [];
        // ако има някакъв инвентар на героя във входа взимаме като масив 
        //всяка отделна вещ, ако няма взимаме празен масив 

        result.push({ name, level, items });
        //в резултата, който е празен масив, слагаме обект със съответните елементи
    }

    

    let jsonResult = JSON.stringify(result);
    // резултата е масив от обекти, с горния код го првръщаме
    // в стринг или по-точно в JSON 
    return jsonResult;

  // console.log(result[0])
  // console.table(result);
  // console.log('-----------------------');
  // console.log(jsonResult);
  // console.log('-----------------------');
  // console.table(JSON.parse(jsonResult));
}
//входа идва като поредица от стрингове в масив
// всеки стринг съдъжа инфо за героя, нивото му и ако има инвентар.
console.log(heroicInventory(
    ['Jake / 1000 / Gauss, HolidayGrenade']
));