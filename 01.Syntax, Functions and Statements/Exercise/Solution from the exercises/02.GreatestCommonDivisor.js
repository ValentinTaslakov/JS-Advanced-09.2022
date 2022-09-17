function GSD(num1, num2){
let x = Math.abs(num1);

let y = Math.abs(num2);

while(y) {
    let t = y;
    y = x % y;
    x = t;
  }
  return x;

}

console.log(GSD(2154, 458))