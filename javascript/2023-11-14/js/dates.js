/* ********************************************************** */
/* DATES */

// date STRING
// recupere une string brut
let date = Date();
// console.log(date);

// date OBJET
// recupere tous les objets de Date pour les manipuler
let newdate = new Date();
// console.log(newdate);
let fulldate = newdate.getDay()+' '+newdate.getMonth()+' '+newdate.getFullYear();
// console.log(fulldate);

let localdate = newdate.toLocaleDateString(); // 14/11/2023
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}
let localdatefr = newdate.toLocaleDateString('fr',options); // mardi 14 novembre 2024
// console.log(localdatefr);

let mois = newdate.toLocaleDateString('fr',{month:'long'}); // novembre