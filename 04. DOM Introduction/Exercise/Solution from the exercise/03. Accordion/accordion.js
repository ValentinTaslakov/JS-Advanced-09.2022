//function toggle() {
 //  let hidenText = document.getElementById("extra");
 //  let button =  document.getElementsByClassName("button")[0];
 //   
 //  if(button.textContent == "More"){
 //   hidenText.style.display = "block";
 //   button.textContent = "Less";
 //  }else{
 //   hidenText.style.display = "none";
 //   button.textContent = "More";
 //  }
//}
//
function toggle() {
    
    const button = document.querySelector('.button').innerHTML;
    const text = document.getElementById('extra');


    document.querySelector('.button').textContent = button === 'More' ? 'Less' : 'More';

    text.style.display = text.style.display == "none" ||
     text.style.display == " " ? text.style.display = "block" : text.style.display = "none";
}