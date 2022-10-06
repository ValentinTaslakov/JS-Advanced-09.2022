function search() {
   let towns = document.querySelectorAll("ul li");
   // тук горното взима всички ul и от тях всички li, 
   // в задачата имаме само едно ul но ако имаме повече 
   // трябва да използваме ид - то като ще изглежда така ("#towns li")
   let searchText = document.getElementById("searchText").value;
   let matches = 0;

   for (const li of towns) {

      let town = (li.textContent);
      let reg = new RegExp(searchText, "i");
      reg.ignoreCase;

      if ((searchText)!=="" && reg.test(town)) {
         li.style.fontWeight = "bold";
         li.style.textDecoration = "underline";
         matches += 1;
      }else{
         li.style.fontWeight = "";
         li.style.textDecoration = "";
         //с този елсе премахвам предишните резултати
         //но все още когато е празно полето за търсене ми 
         //маркира всичко
      }
      document.getElementById("result").textContent = `${matches} matches found`;
      //вместо textContent мога да използвам и .innerText
   }
   ////console.log(searchText);
}
//function search() {
//   let towns = document.querySelectorAll("#towns li");
//
//   let searchText = document.getElementById("searchText").value;
//   let matches = 0;
//
//   for (const li of towns) {
//
//      let town = (li.textContent);
//      let reg = new RegExp(searchText, "i");
//      reg.ignoreCase;
//
//      if (town.includes(searchText)) {
//         li.style.fontWeight = "bold";
//         li.style.textDecoration = "underline";
//         matches += 1;
//      } else {
//         li.style.fontWeight = "";
//         li.style.textDecoration = "";
//
//      }
//      document.getElementById("result").textContent = `${matches} matches found`;
//// и решението на лектора не покрива всичко даже грешките са повече
//// ако напишем една буква и тя се съдържа посредата на няколко града 
//// ще ги маркира всички
//   }
//}