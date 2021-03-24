document.addEventListener('DOMContentLoaded', (event) => {
  if (invalidUsername.innerText != "") {
    document.getElementById("usernameInput").style.borderColor = "red";
    document.getElementById("usernameInput").style.animation = "shake 0.5s";
  }
  if (invalidPassword.innerText != "") {
    document.getElementById("passwordInput").style.borderColor = "red";
    document.getElementById("passwordInput").style.animation = "shake 0.5s";
  }
  const form = document.getElementById("login_form");
  document.getElementById("login_button").addEventListener("click", (event) => {
    if (invalidUsername.innerText != "") {
      invalidUsername.innerText = "Username field cannot be empty.";
    }
    if (invalidPassword.innerText != "") {
      invalidPassword.innerText = "Password field cannot be empty.";
    }
  })
})

