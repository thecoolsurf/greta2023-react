/* ************************************************************************** */
/* EXERCICE-3 */

/*
- Creez trois curseurs de couleurs
- un pour le ROUGE
- un pour le VERT
- un pour le BLEU
*/

let btnRed = document.getElementById('btnRed');
let btnGreen = document.getElementById('btnGreen');
let btnBlue = document.getElementById('btnBlue');

let info_red = document.getElementById('info-red');
let info_green = document.getElementById('info-green');
let info_blue = document.getElementById('info-blue');

let display = document.getElementById('display');
let btnReset = document.getElementById('resetColor');

let red = 0;
let green = 0;
let blue = 0;

let myInputs = document.querySelectorAll('input[type="range"]');

// on fait une selection de tous les inputs TYPE=RANGE pour que chacun
// soit ecouté mais on a besoin de chacun
myInputs.forEach(item => {
    item.addEventListener('input', function (e) {
        red = btnRed.value;
        green = btnGreen.value;
        blue = btnBlue.value;
        display.style.backgroundColor = `rgb(${red},${green},${blue})`;
        info_red.textContent = btnRed.value;
        info_green.textContent = btnGreen.value;
        info_blue.textContent = btnBlue.value;
    });
});

btnReset.addEventListener('click', function () {
    btnRed.value = 0;
    btnGreen.value = 0;
    btnBlue.value = 0;
    display.style.backgroundColor = `rgb(0,0,0)`;
});
