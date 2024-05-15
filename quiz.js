function displayWelcome() {
    var username = document.getElementById("username").value;
    var welcomeMessage = document.getElementById("welcomeMessage");
    
    if(username.trim() !== "") {
      welcomeMessage.innerHTML = "Welcome, Mr./Ms. " + username + "!";
    } else {
      welcomeMessage.innerHTML = "Please enter your name!";
    }
  }