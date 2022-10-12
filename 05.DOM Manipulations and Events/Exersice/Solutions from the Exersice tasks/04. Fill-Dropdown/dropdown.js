function addItem() {
    let select = document.getElementById('menu');
    let newItemText = document.getElementById("newItemText");
    let newItemValue = document.getElementById("newItemValue");

    

    let newElement = document.createElement('option');
    newElement.textContent = newItemText.value;
    newElement.value = newItemValue.value;

    select.appendChild(newElement);
    newItemText.value = "";
    newItemValue.value = "";
}