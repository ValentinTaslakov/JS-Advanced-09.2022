function notify(message) {

  let notificationDiv = document.getElementById("notification");
  notificationDiv.addEventListener("click", hideMessage)
  notificationDiv.textContent = message;
  notificationDiv.style.display = "block";

  function hideMessage(){
    notificationDiv.style.display = "none";
  }

}