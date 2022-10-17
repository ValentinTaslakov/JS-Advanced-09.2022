function solution() {
    let recipesLibrary = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    let storage = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0, };
    let result = '';


    function manipolator(instruction, product, quantity) {
        switch (instruction) {
            case "restock":
                storage[product] += quantity;
                result = "Success";
                break;
            case "prepare":
                cooking(product, quantity);
                break;
            case "report":
                result = `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
                break;
        }
    }

    function cooking(product, quantity) {
        let recipe = recipesLibrary[product];
        let isEnough = true;
        Object.entries(recipe).forEach((el => {
            let [element, count] = el;
            if (isEnough && storage[element] < count * Number(quantity)) {
                isEnough = false;
              result = `Error: not enough ${element} in stock`;
            }
            
        }));

        if (isEnough) {
            Object.entries(recipe).forEach((el) => {
                let [element, count] = el;
                storage[element] -= count * quantity;
            })
            result = "Success";
        }
       
    }


//връщаме функция която приема входа, обработва го и го подава на друга функция
//която е разположена в скопа на главната функция където са библиотеката и хранилището
//и тази функция приема и връща резултата който съм получил горе.
    return function (input) {
        let [instruction, product, quantity] = input.split(" ");
        quantity = Number(quantity);
        manipolator(instruction, product, quantity);

        return result;
    };
}
// на променлива присвоявам главната функция
let manager = solution();
//и извиквайки я подавам входа който се приема във функцията която връщам
//която връща резултата.Не мога по друг начин да подам входа при тази конфигурация тук
//а и така горе в  хранилището се пази актуалната информация при всяко извикване. 
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
 
