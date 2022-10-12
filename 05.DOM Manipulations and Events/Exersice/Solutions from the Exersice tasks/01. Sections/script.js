function create(words) {
   //console.log('TODO:...');

   let parentParagraf = document.getElementById("content");
   parentParagraf.addEventListener('click', showHidden);

   for (const word of words) {
      let p = document.createElement('p');
      let newDiv = document.createElement('div');
      p.textContent = word;
      p.style.display = "none";
      
      newDiv.appendChild(p);
     // newDiv.addEventListener('click', showHidden);
      parentParagraf.appendChild(newDiv);
   }

   function showHidden(event){
     event.target.firstChild.style.display = 'inline'
   }

   
}