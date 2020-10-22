
var submit = document.querySelector("#submit");

var Num = document.querySelector("#num");
var Cap = document.querySelector("#cap-alpha");
var Special = document.querySelector("#special-char");
var Length = document.querySelector("#char-8");

var username = document.querySelector("#username");
var password = document.querySelector("#password");
var hide_logo = document.querySelector("#pass_logo");

hide_logo.addEventListener("click",function(){
    if(password.type == "password")
    {
        password.type = "text";
        hide_logo.classList.add("far","fa-eye-slash");
    }
    else
    {
        password.type = "password";
        hide_logo.classList.remove("fa-eye-slash");
    }
});

password.addEventListener("input",valid_inValid);

function valid_inValid()
{    
    
    var capital = password.value.match(/[A-Z]/);
    var number = password.value.match(/[0-9]/);
    var special = password.value.match(/[@#$&]/);
    var length = password.value.length;

    if(capital != null)
    {
        Cap.style.color = "#27ae60";
        document.querySelector("#check_Cap").classList.remove("fa-times-circle");
    }
    if(number != null)
    {
        Num.style.color = "#27ae60";
        document.querySelector("#check_Num").classList.remove("fa-times-circle");
    }
    if(special != null)
    {
        Special.style.color = "#27ae60";
        document.querySelector("#check_Sp").classList.remove("fa-times-circle");
    }
    if(length > 7)
    {
        Length.style.color = "#27ae60";
        document.querySelector("#check_M8").classList.remove("fa-times-circle");
    }
}

submit.addEventListener("click",function(){
    
    var capital = password.value.match(/[A-Z]/);
    var number = password.value.match(/[0-9]/);
    var special = password.value.match(/[@#$&]/);
    var length = password.value.length;

    if(capital == null || number == null || special == null || length < 8)
    {
        if(capital == null)
        {
            Cap.style.color = "#c0392b";
            document.querySelector("#check_Cap").classList.add("far","fa-times-circle");
        }
        if(number == null)
        {
            Num.style.color = "#c0392b";
            document.querySelector("#check_Num").classList.add("far","fa-times-circle");
        } 
        if(special == null)
        {
            Special.style.color = "#c0392b";
            document.querySelector("#check_Sp").classList.add("far","fa-times-circle");
        }
        if(length < 8)
        {
            Length.style.color = "#c0392b";
            document.querySelector("#check_M8").classList.add("far","fa-times-circle");
        }
    }
    else
    {
        if(username.value == "")
        {
            alert("Enter Username");
        }
        else
        {
            alert("Password has been Set Succesfully !!");
            username.value = "";
            password.value = "";
            Cap.style.color = "#b2bec3";
            Num.style.color = "#b2bec3";
            Special.style.color = "#b2bec3";    
            Length.style.color = "#b2bec3";
        }
    }
});