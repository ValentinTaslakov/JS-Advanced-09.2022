window.addEventListener("load", solve);

function solve(){
    document.getElementById("publish-btn").addEventListener("click", publish);
    document.getElementById("clear-btn").addEventListener("click", clearPost);
    let title = document.getElementById("post-title");
    let category = document.getElementById("post-category");
    let content = document.getElementById("post-content");
    let postsForReview = document.getElementById("review-list");
    let uploadedPost = document.getElementById("published-list");
   

    function publish(){
        let titleValue = title.value;
        let categoryValue = category.value;
        let contentValue = content.value;
        if(!titleValue || !categoryValue || !contentValue){
            return;
        }
        
        createDOMElements(titleValue, categoryValue, contentValue);

        title.value = "";
        category.value = "";
        content.value = "";
       
    }

    function createDOMElements(titleValue, categoryValue, contentValue){
        let li = document.createElement("li");
        li.classList.add("rpost");

        let article = createArticle(titleValue, categoryValue, contentValue);

        let editButton = document.createElement("button");
        editButton.classList.add("action-btn");
        editButton.classList.add("edit");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", editPost);
        

        let approveButton = document.createElement("button");
        approveButton.classList.add("action-btn");
        approveButton.classList.add("approve");
        approveButton.textContent = "Approve";
        approveButton.addEventListener("click", approvePost);

        li.appendChild(article);
        li.appendChild(editButton);
        li.appendChild(approveButton);
        postsForReview.appendChild(li);

        
    }

    function editPost(e){
     
        let currentPost = e.target.parentElement;

        let articleContent = currentPost.getElementsByTagName('article')[0].children;

        let titleValue = articleContent[0].textContent;
        let categoryValue = articleContent[1].textContent;
        let contentValue = articleContent[2].textContent;

        title.value = titleValue;
        category.value = categoryValue.split(": ")[1];
        content.value = contentValue.split(": ")[1];

        currentPost.remove();
    }

    function approvePost(e){
      
        let currentPost = e.target.parentElement;
        
        uploadedPost.appendChild(currentPost);
        Array.from(currentPost.querySelectorAll("button")).forEach(btn => btn.remove())
    }

    function clearPost(e){
      
        Array.from(uploadedPost.children).forEach(li => li.remove());
        
    
    }

    function createArticle(titleValue, categoryValue, contentValue){
        let article = document.createElement("article");

        let postTitle = document.createElement("h4");
        postTitle.textContent = titleValue;
        
        let postCategory = document.createElement("p");
        postCategory.textContent = `Category: ${categoryValue}`;

        let postContent = document.createElement("p");
        postContent.textContent = `Content: ${contentValue}`;

        article.appendChild(postTitle);
        article.appendChild(postCategory);
        article.appendChild(postContent);

        return article;
    }

}