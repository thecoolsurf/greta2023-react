/* ******************************************************************** */
/* MOUSE EVENT */

// on capte le deplacement de la souris sur toute la page
// pour ses valeurs en X et en Y

let ardoise = document.getElementById('ardoise');
let brush1 = document.getElementById('brush1');
let reset = document.getElementById('reset');

ardoise.addEventListener('mousemove', function (e) {

    brush1.style.left = e.clientX + 'px';
    brush1.style.top = e.clientY + 'px';

    let brush2 = document.createElement('div');
    brush2.classList.add('brush2');
    brush2.style.backgroundColor = '#FFF';
    brush2.style.position = 'absolute';
    brush2.style.zIndex = 1;
    brush2.style.left = (e.clientX - 100) + 'px';
    brush2.style.top = (e.clientY - 450) + 'px';
    ardoise.append(brush2);
});

reset.onclick = function() {
    let parent = document.getElementById('ardoise');
    let brushes = document.getElementsByClassName('.brush2');
    brushes.parentNode.removeChild(brushes);
};

reset.addEventListener('click',function(e) {
    parent = document.getElementById('ardoise');
    let brushes = document.querySelectorAll('.brush2');
});

// corrigé
/*
window.addEventListener('mousemove', function(e) {
    let pixel = document.createElement('div');
    pixel.classList.add('mousemove');
    pixel.style.top = e.clientX;
    pixel.style.left = e.clientY;
    pixel.zIndex = 10;
    document.body.prepend(pixel);
});
*/