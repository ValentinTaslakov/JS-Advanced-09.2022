function focused() {
    //console.log('TODO:...');
    let inputs = document.getElementsByTagName('input');
    //ваимаме всички елементи с име на тага input
    for (const input of inputs) {
        //тези елементи са в масив и на всеки елемент 
        //добавяме тези евенти долу
        input.addEventListener('focus', focusInput);
        //focus реагира когато елемента в взет на фокус в случая 
        //когато кликнем на полето за да въведем данни
        input.addEventListener('blur', blurInput);
        //blur реагира КОГАТО ЕЛЕМЕНТА загуби фокус или в случая
        // когато кликнем другаде и по този начин фокусираме друг обект
    }

    function focusInput(event){
        event.target.parentElement.classList.add('focused');
        //когато кликнем да пишем в полето трябва да оцветим външния 
        //елемент за да покажем къде е фокуса за това използваме
        //event.target.parentElement.classList.add('focused') 
        //което към листа с атрибути на парент тага добавя нов 
        //атрибут който активира код в CSS който прави оцветяването
    }

    function blurInput(event){
        event.target.parentElement.classList.remove('focused');
        //тук премахваме този атрибут и парент тага(това е тага във който се 
        //намира тага където сме кликнали) си връща другото оцветяване 
    }
}