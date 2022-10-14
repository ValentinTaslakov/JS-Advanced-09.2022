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
    

    function manipolator (instruction, product, quantity){
        switch(instruction){
            case "restock": 
               storage[product] += quantity;
               result = "Sucsses"; 
            break;
            case "prepare":
                result = cooking(product,quantity);
            break;
        }
    }

    function cooking(product,quantity){
        
    }



    return function (input) {
        let [instruction, product, quantity] = input.split(" ");
        quantity = Number(quantity);
        manipolator(instruction, product, quantity);

        return result;
    };
}

let manager = solution();
console.log(manager("restock flavour 50")); 
console.log(manager("restock flavour 50")); 
console.log(manager("restock flavour 50")); 
console.log(manager("restock flavour 50")); 
