function extractText() {
    let elements = document.getElementsByTagName('li');
    //взимам всички елементи с този таг
    let result = document.getElementById('result');
    // после взимам елемента където се извежда резултата
    for (const li of elements) {
    //пускам цикъл за да взема текста от всеки елемент
        let text = li.textContent;
    //взимам текста на елемента
        result.value += text + "\n";
    //към стойността на елемента за резултата добавям
    // текста от елемента и нов ред
    }
}

function extractText1() {
    let itemNodes = 
      document.querySelectorAll("ul#items li");
//от презентацията използват куери селектор, а аз
//селектирах по таг. "ul#items li" казваме да вземе от
//тага ul със ид items всички li тагове
    let textarea = 
      document.querySelector("#result");
//тук пак е куери селектор но взима само първия елемент
//който отговаря на условието, а ние сме подали да търси
// елемент със ид result. Аз търсих спрямо ид
    for (let node of itemNodes) {
      textarea.value += node.textContent + "\n";
    }
//тук е както при мен
  }