/* ****************************************************************************************** */
/*
- Créer une fonction qui prend 2 paramètres : un tableau (de strings ou numbers) et un nombre
- La fonction doit renvoyer un tableau dans lequel toutes les valeurs du tableau initial
  sont réparties dans des tableaux dont la longueur est celle indiquée en deuxième paramètre
- chunkThis( [1, 2, 3, 4, 5, 6, 7], 2 ) doit retourner [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]
*/
let nums = [1, 2, 3, 4, 5, 6, 7];

function chunkThis() {
    let arrayAll = [];
    const size = 2;
    for (let i = 0; i < nums.length; i += size) {
        const chunk = nums.slice(i, i + size);
        arrayAll.push(chunk);
    }
    return arrayAll;
}
let chunkthis = chunkThis(nums);
// console.log('chunkThis');
// console.log(chunkthis);

/* ****************************************************************************************** */
/*
Créer une fonction qui décode une phrase selon le Code de César
    - Ce code décale chaque caractère de 13 places dans l'alphabet
    - Utiliser cette fonction pour décrypter les codes suivants :
      - BCRAPYNFFEBBZF
      - URYYB JBEYQ
      - PRPV RFG ZBA PBQR FRPERG 
*/
let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let cryptMsg = ['BCRAPYNFFEBBZF', 'URYYB JBEYQ', 'PRPV RFG ZBA PBQR FRPERG'];
let msg = '';

function decryptMsg() {
    msg = '';
    for (let i = 0; i < cryptMsg.length; i++) {
        msg += cryptMsg[i].split('').map((letter) => {
            let charCode = letter.charCodeAt(); // unicode de la lettre
            if (charCode <= 77) { // 77: milieu alphabet CAP | 109: milieu alphabet BdC
                return String.fromCharCode(charCode + 13);
            } else {
                return String.fromCharCode(charCode - 13);
            }
        }).join('').replace(/[-]/g, " ");
        msg += '\n';
    }
    return msg;
}
let decryptmsg = decryptMsg();
console.log('decryptMsg');
console.log(decryptmsg);

console.log(alpha[12].charCodeAt());

/* ****************************************************************************************** */
/*
Créer une fonction qui prend un ou plusieurs mots en paramètre
- La fonction doit renvoyer ce mot transformé en mot d'argot "Pig Latin''
- Quand un mot commence par un voyelle on ajoute à la fin "- way " :
     orange → orange-way
- Quand un mot commence par des consonnes, elles sont enlevées et ajoutées à la fin
suivie de "ay" :
     grape → ape-gray
*/
let words = ['Javascript', 'Orange', 'maison', 'lunette'];

function switchSuffix(array) {
    let suffix = '';
    let result = [];
    for (i = 0; i < array.length; i++) {
        if (array[i].slice(-1).match(/[aeiouy]/)) {
            suffix = 'way';
        } else {
            suffix = 'ay'
        }
        result.push(array[i] + suffix);
    }
    return result;
}
let switchsuffix = switchSuffix(words);
// console.log('switchSuffix');
// console.log(switchsuffix);