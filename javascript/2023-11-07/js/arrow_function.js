/* ************************************************************************* */
/* ARROW FUNCTION */


// syntaxe ES4 d'une fonction => fonction fléchée
// dans cette ecriture, on peut appeler la fonction avant sa déclaration
sayHello3();
function sayHello3() {
    console.log('ES4: function sayHello3');
}

// syntaxe ES6, on declare la fonction dans une variable
// NB: ne pas oublier les parentheses de la fonction
const sayHello4 = () => {
    console.log('ES6: () => { sayHello4 }');
    console.log('deuxième ligne d\'instruction');
}
sayHello4();

// NB: avec une seule instruction, on peut enlever les accolades
const sayHello5 = () => console.log('ES6: () => sayHello5');
sayHello5();

// NB: syntaxe les plus courtes possibles en ES6
const multNumb = (numb1,numb2) => numb1 * numb2;
const addNumb = (numb1,numb2) => { return numb1 + numb2 };