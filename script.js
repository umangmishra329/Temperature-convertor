function convertTemperature() {
    let inputTemp = document.getElementById("inputTemp").value;
    let inputUnit = document.getElementById("inputUnit").value;
    let result = document.getElementById("result");

    if (inputTemp === "") {
        result.textContent = "Please enter a temperature.";
        return;
    }

    inputTemp = parseFloat(inputTemp);

    if (isNaN(inputTemp)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    let outputTemp;
    let outputUnit;

    if (inputUnit === "Celsius") {
        outputTemp = (inputTemp * 9/5) + 32;
        outputUnit = "Fahrenheit";
    } else {
        outputTemp = (inputTemp - 32) * 5/9;
        outputUnit = "Celsius";
    }
    result.textContent = ${inputTemp}° ${inputUnit} 
    is equal to ${outputTemp.toFixed(2)}° ${outputUnit};
}
