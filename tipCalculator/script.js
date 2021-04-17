field = document.getElementById('field');
values = [];
errorMsg = document.getElementById('error-msg')

nextButton = document.getElementById('next');

bill = document.getElementById('bill');
tip = document.getElementById('tip');
guests = document.getElementById('guests');

totalPP = document.getElementById('totalPP');



process = function () {
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
            totalPP.innerText = '$0.00';
        } else if (values.length === 2) {
            field.placeholder = 'Enter numeber of guests';
            tip.innerHTML = values[1] + '%';
            nextButton.innerHTML = 'Split'
        } else if (values.length === 3) {
            guests.innerHTML = values[2];
            // values[0] -> bill, values[1] -> percentage, values[2] -> people
            totalPP.innerText = '$' + (values[0] + values[0] * values[1] / 100) / values[2]
            values = []
            field.placeholder = 'Insert bill amount';
            nextButton.innerHTML = 'Next'
        }
    } else {
        field.classList.add('invalid')
        errorMsg.innerText = '*Enter a numeric value'
    }
}

field.onkeyup = function () {
    bill.innerHTML = '$' + field.value;
}

Reset = function () {
    values = []
    field.value = null;
    field.placeholder = 'Insert bill amount';
    nextButton.innerHTML = 'Next'
    bill.innerHTML = '$0.00';
    tip.innerHTML = '0%';
    guests.innerHTML = 0;
    totalPP.innerText = '$0.00';
    field.classList.remove('invalid')
    errorMsg.innerHTML = '&nbsp;'
}

// DA FARE:
// aggiornamento valori instantaneo
// passaggio successivo con enter

