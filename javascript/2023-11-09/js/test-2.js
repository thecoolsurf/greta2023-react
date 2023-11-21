/* ************************************************************************** */
/* EXERCICE-2 */

/*
- Quand on click sur le bouton, le texte devient Display List et la liste disparait
- Quand on reclique sur le bouton, le texte redevient Mask List et la liste réapparait
*/

document.getElementById('btn2').addEventListener('click', function (e) {
    let list = document.getElementById('list');
    if (e.target.textContent === 'Click me') {
        e.target.innerHTML = 'Super';
        list.style.display = 'none';
    } else {
        e.target.innerHTML = 'Click me';
        list.style.display = 'block';
    }
});

// corrigé
