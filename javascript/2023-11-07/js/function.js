/* ************************************************************************* */
/* FUNCTION */


function sayHello1() {
    console.log('Hello');
}

// appeler la methode dans le fichier
// NB: bien nommer les méthodes selon leur rôle.
// ex: checkPassword() | createPassword()
sayHello1();


// ajouter dess parametres dans la methode
// NB: les variables déclarées dans la fonction ne sont valable
// que dans la fonction. Pas de conflis en dehors.
function sayHello2(firstname, lastname) {
    return `Hello ${firstname} ${lastname}`;
}
console.log(sayHello2('Hubert','DOUIN'));
console.log(sayHello2('Jean-Yves','LAPAIX'));


//utiliser plusieurs parametres
function addition(num1,num2) {
    result = 'Addition: ' + (num1 + num2);
    return result;
}
console.log(addition(10.5,20.4));

function multiplication(num1,num2) {
    result = 'Multiplication: ' + (num1 * num2);
    return result;
}
console.log(multiplication(10.5,20.4));


// récupérer tous les arguments de la methode: Rest parameter
function getParams(...params) { // ne pas oublié les trois points sinon undefined
    console.log(params)
}
getParams();
getParams(1,2,3);


// comment utiliser la fonction spread ...
let lesfruits = ['pomme', 'poire', 'abricot'];
let leslegumes = ['salade', 'asperge'];
let spread = ['moto', 'voiture', ...lesfruits, ...leslegumes];
console.log(spread);

// retour de fonction dans une variable
let varsayHello2 = sayHello2('Hubert','DOUIN');
console.log('VAR: ' + varsayHello2);