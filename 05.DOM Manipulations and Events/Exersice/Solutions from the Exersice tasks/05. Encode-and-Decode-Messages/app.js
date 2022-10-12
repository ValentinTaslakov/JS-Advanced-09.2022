function encodeAndDecodeMessages() {

    let textAreas = document.getElementsByTagName("textarea");

    let buttons = document.getElementsByTagName("button");

    buttons[0].addEventListener("click", ()=>{
        let message = textAreas[0].value;
        let encodedMessage = "";
        
        for(let i = 0; i < message.length; i++){
            let currentAscii = message.charCodeAt(i) + 1;
            encodedMessage += String.fromCharCode(currentAscii);
        }

        textAreas[1].value = encodedMessage;
        textAreas[0].value = "";
    });

    buttons[1].addEventListener("click", () => {
       
        let encodedMessage = textAreas[1].value;
        let decodedMessage = "";
        
        for(let i = 0; i < encodedMessage.length; i++){
            let currentAscii = encodedMessage.charCodeAt(i) - 1;
            decodedMessage += String.fromCharCode(currentAscii);
        }

        textAreas[1].value = decodedMessage;
    });
}