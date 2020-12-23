
var submit_button = document.getElementById('submit_btn');
var error = document.getElementsByClassName("form-error-message");
var myForm = document.forms.form_1 ;
var form_input1 = document.getElementById("name");
var form_input2 = document.getElementById("email");

// method 1


function submission(){
    if(form_input1.value == "" || form_input2.value == ""){
        form_input1.addEventListener('blur', errValid1);
        form_input2.addEventListener('blur', errValid2);
        if(form_input1.value == "" ){
            error[0].innerHTML = "Enter Your Full Name";
            form_input1.style.borderColor = "red";
            error[0].classList.add("form-error-message2");
        }
        if(form_input2.value == ""){
            error[1].innerHTML = "Enter Email";
            form_input2.style.borderColor = "red";
            error[1].classList.add("form-error-message2");
        };
        
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
            }
        }
        function errValid2(){
            if(form_input2.value != ""){
                form_input2.style.borderColor = "#01991b";
                error[1].innerHTML = "";
                error[1].classList.remove("form-error-message2");
            }
            else{
                form_input2.style.borderColor = "red";
                error[1].innerHTML = "Enter Email";
                error[1].classList.add("form-error-message2");
            }
        }
        return false;
        
    }
    else{
        return true;
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







