/* **************************************************************** */
/* MAP map() */

let names = ['Soumah','Noemie', 'Thomas'];
let upperNames = [];
for (let name of names) {
    upperNames.push(name.toUpperCase());
}

// la methode MAP est une boucle qui renvoi un ARRAY 
// avec chaque élément modifié selon la fonction en parametre
// generalement appeler ITEM
// @params callback
upperNames = names.map(item => item.toUpperCase());
// console.log(names); // Array(3) [ "Soumah", "Noemie", "Thomas" ]
// console.log(upperNames); // Array(3) [ "SOUMAH", "NOEMIE", "THOMAS" ]


/* **************************************************************** */
/* FILTER filter() */

// la methode filter() est une boucle qui va renvoyer un nouveau tableau qui contiendra uniquement 
// les éléments respectant la ou les conditions données en instruction
let filterNames = [];
filterNames = names.filter(item => item.includes('a'));
// console.log(filterNames); // Array [ "Soumah", "Thomas" ]

/* CHAINAGE DE METHODES */

filterNames = names.filter(item => item.includes('a')).map(item => item.toUpperCase());
// console.log(filterNames); // Array [ "SOUMAH", "THOMAS" ]

