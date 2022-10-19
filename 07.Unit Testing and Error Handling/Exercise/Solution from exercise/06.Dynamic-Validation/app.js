function validate() {
    
    let email = document.getElementById("email");

    const pattern = /([a-z]+@[a-z]+.[a-z]+)/;

    email.addEventListener('change', changing);

    function changing (){
        if(!email.value.match(pattern)){
   
            email.classList.add('error');
            return;
        }
    
        email.classList.remove('error');
    }
} 