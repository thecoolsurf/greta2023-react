/* ************************************************************************** */
/* EXERCICE-1 */

/*
- au click sur l'image de la lune, on ajoute une class dans le bg darkMode pour
pour le faire devenir claire.
- le contenu de l'image change et devient soleil

- au click sur l'image du soleil, on modifie le fond qui devient sombre par la supression du darkMode
*/

let bkg = document.getElementById('bg-dark');
let lume = document.getElementById('lune');
let soleil = document.getElementById('soleil');

document.getElementById('soleil').addEventListener('click', function (event) {
    if (event.target.style.display === 'block') {
        event.target.style.display = 'none';
        lume.style.display = 'block';
        bkg.classList.remove('bg-light');
        bkg.classList.add('bg-dark');
    } else {
        event.target.style.display = 'block';
        lume.style.display = 'none';
        bkg.classList.add('bg-light');
        bkg.classList.remove('bg-dark');
    }

});

document.getElementById('lune').addEventListener('click', function (event) {
    if (event.target.style.display === 'block') {
        event.target.style.display = 'none';
        soleil.style.display = 'block';
        bkg.classList.add('bg-light');
        bkg.classList.remove('bg-dark');
    } else {
        event.target.style.display = 'block';
        soleil.style.display = 'none';
        bkg.classList.remove('bg-light');
        bkg.classList.add('bg-dark');
    }
});

// Corrigé de l'exercice
// le selector est le meme dans l'exercice de base par l'utilisation d'une image
// et non d'une DIV
/*
document.getElementById('soleil').addEventListener('click', function (event) {
    bkg.classList.toggle('bg-dark');
    txt.classList.toggle('txt-dark');
    event.target.style.display = 'none';
    lume.style.display = 'block';
});
*/