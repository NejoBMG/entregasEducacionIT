/*
Tenemos un cliente que nos está pidiendo que el sistema que estamos desarrollando tenga una 
contraseña segura pero con las siguientes característica, que esta debe contener: 
1) Que tenga una longitud de 12 caracteres mínimo.
2) Debe contener al menos 1 letra en mayúscula.
3) Debe contener al menos 1 letra en minúscula.
4) No puede contener espacios vacíos.
*/ 

const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).\S{12,18}$/g;
const inputPass = document.getElementById('inputPassword');
const buttonSubmit = document.getElementById('buttonSubmit');
const contador = document.getElementById('contador');
const message = document.getElementById('message');

function checkPass(input) {
    input.addEventListener('keyup', () => {
        input.isValid = false;
        contador.innerText=`${inputPass.value.length}`
        if (regExp.test(input.value)){
            input.isValid = true;
            buttonSubmit.removeAttribute('disabled');
        }
    })
}
checkPass(inputPass);

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputPass.isValid === true) {
        message.innerText = '';
        message.innerText = 'Contraseña Correcta';
        inputPass.value="";
        buttonSubmit.setAttribute('disabled','');
        contador.innerText = '0';
    }
    else{
        message.innerText = '';
        message.innerText = 'Contraseña Incorrecta';
    }
})