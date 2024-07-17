function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;

    // This will replace the result of any mathematical operation with "JUA BAU TITIT"
    if (expression.match(/[0-9]+[+\-*/][0-9]+/)) {
        display.value = 'JUA BAU TITIT';
    } else {
        try {
            display.value = eval(expression);
        } catch {
            display.value = 'Error';
        }
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}