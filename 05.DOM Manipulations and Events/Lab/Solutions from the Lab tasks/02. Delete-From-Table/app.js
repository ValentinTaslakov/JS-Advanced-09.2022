function deleteByEmail() {
    //console.log('TODO:...');

    let input = document.getElementsByName("email")[0].value;
// тук взимам първия елемент [0] понеже когато е Elements връща масив 
// а когато е Element връща един елемент.
    let rows = document.querySelectorAll("#customers td:nth-child(2)");
//Тук взимам таблицата и от нея вторите колони в таблицата чрез td:nth-child(2)
// във HTML редовете са tr(Table row) а стойностите за всяка колона в този ред са td
//td e child на tr или tr е parent на td(table data) th(table header)
//  <tr> това е реда
//      <td>Tedy</td> това е стойността на първата колона за този ред
//      <td>tedy@tedy.com</td> тове на втората. 1-ват е име 2-та е имейл
//  </tr>
    let found = false;
    for (const row of rows) {
        if(row.textContent === input){
            row.parentElement.remove();
            //let row = td.parentNode;
            //row.parentNode.removeChild(row);
            found = true;
        }
    }

    let result = document.getElementById("result");

    result.textContent = found ? "Deleted." : "Not found.";
}