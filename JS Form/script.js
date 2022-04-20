var attempt = 3;

function CheckUser() {
    var username = document.getElementById("username").value;
    var userElement = document.getElementById("username");
    var userLabel = document.getElementById("username-label");
    if (username == "new_user") {
        userElement.style.color = '#54d154';
        userLabel.style.color = '#54d154';

        userElement.style.border = '1px solid #54d154';

        document.getElementById("user-checkmark").style.opacity = '1';
        document.getElementById("user-xmark").style.opacity = '0';
    } else {
        userElement.style.color = '#ff0000';
        userLabel.style.color = '#ff0000';

        userElement.style.border = '1px solid #ff0000';

        document.getElementById("user-checkmark").style.opacity = '0';
        document.getElementById("user-xmark").style.opacity = '1';
    }
}

function CheckPassword() {
    var password = document.getElementById("password").value;
    var passwordElement = document.getElementById("password");
    var passwordLabel = document.getElementById("password-label");

    if (password == "12345678") {
        passwordElement.style.color = '#54d154';
        passwordLabel.style.color = '#54d154';

        passwordElement.style.border = '1px solid #54d154';

        document.getElementById("password-checkmark").style.opacity = '1';
        document.getElementById("password-xmark").style.opacity = '0';
    } else {
        passwordElement.style.color = '#ff0000';
        passwordLabel.style.color = '#ff0000';

        passwordElement.style.border = '1px solid #ff0000';

        document.getElementById("password-checkmark").style.opacity = '0';
        document.getElementById("password-xmark").style.opacity = '1';
    }
}

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "new_user" && password == "12345678") {
        alert("Login successfully");
        attempt = 3;
        window.location = "main.html";
        return false;
    }
    else {
        attempt--;
        alert("You have left " + attempt + " attempt;");
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}