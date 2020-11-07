const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

celciusInput.addEventListener('input', function() {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273;
    fahrenheitInput.value = fTemp;
    kelvinInput.value = kTemp; 
});

fahrenheitInput.addEventListener('input', function() {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (5/9)*(fTemp - 32);
    const kTemp = ((5/9)*(fTemp - 32)) + 273;
    celciusInput.value = cTemp;
    kelvinInput.value = kTemp; 
});

kelvinInput.addEventListener('input', function() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273;
    const fTemp = ((kTemp - 273) * (9/5)) + 32;
    celciusInput.value = cTemp;
    fahrenheitInput.value = fTemp; 
});