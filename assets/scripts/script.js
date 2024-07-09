// Inputs
const inputName = document.getElementById('name')
const inputNumber = document.getElementById('number')
const inputMonth = document.querySelector('.month')
const inputYear = document.querySelector('.year')
const inputCvc = document.getElementById('cvc')

// HTML
const cardNumber = document.querySelector('.front_number')
const cardName = document.querySelector('.name_front')
const cardMonth = document.querySelector('.MM')
const cardYear = document.querySelector('.YY')
const cardCVC = document.querySelector('.cvc_back')

inputNumber.addEventListener('input', (event) => {
    let input = event.target.value.replace(/\s+/g, ''); // Remove todos os espaços em branco
    if (input.length > 16) {
        input = input.substring(0, 16); // Limita a 16 dígitos
    }
    let formattedNumber = '';
    for (let i = 0; i < input.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedNumber += ' ';
        }
        formattedNumber += input[i];
    }
    cardNumber.innerHTML = formattedNumber
})

inputName.addEventListener('input', (event) => {
    cardName.innerHTML = event.target.value
})

inputMonth.addEventListener('input', (event) => {
    cardMonth.innerHTML = event.target.value
})

inputYear.addEventListener('input', (event) => {
    cardYear.innerHTML = event.target.value
})

inputCvc.addEventListener('input', (event) => {
    cardCVC.innerHTML = event.target.value
    let input = event.target.value.replace(/\s+/g, ''); 
    if (input.length > 3) {
        input = input.substring(0, 3); 
    }
})
