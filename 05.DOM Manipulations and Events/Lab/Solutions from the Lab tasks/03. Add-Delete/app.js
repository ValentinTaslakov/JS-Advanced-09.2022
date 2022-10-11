function addItem() {
    //взимам главния елемент (парент) в който ще закачам новите данни
    let parent = document.getElementById("items");
    // взимам въведените данни от потребителя
    let input = document.getElementById("newItemText");
    // така не въвеждам празни данни от потребителя
    if(input.value.trim().length === 0 ) return;
    // създавам елемента който ще закача
    let newChild = document.createElement("li");
    // задавам на новия елемнент да вземе въведените данни като свои 
    newChild.textContent = input.value;
    //създаваме бутона за изтриване
    let deleteBtn = document.createElement("a");
    // какво да се изписва върху него
    deleteBtn.textContent = "[Delete]";
    // не знам за какво точно се използва
    deleteBtn.href = "#";
    //deleteBtn.addEventListener('click', deleteItem);
    // така е по презентацията добавяме евент при click да изпълни 
    //дадената функция и отдолу си пишем логиката на функцията
    //function deleteItem(){
    //    newChild.remove();
    //};

    deleteBtn.addEventListener("click", function(event){
        event.target.parentElement.remove();
    });
// закачам бутона към вече създадените данни
    newChild.appendChild(deleteBtn);
// и вече окомплектован новия елемент го закачам на ппарент елемента
    parent.appendChild(newChild);
//след като сме въвели данни и сме изпълнили функцията
// с долното зачистваме полето за нови данни.
    input.value = '';
}