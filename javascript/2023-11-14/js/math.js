/* *************************************************************** */
/* METHODE MATH */

// la majeure partie des methodes ou proprietes s'utilisent directement depuis l'objet MATH

Math.PI; // 3.14116

// arrondi au chiffre rond superieur ou inferieur
Math.round(10.3); // 10
Math.round(10.8); // 11

// arrondi au chiffre en dessous
Math.floor(10.6); // 10

// arrondi au chiffre au dessus
Math.ceil(10.8); // 11

// supprime les decimales
Math.trunc(12.58); // 12

// random
Math.random(); // 0.352046729692407


// généré un nombre aleatoire
Math.random(); // nombre aleatoire entre 0 et 1 exclus
Math.random()*10; // entre 0 inclus et 10 exclu

// interval
let max = 30;
let min = 10;
let interval = Math.floor(Math.random()*(max-min+1) + min);
// console.log(interval);

// trouve la valeure minimale
Math.min(10,60,4,87,33); // 4

// trouve la valeure maximale
Math.min(10,60,4,87,33); // 87


