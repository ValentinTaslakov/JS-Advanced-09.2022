function solve() {

   document.querySelector('#searchBtn')
      .addEventListener('click', onClick);

   function onClick() {
      let rows = document.querySelectorAll("table tr");
      // взимам всички редове от таблицата 
      // заедно със заглавните клетки
      let searchField = document.getElementById("searchField").value;

      for (let i = 1; i < rows.length; i++) {
      // пускам фор като започвам от 1 за да избегна 
      //заглавните клетки

         let cols = rows[i].children;
      //взимам колоните от реда

         rows[i].classList.remove("select")
      //classList е лист който държи атрибутите на елемент или
      // лист от className на елеелемент в HTML, ако HTML ел. няма 
      //атрибут class="container" списъка е празен
      
         for (let j = 0; j < cols.length; j++) {
            
            if (cols[j].textContent.includes(searchField)) {
               rows[i].className = "select";
            //rows[i].classList.add("select"); горния ред става
            // и по този начин или към className атрибута 
            //добавяме още една стойност която индикира
            //на CSS да добави друга функционалност на 
            //HTML елемента, а именно друго оцветяване или 
            //както сме настроили CSS
            }
         }
      }
      searchField.value = '';
   }
}

//function solve() {
//   document.querySelector('#searchBtn').addEventListener('click', onClick);
// 
//   function onClick() {
//     let searchField = document.getElementById('searchField');
//     let rows = document.querySelectorAll('tbody tr');
// 
//     for (const row of rows) {
//       row.classList.remove('select');
// 
//       if (row.innerHTML.includes(searchField.value)) {
//         row.className = 'select';
//       }
//     }
//     searchField.value = '';
//   }
// }