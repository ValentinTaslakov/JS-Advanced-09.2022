function subtract() {
    let num1 = document.getElementById('firstNumber').value;
    let num2 = document.getElementById('secondNumber').value;

    num1 = Number(num1);
    num2 = Number(num2);

    let result = num1 - num2;

    document.getElementById('result').textContent =  result;
   
    console.log('TODO:...');
}