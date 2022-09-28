function storeCatalogue(arr) {

    let result = {};

    arr.sort((a,b) => a.localeCompare(b));

    let groupName = '';

    for (const iterator of arr) {
        let[product,price] = iterator.split(" : ");
        
        price = Number(price);

        currentGroup = product.charAt(0);

        if(groupName !== currentGroup){
            groupName = currentGroup;
            console.log(groupName);
            console.log(`  ${product}: ${price}`);
        }else{
            console.log(`  ${product}: ${price}`);
        }
    }

}

storeCatalogue(
    ['Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
    
);