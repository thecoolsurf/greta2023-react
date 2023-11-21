let weather;
let message;

if (weather === 'sunny') {
    msg = ''
}
else if (weather === 'cloud') {
    msg = '';
}
else if (weather === 'snow') {

}
else if (weather == 'rain') {
    msg = '';
}
else {
    msg = '';
}

switch (weather) {
    case 'sunny':
        msg = 'The weather is fine';
    case 'cloud':
        msg = 'The weather is sade';
    case 'snow':
        msg = 'The weather is cold';
    case 'rain':
        msg = 'The weather is wet';
    default:
        msg = 'The weather is fine';
}