const celciusEl = document.getElementById('celcius');
const fahrenheitEl = document.getElementById('fahrenheit');
const kelvinEl = document.getElementById('kelvin');

let celsius = 'celsius'
let kelvin = 'kelvin'
let fahrenheit = 'fahrenheit'

function computeTemp(event){
    console.log(+event.target.value);
    /* getting the value, also converting the value to number using '+' */
    const currentValue = +event.target.value;

    /* switch case */
    switch (event.target.name) {
        /* if the key is celsuis, we wanna change kelvin an fahrenheit */
        case 'celsius':
            console.log(celsius);
            kelvinEl.value = (currentValue + 273.32).toFixed(2); /* making only 2 decimals to show */
            fahrenheitEl.value = ((currentValue * 1.8) + 32).toFixed(2); /* making only 2 decimals to show */
            break;
        case 'fahrenheit':
            console.log(fahrenheit);
            celciusEl.value = ((currentValue - 32) / 1.8).toFixed(2); /* making only 2 decimals to show */
            kelvinEl.value = (((currentValue - 32) * 1.8) + 273.32).toFixed(2); /* making only 2 decimals to show */
            break;
        case 'kelvin':
            console.log(kelvin);
            celciusEl.value = (currentValue - 273.32).toFixed(2); /* making only 2 decimals to show */
            fahrenheitEl.value = (((currentValue - 273.32)* 1.8) +32).toFixed(2); /* making only 2 decimals to show */
            break;
        default:
            break;
    };
};