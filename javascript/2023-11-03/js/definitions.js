/* **************************************************************** */
// variables

// creation d'une variable à porté globale
var porteGlobale = true;

// creation d'une variable à porté locale
let porteLocale = true;

// assignation de valeur à une variable
let userName = 'Hello';

// création d'une variable et assignation de valeur
let userPseudo = 'user_pseudo';

// valeur de caractères: string
let str = 'string123456';

// valeur numéraire
let num = 12345;

// valeur bolean
let bol = true | false;

// valeur object
let user1 = {
    lastname: 'DOUIN',
    firstname: 'Hubert',
    age: 57,
    dev: true,
};

// valeur table
let language = ['html', 'css', 'javscript'];

/* **************************************************************** */
// operateurs

// assignation: =

// comparaison: < > <= >= == 

// arithmetique: +-*/
let result1 = 3 + 4 * 5; //->35

// concatenation:
let firstname = 'Hubert';
let lastname = 'DOUIN';
let user2 = firstname + ' ' + lastname;
// template strings (ES6) avec back-ticks (altGR = 7)
let user3 = `${firstname} ${lastname}`;

let userid = document.getElementById('username');
let btn5 = document.getElementById('btn5');

btn5.onclick = function () {
    if (userid.innerHTML == user2) {
        userid.innerHTML = '';
    } else {
        userid.innerHTML = user3;
    }
}


