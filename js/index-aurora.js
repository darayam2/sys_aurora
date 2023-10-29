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

let remUserOkBtn = document.getElementById("btn-ok-pop-rem-user")
let popCodSMS = document.getElementById("c-cod-sms")

/* BEGIN Registration form Variables */
let selectTypeIdRegForm = document.getElementById("type-id")
let inputIdRegForm = document.getElementById("in-id")
let inputNameRegForm = document.getElementById("in-name")
let inputLastRegForm = document.getElementById("in-last")
let inputMailRegForm = document.getElementById("in-mail")
let inputPass1RegForm = document.getElementById("in-pass1")
let inputPass2RegForm = document.getElementById("in-pass2")
let selectQuestionRegForm = document.getElementById("question")
let inputAnswerRegForm = document.getElementById("in-answer")
let inputTelRegForm = document.getElementById("in-tel")
let btnSubmitRegForm = document.getElementById("btn-submit-signup")
let btnCancelRegForm = document.getElementById("btn-reset-signup")
let helpTipSignup = document.getElementById("help-tip-registration")
/* END Registration form Variables */

/* BEGIN Consumo API*/
url = 'https://jsonplaceholder.typicode.com/users'
let userData = []
fetch(url)
    .then(data=>data.json())
    .then(data=>{
        data.forEach((item)=>{
            userData.push(item)
        })
    .catch(error=>console.log("Error encontrado:",error))
})
console.log(userData)


/* END Consumo API*/

/* BEGIN registration form help buttons actions*/
const btnsHelpRegForm = document.getElementsByClassName("icon-help")
for(let i=0; i< btnsHelpRegForm.length; i++){
    btnsHelpRegForm[i].addEventListener('click', function(){
        switch(i){
            case 2:
                helpTipSignup.classList.add("active")
                helpTipSignup.textContent="Ingresa tu tipo y número de identificación"
                break
            case 3:
                helpTipSignup.classList.add("active")
                helpTipSignup.textContent="Ingresa tu(s) nombre(s)"
                break
            case 4:
                helpTipSignup.classList.add("active")
                helpTipSignup.textContent="Ingresa tu(s) apellido(s)"
                break
            case 5:
                helpTipSignup.classList.add("active")
                helpTipSignup.textContent="Ingresa tu correo electrónico"
                break
            case 6:
                helpTipSignup.classList.add("active")
                helpTipSignup.textContent="Ingresa una contraseña con al menos 8 caracteres, una mayúscula, una minúscula, al menos un caracter especial y al menos un número"
                break
            case 7:
                helpTipSignup.classList.add("active")
                helpTipSignup.textContent="Ingresa la misma contraseña para confirmarla"
                break
            case 8:
                helpTipSignup.classList.add("active")
                helpTipSignup.textContent="Selecciona una de las preguntas. Si olvidas tu usuario, servirá para recuperarlo"
                break
            case 9:
                helpTipSignup.classList.add("active")
                helpTipSignup.textContent="Escribe la respuesta a la pregunta que seleccionaste"
                break
            case 10:
                helpTipSignup.classList.add("active")
                helpTipSignup.textContent="Ingresa un número de celular para poder contactarnos contigo"
                break
            default:
                helpTipSignup.classList.remove("active")
                break
        }
    })
}
/* END registration form help buttons actions*/

const expresiones = {
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    number: /^[0-9]/
}

pattern="^[0-9]+"

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
    helpTipSignup.classList.remove("active")
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

//btnInitSession.addEventListener('click', function(){
function initSession(){
    if(inputUser.value == "" && inputPass.value == ""){
        helpTip.classList.add("active")
        helpTip.textContent = "Debes ingresar el usuario y la contraseña"
    }
    else if(inputUser.value == "" && inputPass.value != "")
    {
        helpTip.classList.add("active")
        helpTip.textContent = "Debes ingresar el usuario"
    }
    else if(inputUser.value != "" && inputPass.value == ""){
        helpTip.classList.add("active")
        helpTip.textContent = "Debes ingresar la contraseña"
    }
    else{
        let userFounded=[]
        function buscarEmail(email) {
            userData.forEach((item)=>{
                if(item.email== email){
                    userFounded.push(item.id,email,item.username)
                    console.log("userFounded",userFounded)
                }
            })
            return userFounded
        }
        let user=buscarEmail(inputUser.value)
        console.log("user",user)
        if (user.length == 0){
            helpTip.classList.add("active")
            helpTip.textContent = "Usuario no registrado, por favor intenta nuevamente. "
        }
        else if(user!=undefined && inputPass.value!= userFounded[2]){
            helpTip.classList.add("active")
            helpTip.textContent =("Contraseña incorrecta, por favor verifica e intenta nuevamente")
        }
        else
        {
            let usersType = []
            fetch("config/config.json")
            .then(data=>data.json())
            .then(data=>{
                data.forEach((item)=>{
                    if(user[0]==item.id){
                        if(item.user_type==="admin")
                            window.location="admin-page.html"
                        else
                            window.location="miaprendizaje.html"                    }
                })
            .catch(error=>console.log("Error encontrado:",error))
            })
        }
    }
}


let containerCodSMS =  `<div class="header">
                        <p>Enviamos un código de 6 dígitos a tu celular</p>
                        </div>
                        <div class="subtitle">
                        <p>Por favor ingresalo a continuación:</p>
                        </div>
                        <div class="c-code">
                        <input class="in-code" id="input1" type="number" min="0" max="9">
                        <input class="in-code" id="input2" type="number" min="0" max="9">
                        <input class="in-code" id="input3" type="number" min="0" max="9">
                        <input class="in-code" id="input4" type="number" min="0" max="9">
                        <input class="in-code" id="input5" type="number" min="0" max="9">
                        <input class="in-code" id="input6" type="number" min="0" max="9">
                        </div>
                        <div class="text-cod-sms">El código estará activo por: <span class="min-cod-sms" id="min-cod-sms"></span><span class="sept-cod-sms" id="sept-cod-sms">:</span><span class="seg-cod-sms" id="seg-cod-sms"></span></div>
                        <div class="c-foot">
                        <h4>¿No te llegó el código o no funciona?</h4>
                        <button id="send-cod-sms" type="button">Reenviar código</button>
                        </div>`
document.getElementById("c-cod-sms").innerHTML = containerCodSMS

let resendSmsCode = document.getElementById("send-cod-sms")

// Variables Globales
let time = {};
let clock = new Date()
let interval = window.setInterval(showTime, 1) // Frecuencia de actualización

function restartInterval(){
    time = {}
    clock = new Date()
    interval = window.setInterval(showTime, 1)
}

function showTime(){
    let now = new Date()
    // Inserta los minutess almacenados en clock en el span con id minutes
    time.minutes = document.getElementById('min-cod-sms')
    time.minutes.innerHTML = ('0'+(clock.getMinutes()+15 - now.getMinutes())).toString().slice(-2)
    // Inserta los seconds almacenados en clock en el span con id segundo
    time.seconds = document.getElementById('seg-cod-sms')
    time.seconds.innerHTML = ('0'+(59-now.getSeconds())).toString().slice(-2)
    if(time.minutes.innerHTML==='00' && time.seconds.innerHTML==='00'){
        window.clearInterval(interval)
    }
}


resendSmsCode.addEventListener('click',function(){
    restartInterval()
})


remUserOkBtn.addEventListener('click',function(){
    popRemPopUpUser.classList.remove("active")
    popCodSMS.classList.add("active")
})

let inSmsCodeGroup = document.querySelectorAll(".in-code")

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
})


/* BEGIN Register Form Validations */
selectTypeIdRegForm.addEventListener('click',function(){
    helpTipSignup.classList.remove("active")
    selectTypeIdRegForm.classList.remove("miss")
})

inputIdRegForm.addEventListener('click',function(){
    helpTipSignup.classList.remove("active")
    inputIdRegForm.classList.remove("miss")
})

inputIdRegForm.addEventListener("invalid", function(e) {
    e.preventDefault();
});

inputNameRegForm.addEventListener('click',function(){
    helpTipSignup.classList.remove("active")
    inputNameRegForm.classList.remove("miss")
})

inputNameRegForm.addEventListener("invalid", function(e) {
    e.preventDefault();
});


inputLastRegForm.addEventListener('click',function(){
    helpTipSignup.classList.remove("active")
    inputLastRegForm.classList.remove("miss")
})

inputLastRegForm.addEventListener("invalid", function(e) {
    e.preventDefault();
});


inputMailRegForm.addEventListener('click',function(){
    helpTipSignup.classList.remove("active")
})

inputMailRegForm.addEventListener("invalid", function(e) {
    e.preventDefault();
});


inputPass1RegForm.addEventListener('click',function(){
    helpTipSignup.classList.remove("active")
})

inputPass1RegForm.addEventListener("invalid", function(e) {
    e.preventDefault();
});


inputPass2RegForm.addEventListener('click',function(){
    helpTipSignup.classList.remove("active")
})

inputPass2RegForm.addEventListener("invalid", function(e) {
    e.preventDefault();
});

selectQuestionRegForm.addEventListener('click',function(){
    helpTipSignup.classList.remove("active")
})

selectQuestionRegForm.addEventListener("invalid", function(e) {
    e.preventDefault();
});

inputAnswerRegForm.addEventListener('click',function(){
    helpTipSignup.classList.remove("active")
})

inputAnswerRegForm.addEventListener("invalid", function(e) {
    e.preventDefault();
});

inputTelRegForm.addEventListener('click',function(){
    helpTipSignup.classList.remove("active")
})

inputTelRegForm.addEventListener("invalid", function(e) {
    e.preventDefault();
});

btnSubmitRegForm.addEventListener('click',function(){
    helpTipSignup.classList.remove("active")
    if(selectTypeIdRegForm.value == "Tipo ID..."){
        helpTipSignup.classList.add("active")
        helpTipSignup.textContent = "Debes seleccionar el tipo de tu documento de identidad"
        selectTypeIdRegForm.classList.add("miss")
    }
    else if(inputIdRegForm.value == ""){
        helpTipSignup.classList.add("active")
        helpTipSignup.textContent = "Debes ingresar tu número de documento de identidad"
        selectTypeIdRegForm.classList.remove("miss")
        inputIdRegForm.classList.add("miss")
    }
    else if(inputNameRegForm.value == ""){
        helpTipSignup.classList.add("active")
        helpTipSignup.textContent = "Debes ingresar tu(s) nombre(s)"
        inputIdRegForm.classList.remove("miss")
        inputNameRegForm.classList.add("miss")
    }
    else if(inputLastRegForm.value == ""){
        helpTipSignup.classList.add("active")
        helpTipSignup.textContent = "Debes ingresar tu(s) apellido(s)"
        inputNameRegForm.classList.remove("miss")
        inputLastRegForm.classList.add("miss")
    }
    else if(inputMailRegForm.value == ""){
        helpTipSignup.classList.add("active")
        helpTipSignup.textContent = "Debes ingresar un correo electrónico válido para poder tener contacto contigo"
        inputLastRegForm.classList.remove("miss")
        inputMailRegForm.classList.add("miss")
    }
    else if(inputPass1RegForm.value == ""){
        helpTipSignup.classList.add("active")
        helpTipSignup.textContent = "Debes ingresar una contraseña de al menos 8 caracteres, con mayúsculas, minúsculas, caracteres especiales y números"
        inputMailRegForm.classList.remove("miss")
        inputPass1RegForm.classList.add("miss")
    }
    else if(inputPass2RegForm.value == ""){
        helpTipSignup.classList.add("active")
        helpTipSignup.textContent = "Debes volver a ingresar la misma contraseña"
        inputPass1RegForm.classList.remove("miss")
        inputPass2RegForm.classList.add("miss")
    }
    else if(inputPass1RegForm.value!=inputPass2RegForm.value){
        helpTipSignup.classList.add("active")
        helpTipSignup.textContent = "Las contraseñas no coinciden"
        inputMailRegForm.classList.remove("miss")
        inputPass1RegForm.classList.add("miss")
        inputPass2RegForm.classList.add("miss")
    }
    else if(selectQuestionRegForm.value=="Selecciona una pregunta..."){
        helpTipSignup.classList.add("active")
        helpTipSignup.textContent = "Debes seleccionar una pregunta de la lista"
        inputPass1RegForm.classList.remove("miss")
        inputPass2RegForm.classList.remove("miss")
        selectQuestionRegForm.classList.add("miss")
    }
    else if(inputAnswerRegForm.value==""){
        helpTipSignup.classList.add("active")
        helpTipSignup.textContent = "Debes ingresa la respuesta a la pregunta que elegiste de la lista"
        selectQuestionRegForm.classList.remove("miss")
        inputAnswerRegForm.classList.add("miss")
    }
    else if(inputTelRegForm.value==""){
        helpTipSignup.classList.add("active")
        helpTipSignup.textContent = "Por favor ingresa el número de tu teléfono celular para poder contactarnos contigo"
        inputAnswerRegForm.classList.remove("miss")
        inputTelRegForm.classList.add("miss")
    }
    else{
        formElement.elements
    }
})

btnCancelRegForm.addEventListener('click',function(){
    helpTipSignup.classList.remove("active")
})

helpTipSignup.addEventListener('click',function(){
    helpTipSignup.classList.remove("active")
})



/* END Register Form Validations */