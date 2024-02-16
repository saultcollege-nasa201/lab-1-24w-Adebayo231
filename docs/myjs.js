function verifyform() {
    var Message = document.forms["mforms"]["Message"].value;
    if (Message == "")
    {
        document.getElementById("MessageError").textContent = "!Please input Message";;
    return false;
    }

    var CC = document.forms["mforms"]["CC"].value;
    if (CC == "")
    {
    document.getElementById("emailError").textContent = "!Please input CC";
    return false;
    }

    var lname = document.forms["mforms"]["lname"].value;
    if (lname == "")
    {
        document.getElementById("lnameError").textContent = "!Please input Last Name";;
    return false;
    }

    var radioButtons = document.getElementsByName("fav_language");
    var isChecked = false;
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            isChecked = true;
            break;
        }
    }
    if (!isChecked) {
        document.getElementById("ButtonError").textContent = "!Please select";;
        return false;
    }
}


