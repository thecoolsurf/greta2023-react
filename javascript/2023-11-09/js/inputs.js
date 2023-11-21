/* ************************************************************************** */
/* EXERCICE-4 */

/*
- Creez trois curseurs de couleurs
- un pour le ROUGE
- un pour le VERT
- un pour le BLEU
*/
let parent = document.getElementById('colorSelect');
let inputs = document.querySelectorAll('input');

// le retour donne une valeur pour chaque lettre tapée dans le champ
// tous les inputs du formulaire sont gérés en meme temps
for(let input of inputs) {
    // console.log(input);
    input.addEventListener('input', function(e) {
        //console.log(e.target.value);
    });

}

// boucle Foreach() pour les champs de formulaire ou DOM avec querySelectorAll('items')
// - prend une fonction anonime en parametre ()=> représentant chacun des éléments de la liste
// - par convention, ce parametre est appelé item
// - une fonction dans une fonction est un CALLBACK
inputs.forEach(item => {
    // console.log(item);
    item.addEventListener('input', function(e) {
        //console.log(e.target.value);
    })
});

// exemple: des qu'une saisie dans un des inputs, la fonction myFonction est  éxécuté
// inputs.forEach(item => item.addEventListener('input', myFunction));