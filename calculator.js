document.addEventListener('DOMContentLoaded', function() {
    let operand1 = null,
        operation = null,
        currentinput = "";
    
    const screen = document.getElementById("result");

    function handlenumber() {
        currentinput += this.value;
        screen.value = currentinput;
    }

    function handledecimal() {
        if (!currentinput.includes(".")) {
            currentinput += ".";
            screen.value = currentinput;
        }
    }

    function handleoperation() {
        operation = this.value;
        operand1 = currentinput;
        currentinput = "";
        screen.value = 0;
    }

    function handleequal() {
        screen.value = calculate(operand1, operation, currentinput);
        currentinput = "";
        operation = null;
        operand1 = null;
    }

    function calculate(opr1, op, opr2) {
        if (op === '+') {
            return parseFloat(opr1) + parseFloat(opr2);
        } else if (op === '-') {
            return parseFloat(opr1) - parseFloat(opr2);
        } else if (op === '*') {
            return parseFloat(opr1) * parseFloat(opr2);
        } else if (op === '/') {
            return parseFloat(opr1) / parseFloat(opr2);
        } else {
            return "Invalid operator";
        }
    }

    function allclearI() {
        operand1 = null;
        operation = null;
        currentinput = "";
        screen.value = 0;
    }

    const numbers = document.getElementsByClassName("numbers");
    const operations = document.getElementsByClassName("operator");

    for (let i = 0; i < numbers.length; ++i) {
        numbers[i].addEventListener('click', handlenumber, false);
    }

    for (let i = 0; i < operations.length; ++i) {
        operations[i].addEventListener('click', handleoperation, false);
    }

    document.getElementById("equal").addEventListener('click', handleequal);
    document.getElementById("points").addEventListener('click', handledecimal);
    document.getElementById("all-clear").addEventListener('click', allclearI);
});
