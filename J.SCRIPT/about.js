function myfunction() {
    let name =document.getElementById("Surname").value;
    let Email =document.getElementById("Email").value;
    let phone =document.getElementById("Number").value;
    let Subject =document.getElementById("Subject").value;
    let Message = document.getElementById("Message").value;
    let Adress = document.getElementById("Adress").value;
   
    if (!name.match(/^[a-zA-Z]+$/)){
        alert ("Incorrect Name")
    }
    else if (!Email.includes("@")) {
        alert ("Invalid Email ")
    }
    else if (!phone.match(/^[0-9]+$/)||phone.length < 11 || phone.length > 11) {
        alert ("Incorrect Phone Number")
    }
    else if (!Subject.match(/^[a-zA-Z]+$/)){
        alert ("Incorrect Subject")
    }
    else if (!Adress.match(/^[a-zA-Z]+$/)){
        alert("Incorrect Adress")
    }
    else if (!Message.match(/^[a-zA-Z]+$/)){
        alert ("Leave a message")
    }
    else {
        alert ("Submitted")
    }     
}
