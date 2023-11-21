/* ************************************************************************* */
/* BOUCLE FOR */

let fruits = ['🍓','🍏','🍑','🍌','🥝'];

console.log('Total number of fruits: ' + (fruits.length-1));

for (let i = 0; i < fruits.length; i++) {
    console.log(`FOR ${i} ${fruits[i]}`);
}

/* ************************************************************************* */
/* BOUCLE FOR OF (for array)*/

for (let fruit of fruits) {
    console.log('FOR OF ' + fruit);
}

/* ************************************************************************* */
/* BOUCLE object */

let user = {
    firstname: 'Hubert',
    lastname: 'DOUIN',
}
user.lastname;
user.firstname;
