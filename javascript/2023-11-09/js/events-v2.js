/* ******************************************************************** */
/* EVENTS LISTENER */

// la methode addEventListener prend 2 arguments
// - le nom de l'événement
// - la fonction à éxécuté quand l'événement à lieu
document.querySelector('#btn1').addEventListener('click', function (event) {
    console.log(event.target);
    // permet de changer l'intitulé du BUTTON
    event.target.textContent = 'btn1 à été cliqué.';
});

/* ******************************************************************* */
/* REAGIR A L'ENVOI DU FORMULAIRE */

// methode 1
// document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
//     e.preventDefault(); // bloque l'envoi et le refresh de la page
//     console.log('test');
// });

// methode 2
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Submit');
});

// reset
document.querySelector('form').addEventListener('reset', function () {
    console.log('Reset datas');
});