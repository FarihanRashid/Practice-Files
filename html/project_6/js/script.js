
var submit_button = document.getElementById('submit_btn');
var error = document.getElementsByClassName("form-error-message");
var myForm = document.forms.form_1 ;
var form_input1 = document.getElementById("name");
var form_input2 = document.getElementById("email");
var genderBtn = document.querySelectorAll(".gender");
var messageBox = document.querySelector("#message-box");
var password = document.querySelector("#password");
var passwordCopy = document.querySelector("#password-copy");
var upper = /[A-Z]/;
var lower = /[a-z]/;
var specialChar = /[#,*,&]/;
var num = /[0-9]/;
var minChar = password.value.length < 8;
var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


function submission(){
    function errValid1(){
        if(form_input1.value != ""){
            form_input1.style.borderColor = "#01991b";
            error[0].innerHTML = "";
            error[0].classList.remove("form-error-message2");
        }
        else{
            form_input1.style.borderColor = "red";
            error[0].innerHTML = "Enter Your Full Name";
            error[0].classList.add("form-error-message2");
            form_input1.focus();
        }
    }
    function errValid2(){
        if(form_input2.value != ""){
            form_input2.style.borderColor = "#01991b";
            error[1].innerHTML = "";
            error[1].classList.remove("form-error-message2");
            if(emailRegex.test(form_input2.value)){
                form_input2.style.borderColor = "#01991b";
                error[1].innerHTML = "";
                error[1].classList.remove("form-error-message2");
            }
            else if(!emailRegex.test(form_input2.value)){
                form_input2.style.borderColor = "red";
                error[1].innerHTML = "Enter appropriate Email";
                error[1].classList.add("form-error-message2");
                form_input2.focus();
            };
        }
        else if(form_input2.value == ""){
            form_input2.style.borderColor = "red";
            error[1].innerHTML = "Enter Email";
            error[1].classList.add("form-error-message2");
            form_input2.focus();
        };
        
    }
    form_input1.addEventListener('blur', errValid1);
    form_input2.addEventListener('blur', errValid2);
    if(form_input1.value == "" ){
        error[0].innerHTML = "Enter Your Full Name";
        form_input1.style.borderColor = "red";
        error[0].classList.add("form-error-message2");
        return false;
    };
    if(form_input2.value == ""){
        error[1].innerHTML = "Enter Email";
        form_input2.style.borderColor = "red";
        error[1].classList.add("form-error-message2");
        return false;
    }
    else if(!emailRegex.test(form_input2.value)){
        error[1].innerHTML = "Enter appropriate Email";
        form_input2.style.borderColor = "red";
        error[1].classList.add("form-error-message2");
        return false;
    };
    if(password.value == ''){
        error[2].innerHTML = "Enter Password";
        password.style.borderColor = "red";
        error[2].classList.add("form-error-message2");
        if(!passwordCopy.value == ''){
            error[2].innerHTML = "Enter Password First";
            form_input2.style.borderColor = "red";
            error[2].classList.add("form-error-message2");
        };
        return false;
    }
    else{
        error[2].innerHTML = "";
        error[2].classList.remove("form-error-message2");
    };
    
    if(!upper.test(password.value) || !lower.test(password.value) || !specialChar.test(password.value) || !num.test(password.value) || !minChar){
        error[2].innerHTML = "Password must contain UpperCase!" + "<br>"+" LowerCase! Numbers!" + "<br>"+" Special Character and " + "<br>"+"Minimum 8 Character";
        password.style.borderColor = "red";
        error[2].classList.add("form-error-message2");
        password.focus();
        return false;
    }
    else{
        error[2].innerHTML ="";
        error[2].classList.remove("form-error-message2");
        password.style.borderColor = "#01991b";
    };
    if(password.value != passwordCopy.value){
        error[3].innerHTML = "Password does not match!";
        passwordCopy.style.borderColor = "red";
        error[3].classList.add("form-error-message2");
        passwordCopy.focus();
        return false;
    }
    else{
        error[3].innerHTML = "";
        error[3].classList.remove("form-error-message2");
        passwordCopy.style.borderColor = "#01991b";
    };
    if(messageBox.value == ''){
        error[5].innerHTML = "Enter a message";
        error[5].classList.add("form-error-message2");
        return false;
    }
    else if(messageBox.value.length < 10 || messageBox.value.length > 50){
        error[5].innerHTML = "Enter a message between 10 and 50 words";
        messageBox.style.borderColor = "red";
        error[5].classList.add("form-error-message2");
        messageBox.focus();
        return false;
    }
    else{
        error[5].innerHTML = "";
        messageBox.style.borderColor = "01991b";
        error[5].classList.remove("form-error-message2");
    };
    function genderValidate(){
        var formValid = false;
        var i = 0;
        while (!formValid && i < genderBtn.length) {
            if (genderBtn[i].checked){
                formValid = true;
            }
            i++;        
        };
        if(!formValid){
            error[4].innerHTML = "Must check some option";
            error[4].classList.add("form-error-message2");
            return false;
        }
        else{
            error[4].innerHTML = "";
            error[4].classList.remove("form-error-message2");
            return formValid;
        };
    }
    genderValidate();
    
}
function showpass1(){
    if(password.type == 'password'){
        password.type = 'text';
    }
    else {
        password.type = 'password';
    };

}
function showpass2(){
    if(passwordCopy.type == 'password'){
        passwordCopy.type = 'text';
    }
    else {
        passwordCopy.type = 'password';
    };

}


// method 2 


// myForm.onsubmit = function(){
//     if(form_input1.value == "" || form_input2.value == ""){
//         form_input1.addEventListener('blur', errValid1);
//         form_input2.addEventListener('blur', errValid2);
//         if(form_input1.value == "" ){
//             error[0].innerHTML = "Enter Your Full Name";
//             form_input1.style.borderColor = "red";
//             error[0].classList.add("form-error-message2");
//         }
//         if(form_input2.value == ""){
//             error[1].innerHTML = "Enter Email";
//             form_input2.style.borderColor = "red";
//             error[1].classList.add("form-error-message2");
//         };
        
//         function errValid1(){
//             if(form_input1.value != ""){
//                 form_input1.style.borderColor = "#01991b";
//                 error[0].innerHTML = "";
//                 error[0].classList.remove("form-error-message2");
//             }
//             else{
//                 form_input1.style.borderColor = "red";
//                 error[0].innerHTML = "Enter Your Full Name";
//                 error[0].classList.add("form-error-message2");
//             }
//         }
//         function errValid2(){
//             if(form_input2.value != ""){
//                 form_input2.style.borderColor = "#01991b";
//                 error[1].innerHTML = "";
//                 error[1].classList.remove("form-error-message2");
//             }
//             else{
//                 form_input2.style.borderColor = "red";
//                 error[1].innerHTML = "Enter Email";
//                 error[1].classList.add("form-error-message2");
//             }
//         }
//         return false;
        
//     }
//     else{
//         return true;
//     };
// }




// // validate error

// function errValid1(){
//     if(form_input1.value != ""){
//         form_input1.style.borderColor = "#01991b";
//            error[0].innerHTML = "";
//            error[0].classList.remove("form-error-message2");
//     }
//     else{
//         form_input1.style.borderColor = "red";
//         error[0].innerHTML = "Enter Your Full Name";
//     }
// }
// function errValid2(){
//     if(form_input2.value != ""){
//         form_input2.style.borderColor = "#01991b";
//         error[1].innerHTML = "";
//            error[1].classList.remove("form-error-message2");
//     }
//     else{
//         form_input2.style.borderColor = "red";
//         error[1].innerHTML = "Enter Email";
//     }
// }

// form_input1.addEventListener('blur', errValid1);
// form_input2.addEventListener('blur', errValid2);







