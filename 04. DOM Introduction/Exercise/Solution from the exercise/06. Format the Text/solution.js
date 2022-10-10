//function solve() {
//  let input = document.getElementById("input").value.split(".");
//  let output = document.getElementById("output");
//  input = input.filter((el) => el.length > 1);
//
//  let count = 0;
//  let paragraph = "";
//  let out = "";
//
//  for (const sentence of input) {
//    count++;
//
//    if (count <= 3) {
//      paragraph += sentence + '.';
//    } else {
//      count = 1;
//      out += `<p> ${paragraph} </p>`;
//      paragraph = "";
//      paragraph += sentence + '.';
//    }
//  }
//  debugger
//  count >= 1 ? out += `<p> ${paragraph} </p>` : "" ;
//
//
//  output.innerHTML = out;
//  //Моята функция не работи пълноценно вадя само 60 точки
//}

// това е функцията на колегата която работи
function solve() {
  //използва куери селектор за да вземе въведения текст от таг textarea 
  //със ид input взима стойноста и сплитва по "."
  //след което филтрира и премахва изреченията които имат по малко от един символ.
  let text = document.querySelector('textarea#input').value.split('.');
  text = text.filter((el) => el.length > 1);

  //Пуска цикъл докато text.length не върне 0
  while (text.length) {
    // създаваме в HTML таг от тип <р>
    let p = document.createElement('p');
    //и давам съдържанието на този таг да присвои първите три ел.от 
    //сортирания масив, като splice ги изрязва от масива.
    p.textContent = text.splice(0, 3) + '.';
    // взимаме и резултатния таг и му добавяме като под таг създадения по горе
    document.querySelector('div#output').appendChild(p);
  }
}