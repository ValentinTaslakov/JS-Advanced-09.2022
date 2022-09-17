function calculateMoney(fruit, grams, price){
    let kilo = grams/1000;

    let neededMoney = price*kilo;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${kilo.toFixed(2)} kilograms ${fruit}.`)
}

calculateMoney('orange', 2500, 1.80);

calculateMoney('apple', 1563, 2.35);