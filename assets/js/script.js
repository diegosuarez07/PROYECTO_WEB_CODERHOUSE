//varibles

const email = document.getElementById("email"); 
const password = document.getElementById("password"); 
const formlogin = document.getElementById("form-login"); 
const warningEmail = document.getElementById("warning-email"); 
const warningPassword = document.getElementById("warning-password"); 

function ingresar(){

    if((email.value =! "") && (password.value =! "")) {
        window.location = "home.html"; 
    }else{
        alert("Debe completar los campos correo electronico y password con cualquier dato para ingresar")
    }


}


