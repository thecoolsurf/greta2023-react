
const colors = ['#00ffff', '#ffc400', '#1aff00', '#ff00bf'];

let buttons = document.querySelectorAll('button');

// donner les 4 couleurs aux 4 boutons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = colors[i];

    // pour chacun des boutons, au click on déclenche la fonction displayDivs
    buttons[i].addEventListener('click', function (event) {
        displayDivs(event);
    })
    // buttons[i].onclick = displayDivs;
}

// créer une fonction qui renvoie une couleur aléatoire piochée dans le tableau de couleurs
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

// créer 50 divs, leur donner à chacune une couleur aléatoire et les injecter dans le DOM
for (let i = 0; i < 50; i++) {
    let div = document.createElement('div');
    div.style.backgroundColor = getRandomColor();
    document.querySelector('.colors').append(div)
}


// sauvegarder une copie des divs de départ
const allDivs = document.querySelectorAll('.colors div');

/*
allDivs est une liste d'éléments HTML (NodeList) mais ce n'est pas un tableau
on ne peut donc pas utiliser les méthodes map(), filter()... dessus

Pour poivoir utiliser ces méthodes il faut transformer la liste en tableau
--> [...allDivs] transforme allDivs en tableau
*/


function displayDivs(event) {

    // supprimer toutes les divs de couleur
    document.querySelector('.colors').innerHTML = '';

    // filtrer la liste des divs qui étaient affichées
    // réinjecter que celles de la même couleur que le bouton
    [...allDivs].filter(item => item.style.backgroundColor === event.target.style.backgroundColor).forEach(item => document.querySelector('.colors').append(item))
}