let runningTotal = 0;
let buffer = "0";
let preOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {

    if (isNaN(value)) {
        handleSymbol(value);
    }
    else {
        handleNumber(value);
    }

    screen.innerText = buffer;

}

function handleSymbol(value) {
    switch (value) {

        case 'C':
            buffer = "0";
            runningTotal = 0;
            break;

        case '=':

            if (preOperator === null) {
                return;
            }

            flushOperation(parseInt(buffer));

            preOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;

        case '←':

            if (buffer.length === 1) {
                buffer = "0";
            }
            else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;

        case '+':
            handleMaths(value);
            break;
        case '−':
            handleMaths(value);
            break;
        case '×':
            handleMaths(value);
            break;
        case '÷':
            handleMaths(value);
            break;

    }
}

function handleMaths(symbol) {
    if (buffer === '0') {
        return;
    }

    const intBuffer = parseInt(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    }
    else {
        flushOperation(intBuffer);
    }

    preOperator = symbol;
    buffer = "0";
}

function flushOperation(intBuffer) {

    if (preOperator === '+') {
        runningTotal += intBuffer;
    } else if (preOperator === '−') {
        runningTotal -= intBuffer;
    } else if (preOperator === '×') {
        runningTotal *= intBuffer;
    } else if (preOperator === '÷') {
        runningTotal /= intBuffer;
    }

}

function handleNumber(num) {
    if (buffer === '0') {
        buffer = num;
    } else {
        buffer += num;
    }
}

function init() {
    document.querySelector('.cal-buttons').addEventListener('click',function(event){buttonClick(event.target.innerText);
    })
}

init();