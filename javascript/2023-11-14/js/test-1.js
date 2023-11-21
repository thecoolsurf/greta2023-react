/*
INDEXOF

- Créer une fonction qui prend 2 paramètres : un mot et une lettre à trouver dans le mot
- Si la lettre est présente, la fonction renvoie l’index de la lettre dans le mot
(index de la 1ère lettre trouvée si la lettre est présente plusieurs fois)
- Si la lettre n’est pas présente, la fonctionne renvoie -1
- Ne pas utiliser la fonction native indexOf ()…
*/

let string = 'paramètre';
let letter = 's';

function findLetter(string, letter) {
    let stringToArray = string.slice();
    let find = -1;
    for(i=0; i<stringToArray.length; i++) {
        if (stringToArray[i] === letter) {
            find = i;
        }
    }
    return find;
}
let findletter = findLetter(string,letter);
// console.log(string+'('+letter+'): '+findletter);

/*
- Créer une fonction qui prend un mot en paramètre
- La fonction doit vérifier si le mot se termine par la lettre “s”
- La fonction doit renvoyer un booléen (true si le mot se termine par un "s" et false dans le
cas contraire)
*/

function findS (string) {
    let stringToArray = string.slice();
    let find = false;
    for(i=0; i<stringToArray.length; i++) {
        if (stringToArray[i] === 's') {
            find = true;
        }
    }
    return find;
}
let finds = findS(string);
// console.log(finds);

/*
- Créer une fonction qui prend une phrase en paramètre.
- Cette phrase comporte plein de majuscules placées un peu n'importe où.
- Cette fonction doit renvoyer cette même phrase avec une majuscule à la première lettre
de chaque mot uniquement.
*/

let stringCaps = 'Créer une fonCtion Qui pRend Une pHrase En Paramètre.';

function upperToLower(string) {
    let array_str = [];
    let stringToArray = string.split(' ');
    for(i=0;i<stringToArray.length; i++) {
        cap = stringToArray[i].slice(0,1).toUpperCase();
        lower = stringToArray[i].slice(1,stringToArray[i].length).toLowerCase();
        array_str.push(cap+lower);
    }
    str_final = array_str.join(' ');
    return str_final;
}
// console.log(stringCaps);
// console.log(upperToLower(stringCaps));

/*
- Créer une fonction qui prend un mot en paramètre.
- La fonction doit vérifier si ce mot est ou non un palindrome
(mot qui peut être lu dans les deux sens. Exemple : kayak)
- La fonction renvoie un booléen (true si c'est un palindrome, false si ce n'est pas un
palindrome)
*/

function checkPalindrome(str) {
    let origin = [];
    let reverse = [];
    let stringToArray = str.slice();
    for (let i=0; i<stringToArray.length; i++) {
        origin.push(stringToArray[i]);
    }
    for (let i=stringToArray.length-1; i>=0; i--) {
        reverse.push(stringToArray[i]);
    }
    let str_origin = origin.join('');
    let str_reverse = reverse.join('');
    console.log(str_origin);
    console.log(str_reverse);
    if (str_origin === str_reverse) {
        return true;
    } else {
        return false;
    }
}
let check = checkPalindrome('REACT');
console.log(check);

/*

*/
