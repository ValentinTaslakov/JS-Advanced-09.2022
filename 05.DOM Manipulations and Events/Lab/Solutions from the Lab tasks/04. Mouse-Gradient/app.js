function attachGradientEvents() {
    // console.log('TODO:...');

    let gradient = document.getElementById("gradient");
//взимаме елемента който ще следим
    gradient.addEventListener("mousemove", gradientMove);
// добавяме листенер който следи движението на курсора върху елемента 
// към който сме го добавили и се задейства тогава
    gradient.addEventListener("mouseout", gradientOut);
// добавяме още един който се задейства когато курсора е извън елемента
//към който е добавен
    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        //offsetX е функция на mousemove и връща кординатите на 
        //курсора по оста Х спрямо големината на целевия елемент
        //event.target реферира на елемента върху когото сме 
        //кликнали а event.currentTarget върху обекта на който сме 
        // поставили евента в случая и двете връщат едно и също
        //event.target.clientWidth връща вътрешната ширина на 
        //селектирания елемент в пиксели
        power = Math.trunc(power * 100);
        //горе за power делим позицията на курсора по Х на ширината
        // на елемента и тук го умножаваме по 100 за да полу1им процентите
        //Math.trunc премахва всичко след дестичната запетая не закръгля
        //само премахва
        document.getElementById("result").textContent = power + "%";
        //в резултата се добавя моментната позиция на курсора като данните
        // се променят динамично с позицията на курсора
        
    }

    function gradientOut(event) {
        document.getElementById("result").textContent = "";
        //когато курсора е извън обекта зачистваме резултата
    }
}