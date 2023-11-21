/* ********************************************************************* */
/* EVERY SOME SORT REDUCE */

const members = ['Hubert','Jekeel','Nabil'];

// CONTROLE DES ELEMENTS DANS UN TABLEAU

/** every() **/
// si tous les elements du tableau remplissent la condition
// equivalent à &&
members.every(item => item.includes('e')); // false

/** some() **/
// si au moins un des éléments du tableau remplit la condition
// equivalent à ||
members.some(item => item.includes('e')); // true

/** sort() **/
let numeric = [12,45,89,41,56,55,63,85,41];
function absort(a,b) { return a-b; }

numeric.sort((a,b) => a-b); // Array(9) [ 12, 41, 41, 45, 55, 56, 63, 85, 89 ]
numeric.sort((a,b) => b-a); // Array(9) [ 89, 85, 63, 56, 55, 45, 41, 41, 12 ]

let mumbers = [100,20000,30000,5000];
mumbers.sort(); // attention ne marche pas avec de gros chiffres

['Vadim','Naima','Hung'].sort(); // Array(3) [ "Hung", "Naima", "Vadim" ]

['vadim','NAINMA','Hung'].sort(); // Array(3) [ "Hung", "NAINMA", "vadim" ]

['vadim','NAINMA','Hung'].sort((a,b) => b.localeCompare(a));


/** reduce() **/

[0,1,2,3,4,5,6].reduce((accumul, current) => accumul + current); // 21
// par tour
// accumul + current
['a','b','c','d','e','f'].reduce((accumul, current) => accumul + current); // abcdef
['Vadim','Naima','Hung'].reduce((acc,curr) => acc +' '+ curr);