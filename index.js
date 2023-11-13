function convertTemperature() {
   
    let celsius = parseFloat(document.getElementById('celsiusInput').value) || 0;
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;
   
    document.getElementById('fahrenheitInput').value = fahrenheit.toFixed(2);
    document.getElementById('kelvinInput').value = kelvin.toFixed(2);
}
function clearInputs() {
    document.getElementById('celsiusInput').value = '';
    document.getElementById('fahrenheitInput').value = '';
    document.getElementById('kelvinInput').value = '';
}