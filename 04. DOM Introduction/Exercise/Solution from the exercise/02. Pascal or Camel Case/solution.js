function solve() {
  let text = document.getElementById("text").value;
  let currentCase = document.getElementById("naming-convention").value;
  let res = "";

  switch (currentCase) {
    case "Camel Case": res = camelCase(text); break;
    case "Pascal Case": res = pascalCase(text); break;
    default: res = "Error!";
  }
  document.getElementById("result").textContent = res;



  function camelCase(text) {

    let arr = text.split(" ");
    let changeWord = "";

    for (let i = 0; i < arr.length; i++) {
      let word = arr[i].toLowerCase();

      if (i == 0) {
        changeWord += word;
      } else {
       
        let firstLetter = word.slice(0, 1);
        word = word.replace(firstLetter, firstLetter.toUpperCase());
        changeWord += word;
      }

    }
    return changeWord;
  }

  function pascalCase(text) {
    let arr = text.split(" ");
    let changeWord = "";

    for (let i = 0; i < arr.length; i++) {
      let word = arr[i].toLowerCase();

      let firstLetter = word.slice(0, 1);
      word = word.replace(firstLetter, firstLetter.toUpperCase());
      changeWord += word;
    }
    return changeWord;
  }

}