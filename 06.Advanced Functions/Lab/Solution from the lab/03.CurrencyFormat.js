//Partial Application
//тази функция настройва базовата със изискаваните разделители и парични знаци
function createFormatter(separator, symbol, symbolFirst, formatter) {
    //връщаме функция със стойност която извиква функцията подадена горе
    //със вече подадените аргументи и неизвестната стойност
return (value) => formatter(separator,
         symbol,
         symbolFirst,
         value);
}
//подаваме разделителя, паричния символ, булева с която казваме къде да е паризния символ,
//, функция която пряви форматирането
let dollarFormatter = createFormatter(',', '$', false, currencyFormatter);
// така присвоена функцията към променливата ние сме създали нова функция която 
//е настроена за долари, и при извикване на dollarFormatter трябва да подадем само
//стойноста която искаме да форматираме 
console.log(dollarFormatter(5345));   
console.log(dollarFormatter(3.1429)); 
console.log(dollarFormatter(2.709));  

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

