//Validation code for inputs

var email=document.forms['form']['email'];
var password=document.forms['form']['password'];

var email_error =document.getElementById('email-error');
var pass_error =document.getElementById('pass-error');

email.addEventListener('textInput', email_Varify);
password.addEventListener('textInput', email_Varify);

function validation(){
    if(email.value.length<9){
        email.style.border="1px solid red";
        email_error.style.display = "block";
        email-focus();
        return false;

    }
    if(password.value.length<6){
        email.style.border="1px solid red";
        pass_error.style.display = "block";
        password-focus();
        return false;
    }
}
    function email_Varify(){
        if(email.value.length >=8) {
            email.style.border="1px solid red";
            email_error.style.display="none";
            return true;
        }
    }