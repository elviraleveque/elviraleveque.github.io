"use strict";

let field = document.getElementById('field');
let values = [];
let errorMsg = document.getElementById('error-msg')

let nextButton = document.getElementById('next');

let bill = document.getElementById('bill');
let tip = document.getElementById('tip');
let guests = document.getElementById('guests');

let tipPP = document.getElementById('tipPP');



let process = function () {
    field.focus()
    // An input type number returns an empty string if you type text. 
    // Empty strings are falsy values.
    if (field.value) {
        field.classList.remove('invalid')
        errorMsg.innerHTML = '&nbsp;'
        values.push(parseInt(field.value));
        field.value = null;
        console.log(values);
        if (values.length === 1) {
            field.placeholder = 'Enter tip percentage';
            bill.innerHTML = '$' + values[0];
            // Reset values if restart using 'next' button
            tip.innerHTML = '0%';
            guests.innerHTML = 0;
            tipPP.innerText = '$0.00';
        } else if (values.length === 2) {
            field.placeholder = 'Enter numeber of guests';
            tip.innerHTML = values[1] + '%';
            nextButton.innerHTML = 'Split'
        } else if (values.length === 3) {
            guests.innerHTML = values[2];
            // values[0] -> bill, values[1] -> percentage, values[2] -> people
            let tipResult = (values[0] * values[1] / 100) / values[2]
            tipPP.innerText = '$' + tipResult.toFixed(2)
            values = []
            field.placeholder = 'Insert bill amount';
            nextButton.innerHTML = 'Next'
        }
    } else {
        field.classList.add('invalid')
        errorMsg.innerText = '*Enter a numeric value'
    }
}

// field.onkeyup = function () {
//     bill.innerHTML = '$' + field.value;
// }

let reset = function () {
    values = []
    field.value = null;
    field.placeholder = 'Insert bill amount';
    field.classList.remove('invalid')
    errorMsg.innerHTML = '&nbsp;'
    nextButton.innerHTML = 'Next'
    bill.innerHTML = '$0.00';
    tip.innerHTML = '0%';
    guests.innerHTML = 0;
    tipPP.innerText = '$0.00';
}

// DA FARE:
// aggiustare il cesso focus di chrome
// impedire inserimento numeri negativi.
// max due cifre dopo la virgola
// aggiornamento valori instantaneo
// passaggio successivo con enter

