function fibonator() {
let a = 0, b = 1, c = 0;
    return function () {
        
        a = b;
        b = c;
        return c = a + b;
    }
}

let fib = fibonator();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());