function SendInfo() {
    let user_name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let cellphone = document.getElementById("cellphone-number").value;
    let e_mail = document.getElementById("e-mail-address").value;
    let date = document.getElementById("date-of-birth").value;
    let house = document.getElementById("house-address").value;

    if (user_name.length == 0) {
        alert("information is required")
    }
    else if (surname.length == 0) {
        alert("information is required")
    }

    else if (cellphone.length == 0) {
        alert("information is required")
    }
    else if (e_mail.length == 0) {
        alert("information is required")
    }
    else if (date.length == 0) {
        alert("information is required")
    }
    else if (house.length == 0) {
        alert("information is required")
    }
    else {
        alert(`${user_name} details sent successfully`)
    }
}