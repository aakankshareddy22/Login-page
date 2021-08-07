
var user=document.forms['form']['user'];
var pass=document.forms['form']['pass'];

var username_error=document.getElementById('username_error');
var pass_error=document.getElementById('pass_error');

user.addEventListener('textInput', user_Verify);
pass.addEventListener('textInput', user_Verify);

function validated(){



    if(user.value.length < 9) {
        user.style.border = "1px solid red";
        username_error.style.display = "block";
        user.focus();
        return false;
    }
    if(pass.value.length < 6) {
        pass.style.border = "1px solid red";
        pass_error.style.display = "block";
        pass.focus();
        return false;
    }
   
}
function user_Verify(){
    if(user.value.length >= 8) {
        user.style.border = "1px solid silver";
        username_error.style.display = "none";
        return true;
    }
}
function pass_Verify(){
    if(pass.value.length >= 5) {
        pass.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}