function convertTemperature() {
    let celsiusInput = document.getElementById('celsius');
    let fahrenheitInput = document.getElementById('fahrenheit');

    let celsiusValue = parseFloat(celsiusInput.value);
    let fahrenheitValue = parseFloat(fahrenheitInput.value);

    if (!isNaN(celsiusValue)) {
        fahrenheitInput.value = (celsiusValue * 9/5) + 32;
    } else if (!isNaN(fahrenheitValue)) {
        celsiusInput.value = (fahrenheitValue - 32) * 5/9;
    }
}
