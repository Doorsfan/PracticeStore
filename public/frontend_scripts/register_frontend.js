//const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
//const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const emailRegex = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
let passwordOK = false;
let usernameOK = false;
let emailOK = false;
let confirmedpasswordOK = false;

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("usernameYorN").hidden = true;
  document.getElementById("register_button").disabled = true;
  if (document.getElementById("usernameYorNtext").value !== undefined) {
    document.getElementById("usernameYorNtext").style.border = "1px";
    document.getElementById("usernameYorNtext").style.borderColor = "black";
    
  }

  document.getElementById("confirmpasswordInput").addEventListener("input", (event) => {
    if (document.getElementById("passwordInput").value
      === document.getElementById("confirmpasswordInput").value) {
      document.getElementById("confirmpasswordInput").style.borderColor = "green";
      document.getElementById("confirmpasswordYorNtext").innerText = "Passwords match up.";
      document.getElementById("confirmpasswordYorNtext").style.backgroundColor = "lightseagreen";
      document.getElementById("confirmpasswordYorNtext").style.borderColor = "black";
      document.getElementById("confirmpasswordYorN").src = "/images/green.png";
      
      confirmedpasswordOK = true;
      if (passwordOK && usernameOK && emailOK && confirmedpasswordOK) {
        document.getElementById("register_button").disabled = false;
      }
    }
    else {
      document.getElementById("confirmpasswordInput").style.borderColor = "red";
      document.getElementById("confirmpasswordYorNtext").innerText = "Passwords do not match up.";
      document.getElementById("confirmpasswordYorNtext").style.backgroundColor = "red";
      document.getElementById("confirmpasswordYorNtext").style.borderColor = "black";
      document.getElementById("confirmpasswordYorN").src = "/images/red.png";

      confirmedpasswordOK = false;
    }
  })
  document.getElementById("passwordInput").addEventListener("input", (event) => {
    document.getElementById("passwordInput").value = document.getElementById("passwordInput").value.replaceAll(/[\W_]+/g, "");
    if (document.getElementById("passwordInput").value.length > 5
      && document.getElementById("passwordInput").value.length < 15) {
      document.getElementById("passwordInput").style.borderColor = "green";
      document.getElementById("passwordYorNtext").innerText = "Password is Valid.";
      document.getElementById("passwordYorNtext").style.backgroundColor = "lightseagreen";
      document.getElementById("passwordYorNtext").style.borderColor = "black";
      document.getElementById("passwordYorN").src = "/images/green.png";

      passwordOK = true;
      if (passwordOK && usernameOK && emailOK && confirmedpasswordOK) {
        document.getElementById("register_button").disabled = false;
      }
    }
    else {
      document.getElementById("passwordInput").style.borderStyle = "groove";
      document.getElementById("passwordInput").style.borderColor = "red";
      document.getElementById("passwordYorN").src = "/images/red.png";
      document.getElementById("passwordYorNtext").innerText = "Password has to be 6-14 letters long - Alphanumerical letters only.";
      document.getElementById("passwordYorNtext").style.backgroundColor = "red";
      document.getElementById("passwordYorNtext").style.borderColor = "black";

      passwordOK = false;
    }
    if (document.getElementById("confirmpasswordInput").value !== document.getElementById("passwordInput").value) {
      document.getElementById("confirmpasswordInput").style.borderColor = "red";
      document.getElementById("confirmpasswordYorNtext").innerText = "Passwords do not match up.";
      document.getElementById("confirmpasswordYorNtext").style.backgroundColor = "red";
      document.getElementById("confirmpasswordYorNtext").style.borderColor = "black";
      document.getElementById("confirmpasswordYorN").src = "/images/red.png";

      confirmedpasswordOK = false;
    }
    else {
      document.getElementById("confirmpasswordInput").style.borderColor = "green";
      document.getElementById("confirmpasswordYorNtext").innerText = "Passwords match up.";
      document.getElementById("confirmpasswordYorNtext").style.backgroundColor = "lightseagreen";
      document.getElementById("confirmpasswordYorNtext").style.borderColor = "black";
      document.getElementById("confirmpasswordYorN").src = "/images/green.png";


      confirmedpasswordOK = true;
    }
  })
  document.getElementById("emailInput").addEventListener("input", (event) => {
    var check = emailRegex.test(document.getElementById("emailInput").value);
    if (check) {
      document.getElementById("emailInput").style.borderColor = "green";
      document.getElementById("emailYorNtext").innerText = "E-mail is Valid.";
      document.getElementById("emailYorNtext").style.backgroundColor = "lightseagreen";
      document.getElementById("emailYorNtext").style.borderColor = "black";
      document.getElementById("emailYorN").src = "/images/green.png";


      emailOK = true;
      if (passwordOK && usernameOK && emailOK && confirmedpasswordOK) {
        document.getElementById("register_button").disabled = false;
      }
      /*
      if(document.getElementById("usernameInput").value.length >= 8 &&
          document.getElementById("usernameInput").value.length <= 13){
              document.getElementById("register_button").disabled = false;
      } */
    }
    else {
      document.getElementById("emailInput").style.borderStyle = "groove";
      document.getElementById("emailInput").style.borderColor = "red";
      document.getElementById("emailYorN").src = "/images/red.png";
      document.getElementById("emailYorNtext").innerText = "E-mail is not in valid format.";
      document.getElementById("emailYorNtext").style.backgroundColor = "red";
      document.getElementById("emailYorNtext").style.borderColor = "black";

      emailOK = false;
    }
  })
  document.getElementById("usernameInput").addEventListener("input", (event) => {
    document.getElementById("usernameYorN").hidden = false;
    if (document.getElementById("usernameInput").value.length < 8 ||
      document.getElementById("usernameInput").value.length > 13) {
      document.getElementById("usernameInput").style.borderStyle = "groove";
      document.getElementById("usernameInput").style.borderColor = "red";
      document.getElementById("usernameYorN").src = "/images/red.png";
      document.getElementById("usernameYorNtext").innerText = "Username must be between 8-13 chars long.";
      document.getElementById("usernameYorNtext").style.backgroundColor = "red";
      document.getElementById("usernameYorNtext").style.borderColor = "black";

      usernameOK = false;
    }
    else {
      document.getElementById("usernameInput").style.borderColor = "green";
      document.getElementById("usernameYorNtext").innerText = "Username is Valid.";
      document.getElementById("usernameYorNtext").style.backgroundColor = "lightseagreen";
      document.getElementById("usernameYorNtext").style.borderColor = "black";
      document.getElementById("usernameYorN").src = "/images/green.png";

      usernameOK = true;
      if (passwordOK && usernameOK && emailOK && confirmedpasswordOK) {
        document.getElementById("register_button").disabled = false;
      }
    }
  })
})