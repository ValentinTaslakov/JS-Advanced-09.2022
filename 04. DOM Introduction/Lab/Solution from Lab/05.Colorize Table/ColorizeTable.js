//function colorize() {
//    let rows = document.querySelectorAll('table tr');
//
//    let index = 0;
//    for (const row of rows) {
//        index++;
//        if (index % 2 == 0) {
//            row.style.background = "teal";
//        }
//    }
//}

function colorize() {
    let rows = document.querySelectorAll('table tr');
//понеже взетите елементи горе не са точно масив(има сходни функции но не всички)
//долу превръщам взетите данни като масив
    let arr = [...rows];
//правя си стандартен фор цикъл като започвам от 1
// за да испусна заглавната част на таблицата и итерирам през 2 
//за да взема четните редове
    for (let i = 1; i < arr.length; i += 2) {
        arr[i].style.background = "teal";
    }
}