/* ************************************************************************* */
/* DOM (Document Object Modele) */

// la porte d'entree du DOM est le mot cle document
// rajouter la fonction querySelector pour trouver le PREMIER élément trouvé
let table = document.querySelector('table');
console.log('table' + table);
let div = document.querySelectorAll('div');
console.log('div:' + div);

// selection par TAGNAME
// retourne tous les éléments du nom de TAGNAME
document.getElementsByTagName('h1');

// selection par ID
document.getElementById('html1'); // best
document.querySelector('#html1'); // new mais pas le meilleur

// selection par classname
// retourne tous les éléments de la class
let container = document.getElementsByClassName('container');

// selection d'éléments par leur class ou autre sélecteur
document.querySelectorAll('.container');

// modification ou consultation d'un noeud
let h1 = document.querySelector('h1');
let h1Content = document.querySelector('h1').textContent;
h1.textContent = h1Content + '@';

// creation d'une liste dans une balise UL
function liste() {
    document.querySelector('.container ul').innerHTML = `<li>item1</li><li>item2</li><li>item3</li>`;
}
let code2 = document.getElementById('code2');
liste();
code2.innerHTML = liste;


