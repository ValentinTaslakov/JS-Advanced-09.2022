function aggregateElements(elements) {
// за всяка матрица трябва да направим три операции
        aggregate(elements, 0, (a, b) => a + b);
    //извикваме вложената функция, като подаваме матрицата,
    // после с 0 се взима числова стойност,
    // накрая се подава функцията(така не се правят три отделни вложени функции)
        aggregate(elements, 0, (a, b) => a + 1 / b);
        aggregate(elements, '', (a, b) => a + b);

        function aggregate(arr, initVal, func) {
            let val = initVal; // взимаме първоначалната стойност в два от случаите 0 и в единия празен стринг
            for (let i = 0; i < arr.length; i++)
                val = func(val, arr[i]);
    //присвояваме стойност от функцията извършена върху Val и за всеки елемент от матрицата
            console.log(val);
        }
    }

    aggregateElements([1, 2, 3])
    