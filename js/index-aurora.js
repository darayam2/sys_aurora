let btnOpenPopUser = document.getElementById("btn-user-help")
let contPopUser = document.getElementById("c-modal-user-help")
let popUpUser = document.getElementById("pop-user-help")
let btnClosePopUser = document.getElementById("btn-close-pop-user-help")
let btnCancelPopUser = document.getElementById("btn-cancel-pop-user-help")

let btnOpenPopPass = document.getElementById("btn-pass-help")
let contPopPass = document.getElementById("c-modal-pass-help")
let popUpPass = document.getElementById("pop-pass-help")
let btnClosePopPass = document.getElementById("btn-close-pop-pass-help")
let btnCancelPopPass = document.getElementById("btn-cancel-pop-pass-help")

let tabLogin = document.getElementById("tab-login")
let tabSignUp = document.getElementById("tab-signup")
let formLogin = document.getElementById("c-login")
let formSignUp = document.getElementById("c-signup")

let inputUser = document.getElementById("in-user")
let inputPass = document.getElementById("in-pass")
let btnInitSession = document.getElementById("btn-init-session")
let loginHelp = document.getElementById("c-login-help")
let helpTip = document.getElementById("help-tip")

let btnOpenPopRemUser = document.getElementById("btn-ok-pop-user-help")
let contPopRemUser = document.getElementById("c-modal-rem-user")
let popRemPopUpUser = document.getElementById("pop-rem-user")
let btnCancelRemPopUpUser = document.getElementById("btn-cancel-pop-rem-user")
let btnCloseRemUpUser = document.getElementById("btn-close-pop-rem-user")

let inSmsCodeGroup = document.querySelectorAll(".in-code")
let inSmsCode1 = document.getElementById("input1")

const expresiones = {
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    number: /^[0-9]/
}

pattern="^[0-9]+"

inSmsCodeGroup.forEach((input, index) => {
    input.addEventListener("keyup", (e)=>{
        console.log(parseInt(input))
        if (e.key === "-" || input.value.search(expresiones.number) !=0 || input.value > 9){
            input.value=""
        }
        if(input.value.length != 0){
            console.log("Indice actual:",index,"Valor: ",parseInt(input.value))
            inSmsCodeGroup[index+1].focus()
        }else if(input.value.length == 0){
            console.log("Vacio")
            inSmsCodeGroup[index-1].focus()
        }
    })
});

btnOpenPopUser.addEventListener('click', function(){
    contPopUser.classList.add("active")
    popUpUser.classList.add("active")
})

btnClosePopUser.addEventListener('click',function(){
    contPopUser.classList.remove("active")
    popUpUser.classList.remove("active")
})

btnCancelPopUser.addEventListener('click',function(){
    contPopUser.classList.remove("active")
    popUpUser.classList.remove("active")
})

btnOpenPopRemUser.addEventListener('click', function(){
    contPopRemUser.classList.add("active")
    popRemPopUpUser.classList.add("active")
    contPopUser.classList.remove("active")
    popUpUser.classList.remove("active")
})

btnCancelRemPopUpUser.addEventListener('click', function(){
    contPopRemUser.classList.remove("active")
    popRemPopUpUser.classList.remove("active")
})

btnCloseRemUpUser.addEventListener('click', function(){
    contPopRemUser.classList.remove("active")
    popRemPopUpUser.classList.remove("active")
})

btnOpenPopPass.addEventListener('click', function(){
    contPopPass.classList.add("active")
    popUpPass.classList.add("active")
})

btnClosePopPass.addEventListener('click',function(){
    contPopPass.classList.remove("active")
    popUpPass.classList.remove("active")
})

btnCancelPopPass.addEventListener('click',function(){
    contPopPass.classList.remove("active")
    popUpPass.classList.remove("active")
})

tabLogin.addEventListener('click', function(){
    tabLogin.classList.remove("moved")
    tabSignUp.classList.remove("moved")
    formLogin.classList.remove("inactive")
    formSignUp.classList.remove("inactive")
})

tabSignUp.addEventListener('click', function(){
    tabSignUp.classList.add("moved")
    tabLogin.classList.add("moved")
    formLogin.classList.add("inactive")
    formSignUp.classList.add("inactive")
})

inputUser.addEventListener('click', function(){
    helpTip.classList.remove("active")
})

inputPass.addEventListener('click', function(){
    helpTip.classList.remove("active")
})

btnInitSession.addEventListener("click",()=>{
    if(inputUser.value == "" && inputPass.value == ""){
        helpTip.classList.add("active")
        helpTip.textContent = "Debes ingresar el usuario y la contraseña"
    }
    else if(inputUser.value == "" && inputPass.value != "")
    {
        alert("Debes ingresar el usuario")
        helpTip.classList.add("active")
        helpTip.textContent = "Debes ingresar el usuario"
    }
    else if(inputUser.value != "" && inputPass.value == ""){
        helpTip.classList.add("active")
        helpTip.textContent = "Debes ingresar la contraseña"
    }
})



