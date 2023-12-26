var signupNameEl = document.getElementById("signupName");
var signupEmailEl = document.getElementById("signupEmail");
var signupPasswordEl = document.getElementById("signupPassword");

var userInfo;

if(localStorage.getItem("users") == null){
    userInfo = [];
}else{
    userInfo = JSON.parse(localStorage.getItem("users"));
}
// function to signup
function signUp(){
    userInputValidation();
    isExist();
    if(userInputValidation == true && isExist == frameElement){
        var user = {
            name:signupNameEl.value,
            email:signupEmailEl.vaule,
            password:signupPasswordEl.value,
        };
        userInfo.push(user);
        localStorage.setItem("users" , JSON.stringify(userInfo));

        var confirmMsg = document.getElementById("confirmMsg");
        confirmMsg.classList.replace("d-none" ,"d-block");

        var signin = document.getElementById("signin");
        signin.classList.replace("d-none" ,"d-block");
    }
    else{
        var tryAgainMsg = document.getElementById("tryAgainMsg");
        tryAgainMsg.classList.replace("d-none" ,"d-block");
    }
    
}

// function to validate username
function usernameValidation(){

    var usernameAlert = document.getElementById("usernameAlert");

    var regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/;

    if(regex.test(signupNameEl.value) == true && signupNameEl.value != null){
        signupNameEl.classList.add("is-valid");
        signupNameEl.classList.remove("is-invalid");
        usernameAlert.classList.replace("d-block","d-none" );
        return true;
    }
    else{
        signupNameEl.classList.add("is-invalid");
        signupNameEl.classList.remove("is-valid");
        usernameAlert.classList.replace("d-none","d-block" );
        return false;
    }
}

// function to validate password
function userPasswordValidation(){

    var userPasswordAlert = document.getElementById("userPasswordAlert");

    var regex = /^.{5,15}$/;

    if(regex.test(signupPasswordEl.value) == true && signupPasswordEl.value != null){
        signupPasswordEl.classList.add("is-valid");
        signupPasswordEl.classList.remove("is-invalid");
        userPasswordAlert .classList.replace("d-block","d-none" );
        return true;
    }
    else{
        signupPasswordEl.classList.add("is-invalid");
        signupPasswordEl.classList.remove("is-valid");
        userPasswordAlert.classList.replace("d-none","d-block" );
        return false;
    }
}

// function to validate email
function userEmailValidation(){

    var userEmailAlert = document.getElementById("userEmailAlert");

    var regex =/@[a-z]{5,10}(\.com)$/;

    if(regex.test(signupEmailEl.value) == true && signupEmailEl.value != null){
        signupEmailEl.classList.add("is-valid");
        signupEmailEl.classList.remove("is-invalid");
        userEmailAlert .classList.replace("d-block","d-none" );
        return true;
    }
    else{
        signupEmailEl.classList.add("is-invalid");
        signupEmailEl.classList.remove("is-valid");
        userEmailAlert.classList.replace("d-none","d-block" );
        return false;
    }
}



// function to validate
function userInputValidation(){
    usernameValidation();
    userPasswordValidation();
    userEmailValidation();
    
    if(usernameValidation() == true && userPasswordValidation() == true && userPasswordValidation() == true){
        return true;
    }
    else{
        return false;
    }
}

// function to exist
function isExist(){
    var accountExistMsg = document.getElementById("accountExistMsg");
    
    for(var i=0; i< userInfo.lenght; i++)
    if(userInfo[i].name.toLowerCase() == signupNameEl.value.toLowerCase() || 
        userInfo[i].email.toLowerCase() == signupEmailEl.value.toLowerCase()){
            accountExistMsg.classList.replace("d-none","d-block" );
            return true;
    }
    else{
        return false;
    }
} 


var username = localStorage.getItem("sessionUsername");

// function to login
function login(){
    var signinEmail = document.getElementById("signinEmail");
    var signinPassword = document.getElementById("signinPassword");
    var loginBtn = document.getElementById("loginBtn");
    var wrongMsg = document.getElementById("wrongMsg");

    if(signinEmail.value == "" || signinPassword.value == ""){
        var fillMsg = document.getElementById("fillMsg");
        fillMsg.classList.replace("d-none","d-block" );
        return false;
    }
    for(var i=0; i<userInfo.lenght; i++ ){

        if(userInfo[i].email.toLowerCase() == signinEmail.value.toLowerCase() &&
            userInfo[i].password.toLowerCase() == signinPassword.value.toLowerCase()){
                localStorage.setItem("sessionUsername",userInfo[i].name);
                loginBtn.setAttribute("href", "welcome.html");
        }
        else{
            wrongMsg.classList.replace("d-none","d-block" );
        }            
    }
}


function displayWelcomeUser(){
    document.getElementById("username").innerHTML  = "Welcome "+ username;
}

function logout(){
    localStorage.removeItem("sessionUsername");
}