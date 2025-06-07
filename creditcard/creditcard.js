function isCardNumberValid(number) {
    // Only accept this one number for now
    return number === '1234123412341234';
}

function displayError(msg) {
    document.querySelector('.errorMsg').innerHTML = msg;
}

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';
    // clear any previous errors
    displayError('');

    // Get form values
    const cardNumber = this['card-number'].value.trim();
    const cardMonth = this['card-month'].value.trim();
    const cardYear = this['card-year'].value.trim();

    // Card number validation
    if (isNaN(cardNumber)) {
        errorMsg += 'Card number is not a valid number<br>';
    } else if (!isCardNumberValid(cardNumber)) {
        errorMsg += 'Card number is not a valid card number<br>';
    }

    // Expiration date validation
    const now = new Date();
    const inputMonth = parseInt(cardMonth, 10);
    const inputYear = parseInt(cardYear, 10);

    if (
        isNaN(inputMonth) || isNaN(inputYear) ||
        inputMonth < 1 || inputMonth > 12 || inputYear < 0
    ) {
        errorMsg += 'Expiration date is invalid<br>';
    } else {
        // Assume YY is 2000+YY
        const fullYear = 2000 + inputYear;
        const expDate = new Date(fullYear, inputMonth - 1, 1);
        // Set to end of month
        expDate.setMonth(expDate.getMonth() + 1);
        expDate.setDate(0);
        if (expDate < now) {
            errorMsg += 'Expiration date must be in the future<br>';
        }
    }

    if (errorMsg !== '') {
        displayError(errorMsg);
        return false;
    }
    displayError(''); 
    return true;
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler);