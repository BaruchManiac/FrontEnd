function addcomando(value) {
    document.getElementById("display").value += value;
}

function cleanDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = document.getElementById("display").value;
        let result = new Function(`return ${expression}`)();
        document.getElementById("display").value = result;
    } catch (e) {
        alert("Errou Otário!");
        clearDisplay();
    }
}