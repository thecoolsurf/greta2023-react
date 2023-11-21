/*
Créé une fonction qui additionne tous les chiffres passés 
en parametres et afficher le resultat final
*/


// sans la fonction SPREAD en parametre
// on doit donner un tableau en parametre pour le parcourir
function addition_1(params) {
    let result = 0;
        for (let param of params) {
        result += param;
    }
    return 'addition_1: ' + result;
}
console.log(addition_1([10,20,30,40,50,4,6]));

// avec la fonction SPREAD en parametre
// la fonction SPREAD créée elle-même le tableau à parcourir
function addition_2(...params) {
    let result = 0;
        for (let param of params) {
        result += param;
    }
    return 'addition_2: ' + result;
}
console.log(addition_2(10,20,30,40,50,4,6));
