function verifyform() {
    var Message = document.forms["mforms"]["Message"].value;
    if (Message == "")
    {
    alert("Input Message");
    return false;
    }

    var CC = document.forms["mforms"]["CC"].value;
    if (CC == "")
    {
    alert("Input CC");
    return false;
    }

    var lname = document.forms["mforms"]["lname"].value;
    if (lname == "")
    {
    alert("Input Last Name");
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
        alert("Please confirm if you want to send without header");
        return false;
    }
}


