window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.getElementById("form-btn");
  publishBtn.addEventListener("click", publish);
  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let age = document.getElementById("age");
  let genre = document.getElementById("genre");
  let storyTitle = document.getElementById("story-title");
  let storyText = document.getElementById("story");
  let previewList = document.getElementById("preview-list");
  let main = document.getElementById("main");

  function publish(e) {
    e.preventDefault();
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let ageValue = age.value;
    let genreValue = genre.value;
    let storyTitleValue = storyTitle.value;
    let storyTextValue = storyText.value;

    if (!firstNameValue || !lastNameValue || !ageValue || !storyTitleValue || !storyTextValue) {
      return
    }

    publishBtn.setAttribute('disabled', true);
    createPreview(firstNameValue, lastNameValue, ageValue, storyTitleValue, storyTextValue, genreValue);
    firstName.value = "";
    lastName.value = "";
    age.value = "";
    genre.value = "Disturbing";
    storyTitle.value = "";
    storyText.value = "";


    //console.log("ok");
    //debugger
  }

  function createPreview(firstNameValue, lastNameValue, ageValue, storyTitleValue, storyTextValue, genreValue) {
   debugger
    let li = document.createElement("li");
    li.classList.add("story-info");

    let article = document.createElement("article");

    let h4 = document.createElement("h4");
    h4.textContent = `Name: ${firstNameValue} ${lastNameValue}`;

    let pAge = document.createElement("p");
    pAge.textContent = `Age: ${ageValue}`;

    let pTitle = document.createElement("p");
    pTitle.textContent = `Title: ${storyTitleValue}`;

    let pGenre = document.createElement("p");
    pGenre.textContent = `Genre: ${genreValue}`

    let pStory = document.createElement("p");
    pGenre.textContent = `${storyTextValue}`;

    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStory);

    let saveBtn = document.createElement("button");
    saveBtn.classList.add("save-btn");
    saveBtn.textContent = "Save Story";
    
    saveBtn.addEventListener("click", saveStory);

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit Story";

    editBtn.addEventListener("click", editStory);

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete Story";
   
    deleteBtn.addEventListener("click", deleteStory);




    previewList.appendChild(article);
    previewList.appendChild(saveBtn);
    previewList.appendChild(editBtn);
    previewList.appendChild(deleteBtn);


  }

  function editStory(e) {
    debugger
    let curentElement = e.target.parentElement;
    let article = curentElement.getElementsByTagName("article")[0].children;
    
    let [fName, lName] = article[0].textContent.split(" ");

    firstName.value = fName;
    lastName.value = lName;
    age.value = article[1].textContent.split(": ")[1];
    storyTitle.value = article[2].textContent.split(": ")[1];
    genre.value = article[3].textContent.split(": ")[1];
    storyText.value = article[4].textContent;

    let buttons = curentElement.querySelectorAll("button");
    buttons[0].setAttribute("disabled", false);
    buttons[1].setAttribute("disabled", false);
    buttons[2].setAttribute("disabled", false);
    curentElement.getElementsByTagName("article")[0].remove();
    buttons[0].remove();
    buttons[1].remove();
    buttons[2].remove();

    publishBtn.disabled = false;

  }

  function saveStory(e) {
   
    let h1 = document.createElement("h1");
    h1.textContent = "Your scary story is saved!"
    let arr = Array.from(main.children);
    for (const ch of arr) {
      ch.remove()
    }
    main.appendChild(h1);
    

  }

  function deleteStory(e) {
    publishBtn.disabled = false;
    let curentElement = e.target.parentElement;
    curentElement.getElementsByTagName("article")[0].remove();
    let buttons = curentElement.querySelectorAll("button");
    buttons[0].remove();
    buttons[1].remove();
    buttons[2].remove();
  }

}
