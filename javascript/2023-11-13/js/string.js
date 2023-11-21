/* ************************************************************ */
/* STRING | ARRAY */

let str = 'mystring';

// nombre de caracteres
str.length; // 8

// on peut iterer une chaise comme un tableau
for(let letter of str) {
    console.log(letter); // m y s t r ...
}

// chercher une chaine de caractère dans une chaine,
// à partir d'un index ou du debut
'world'.includes('ld'); // true
'world'.includes('xx'); // false
'http://h.douin.free.fr'.includes('http://',0); // true
'http://h.douin.free.fr'.includes('free',17); // false
'hdouin@free.fr'.includes('@',2); // true

// chercher l'index d'une chaine de caractère
'freedom'.indexOf('e'); // 2 -> premier element trouvé
'freedom'.indexOf('e',2); // 3 -> position de l'index trouvé
'freedon'.lastIndexOf('e'); // 3

// si la chaine de caracteres n'est pas trouvé, retourne -1
'freedom'.indexOf('z') // -1

// formatage de texte
'freedom'.toUpperCase(); // FREEDOM
'freedom'.toLowerCase(); // freedom


/* ************************************************************ */
/* MANIPULATION DE CHAINE DE CARACTERE */

// decouper une chaine de caractere
// slice(start,last)
'Javascript is very cool'.slice(4,10); // script
// slide (start, a la fin)
'Javascript is very cool'.slice(4); // script is very cool

let javascript = 'Javascript is cool';
let script = javascript.slice(4,10); // script

let email = 'hdouin@free.fr';
let provider = email.slice(email.lastIndexOf('@')+1); // free.fr

let emails = ['hdouin@free.fr','hdouin@free.fr','hdouin@free.fr'];

function findProvider(email) {
    let provider = email.slice(email.indexOf('@')+1);
    return provider;
}

email.slice(0,email.indexOf('@'))
    .toLowerCase();

// remplace un ou plusieurs caracteres de la chaine
// la chaine originale n'est pas changée
hardCode = 'Coding is very hard to do';
hardCode.replace('hard','easy'); // Coding is very easy to do

let mobile = '06-17-70-42-75';
// remplace le premier uniquement
mobile.replace('-',' '); // 06 17-70-42-75
// remplace toutes les occurences
mobile.replaceAll('-',' '); // 06 17 70 42 75

// transformer une chaine en tableau
let array1 = mobile.split('-'); // [06,17,70,42,75]
console.log(array1);
let array2 = javascript.slice(0,10).split('');
console.log(array2); // [j, a, v, a, s, c, r, i, p, t]

