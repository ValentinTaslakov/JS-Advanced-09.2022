function addItem() {
    //console.log('TODO:...');

    let parent = document.getElementById("items");

    let input = document.getElementById("newItemText").value;

    let newChild = document.createElement("li");

    newChild.textContent = input;

    parent.appendChild(newChild);
}