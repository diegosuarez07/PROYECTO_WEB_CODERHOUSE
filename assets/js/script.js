//varibles

const email = document.getElementById("email"); 
const password = document.getElementById("password"); 
const formlogin = document.getElementById("form-login"); 
const warningEmail = document.getElementById("warning-email"); 
const warningPassword = document.getElementById("warning-password"); 
const titulo_animado = document.getElementById("titulo_animado"); 

function ingresar(){

    if((email.value =! "") && (password.value =! "")) {
        window.location = "home.html"; 
    }else{
        alert("Debe completar los campos correo electronico y password con cualquier dato para ingresar")
    }


}

window.addEventListener("DOMContentLoaded", () => {
    const btn_menu_hamburguer = document.querySelector('.btn-menu-hamburguer');
    if(btn_menu_hamburguer){
        btn_menu_hamburguer.addEventListener('click', () => {
            const navbar_menu = document.querySelector('.navbar-menu'); 
            //titulo_animado.style.display = "none";
            navbar_menu.classList.toggle('show'); 
            
        })
    }
})
