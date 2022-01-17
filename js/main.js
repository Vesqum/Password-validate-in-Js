const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letter = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;


const showMsg = () => {
    if(pass.value.length > minValue && pass.value.match(letter) &&
     pass.value.match(numbers) && pass.value.match(special) ) {
        p.textContent = 'Masz bardzo dobre hasło!'
        p.style.color = 'lime'
    } else if (pass.value.length > minValue && pass.value.match(letter) &&
    pass.value.match(numbers)) {
        p.textContent = 'Masz  dobre hasło!'
        p.style.color = 'blue'
    } else {
        p.textContent = 'Masz  słabe hasło!'
        p.style.color = 'tomato'
    }
}

const checkPassword = () => {
    if(pass.value !== '') {
        showMsg();
    } else {
        p.textContent = 'Masz  słabe hasło!'
        p.style.color = 'tomato'
    }
}



pass.addEventListener('keyup', showMsg)