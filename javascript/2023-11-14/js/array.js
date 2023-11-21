/* *************************************************************** */
/* TABLEAUX */

let array1 = ['javascript','Python','PHP','Java','C++'];

// nombre d'éléments dans le tableau
array1.length; // 5

// ajoute au debut
array1.unshift('SQL');

// ajoute a la fin
array1.push('C++','TypeScript');
// console.log(array1); // Array(6) [ "javascript", "Python", "PHP", "Java", "C++", "TypeScript" ]

// supprime le premier element
array1.shift();

// supprime le dernier élément
array1.pop(); // C++


/* *************************************************************** */
/* SPRAID OPERATOR */

let array2 = [1,2,3];
let array3 = [4,5,6];
// attention, ne pas retourner se que renvoi la fonction
// utilisez la apres l'operation
array4 = array2.push(...array3); // Array(8) [ "SQL", "javascript", "Python", "PHP", "Java", "C++", "C++", "TypeScript" ]
array5 = [...array2,...array2];


/* *************************************************************** */
/* DECOUPER */

let array6 = array5.slice(3,array5.length-1);
let array7 = array5.slice(0,2);
//console.log(array4);

/* *************************************************************** */
/* AJOUTER | ENLEVER | MODIFIER */

// le tableau existant est changé definitivement
let fruits = ['🍌','🍓','🍋','🍏'];
fruits.splice(1,2); // a partir de index 1 retire 2 elements
fruits = ['🍌','🍓','🍋','🍏'];
// ex: splice(start, deleteCount, item1, item2, itemN)
fruits.splice(0, 0, '🍒','🍒','🍏');
// console.log(fruits);


/* *************************************************************** */
/* INDEXOF |  */

let fruits2 = ['🍒','🍌','🍓','🍋','🍏'];
let str = fruits2.join(' ');
// console.log(str);



