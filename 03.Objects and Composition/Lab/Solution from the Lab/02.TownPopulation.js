function solve(arr){
    const towns = {};
   
    for (let town of arr) {
        //взимам всеки елемент от масива
        let [name, population] = town.split(' <-> ');
        //после този елемент от стринг, като го сплитнем 
        //по символа който разделя данните, го правим в масив от
        //два елемента, и втория го сетваме че е число
        population = Number(population);

        if(towns[name] != undefined){
            population += towns[name];
        //Ако търсим поле в обект и това поле не е присвоено към обекта
        //излиза че е undefined. Проверяваме дали ключа съществува и ако
        //е актуализираме стойноста към този ключ.
        }
        towns[name] = population;   
        //Присвоявам поле към обекта със стойност     
    }
console.log(towns);
    for (const town in towns) {
      //  console.log(`${town} : ${towns[town]}`)
        //С ForIn loop взимам полетата от обекта(в случая асосиативен масив)
        //взимайки town принтирам ключа на полето , когато го взема 
        //като индекс от масива се принтира стойноста на полето.
    }
}

solve(
    ['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

);