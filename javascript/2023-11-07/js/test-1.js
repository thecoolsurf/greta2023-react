/*
CONSIGNE 1
- bouclez le tableau
- affichez chacun des éléments du tableau dans la console
- arrêtez la boucle des que l'élément KIWI a été trouvé

CONSIGNE 2
- mêmes cconsignes
- si l'élément KIWI n'est pas trouvé dans le tableau
  affichez un seul message à la fin de la boucle
  KIWI NON TROUVE
*/

const allfruits = ['Fraise','Cerise','Pomme','Peiche','Banane'];
let msg;
let count = 0;
for (let fruit of allfruits) {
    console.log(fruit);
    if (fruit === 'Kiwi') {
        break;
    }
}

let find = false;
let total = fruits.length;
for (let fruit of allfruits) {
    count++;
    console.log(fruit);
    if (fruit === 'Kiwi') {
        find = true;
        break;
    } else if (count === total-1) {
        console.log('TOTAL: Kiwi non trouvé dans le tableau');
    }
}
if (!find) { // find === false
    console.log('FIND: Kiwi non trouvé dans le tableau');
}
if (count === fruits.length) {
    console.log('COUNT: Kiwi non trouvé dans le tableau');
}


