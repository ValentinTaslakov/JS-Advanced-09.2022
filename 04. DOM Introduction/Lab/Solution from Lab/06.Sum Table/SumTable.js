function sumTable() {
    let col = document.querySelectorAll('table tr td');
//взимам от таблицата от тр всички тд
    let sum = 0;
//понеже ми взима и имената на продуктите от таблицата
//започвам да итерирам от 1 със стъпка 2, така прескачам първия 
//продукт и му взимам цената и със стъпка 2 взимам само цените
//цикъла се върти до дължината на масива - 2 елемента накрая
//там е сумата като име на ред и крайния резултат от сумата
    for( let i = 1 ; i < col.length-2; i+=2){
        sum += Number(col[i].textContent);
    }
    
    document.getElementById('sum').textContent = sum;
}